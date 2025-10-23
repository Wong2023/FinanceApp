// ✅ src/components/calendar/CalendarLogic.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import CalendarView from "./CalendarView";

const LS_KEY = "calendarEvents";

function loadEvents() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveEvents(events) {
  localStorage.setItem(LS_KEY, JSON.stringify(events));
}

const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

function combineDateTime(dateStr, timeStr) {
  const t = timeStr && timeStr.trim() ? timeStr : "00:00";
  return new Date(`${dateStr}T${t}`);
}

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function endOfDay(d) {
  const x = new Date(d);
  x.setHours(23, 59, 59, 999);
  return x;
}
function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
function sameYMD(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function ymdLocal(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}


export default function CalendarLogic() {
  // --- форма добавления
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  // --- список
  const [events, setEvents] = useState(() => loadEvents());

  // --- поиск/фильтры
  const [search, setSearch] = useState("");
  const [filterMode, setFilterMode] = useState("all"); // all | today | tomorrow | next7 | next30 | overdue | ondate
  const [viewDate, setViewDate] = useState(""); // YYYY-MM-DD для ondate

  // --- тосты
  const [visibleToasts, setVisibleToasts] = useState([]); // id событий (дедлайны)
  const [systemToasts, setSystemToasts] = useState([]); // {id, text}
  const firedThisSession = useRef(new Set());

  // --- редактирование
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");

  // --- календарь (год/месяц)
  const now = new Date();
  const [calendarYear, setCalendarYear] = useState(now.getFullYear());
  const [calendarMode, setCalendarMode] = useState("month"); // 'year' | 'month' (дефолт — дни текущего месяца)
  const [activeMonth, setActiveMonth] = useState(now.getMonth()); // 0..11

  // сохранение
  useEffect(() => saveEvents(events), [events]);

  // проверка дедлайнов (20с)
  useEffect(() => {
    const tick = () => {
      const t = Date.now();
      const due = events.filter((e) => new Date(e.datetime).getTime() <= t);
      due.forEach((e) => {
        if (!visibleToasts.includes(e.id) && !firedThisSession.current.has(e.id)) {
          setVisibleToasts((prev) => [...prev, e.id]);
          firedThisSession.current.add(e.id);
        }
      });
    };
    tick();
    const i = setInterval(tick, 20000);
    return () => clearInterval(i);
  }, [events, visibleToasts]);

  // добавление
  const addEvent = () => {
    const title = titleInput.trim();
    if (!title || !dateInput) return;

    const d = combineDateTime(dateInput, timeInput);
    if (Number.isNaN(d.getTime())) return;

    // запрет добавления в прошлое
    if (d.getTime() < Date.now()) {
      const id = uid();
      setSystemToasts((prev) => [...prev, { id, text: "Cannot add an event in the past" }]);
      return;
    }

    const ev = {
      id: uid(),
      title,
      datetime: d.toISOString(),
      createdAt: new Date().toISOString(),
    };

    const next = [...events, ev].sort(
      (a, b) => new Date(a.datetime) - new Date(b.datetime)
    );
    setEvents(next);

    setTitleInput("");
    setDateInput("");
    setTimeInput("");
  };

  // редактирование
  const startEdit = (e) => {
    setEditingId(e.id);
    setEditTitle(e.title);
    const dt = new Date(e.datetime);
    setEditDate(dt.toISOString().slice(0, 10));
    setEditTime(dt.toTimeString().slice(0, 5));
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDate("");
    setEditTime("");
  };
  const saveEdit = () => {
    if (!editingId) return;
    const title = editTitle.trim();
    if (!title || !editDate) return;
    const d = combineDateTime(editDate, editTime);
    if (Number.isNaN(d.getTime())) return;

    const next = events
      .map((e) => (e.id === editingId ? { ...e, title, datetime: d.toISOString() } : e))
      .sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    setEvents(next);
    cancelEdit();
  };

  // удаление
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
    setVisibleToasts((prev) => prev.filter((x) => x !== id));
    firedThisSession.current.delete(id);
  };

  // тост
  const closeToast = (id) => setVisibleToasts((prev) => prev.filter((x) => x !== id));
  const closeSystemToast = (id) => setSystemToasts((prev) => prev.filter((t) => t.id !== id));

  // карта событий по дате 'YYYY-MM-DD' -> массив событий
  const eventsMap = useMemo(() => {
    const m = new Map();
    for (const e of events) {
      const d = new Date(e.datetime);
      const key = ymdLocal(d);
      if (!m.has(key)) m.set(key, []);
      m.get(key).push(e);
    }
    return m;
  }, [events]);

  // фильтрация для списка
  const filtered = useMemo(() => {
    const now = new Date();
    const todayStart = startOfDay(now);
    const todayEnd = endOfDay(now);
    const tomorrowStart = startOfDay(addDays(now, 1));
    const tomorrowEnd = endOfDay(addDays(now, 1));
    const next7End = endOfDay(addDays(now, 7));
    const next30End = endOfDay(addDays(now, 30));

    return events.filter((e) => {
      const dt = new Date(e.datetime);

      let pass = true;
      switch (filterMode) {
        case "today": pass = dt >= todayStart && dt <= todayEnd; break;
        case "tomorrow": pass = dt >= tomorrowStart && dt <= tomorrowEnd; break;
        case "next7": pass = dt > todayEnd && dt <= next7End; break;
        case "next30": pass = dt > todayEnd && dt <= next30End; break;
        case "overdue": pass = dt < new Date(); break;
        case "ondate": pass = !!viewDate && sameYMD(dt, new Date(viewDate)); break;
        default: pass = true;
      }
      if (!pass) return false;

      if (search.trim()) {
        return e.title.toLowerCase().includes(search.trim().toLowerCase());
      }
      return true;
    });
  }, [events, filterMode, viewDate, search]);

  // действия календаря
  const setYear = (y) => setCalendarYear(y);
  const prevYear = () => setCalendarYear((y) => y - 1);
  const nextYear = () => setCalendarYear((y) => y + 1);

  const openMonth = (m) => {
    setActiveMonth(m);
    setCalendarMode("month");
  };
  const backToYear = () => setCalendarMode("year");

  // переключение месяцев (с переходом года)
  const prevMonth = () => {
    setActiveMonth((m) => {
      if (m === 0) {
        setCalendarYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  };
  const nextMonth = () => {
    setActiveMonth((m) => {
      if (m === 11) {
        setCalendarYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  };

  // клик по дню в календаре — показать задачи за день
  const onDayClick = (isoDate) => {
    setViewDate(isoDate);
    setFilterMode("ondate");
  };

  return (
    <CalendarView
      // форма
      titleInput={titleInput} setTitleInput={setTitleInput}
      dateInput={dateInput} setDateInput={setDateInput}
      timeInput={timeInput} setTimeInput={setTimeInput}
      addEvent={addEvent}

      // список
      filtered={filtered}
      editingId={editingId} setEditingId={setEditingId}
      editTitle={editTitle} setEditTitle={setEditTitle}
      editDate={editDate} setEditDate={setEditDate}
      editTime={editTime} setEditTime={setEditTime}
      saveEdit={saveEdit}
      deleteEvent={deleteEvent}
      startEdit={startEdit}

      // фильтры
      filterMode={filterMode} setFilterMode={setFilterMode}
      viewDate={viewDate} setViewDate={setViewDate}
      search={search} setSearch={setSearch}

      // тосты
      visibleToasts={visibleToasts}
      systemToasts={systemToasts}
      closeToast={closeToast}
      closeSystemToast={closeSystemToast}

      // календарь
      calendarYear={calendarYear}
      setYear={setYear}
      prevYear={prevYear}
      nextYear={nextYear}
      calendarMode={calendarMode}
      activeMonth={activeMonth}
      openMonth={openMonth}
      backToYear={backToYear}
      prevMonth={prevMonth}
      nextMonth={nextMonth}
      eventsMap={eventsMap}
      onDayClick={onDayClick}
    />
  );
}
