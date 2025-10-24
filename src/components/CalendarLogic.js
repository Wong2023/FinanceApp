// ✅ CalendarLogic.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import CalendarView from "./CalendarView";

const LS_KEY = "calendarEvents";
const loadEvents = () => {
  try {
    const d = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    return Array.isArray(d) ? d : [];
  } catch { return []; }
};
const saveEvents = (events) => localStorage.setItem(LS_KEY, JSON.stringify(events));
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
const combineDT = (date, time) => {
  const [y, m, d] = date.split("-").map(Number);
  const [h, min] = (time || "00:00").split(":").map(Number);
  return new Date(y, m - 1, d, h, min); // ← создаём локальную дату, не UTC
};

const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const startOfDay = (d) => new Date(d.setHours(0, 0, 0, 0));
const endOfDay = (d) => new Date(d.setHours(23, 59, 59, 999));
const sameYMD = (a, b) => a.toDateString() === b.toDateString();
const ymd = (d) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};


export default function CalendarLogic() {
  const [title, setTitle] = useState(""), [date, setDate] = useState(""),
    [time, setTime] = useState(""), [events, setEvents] = useState(loadEvents),
    [search, setSearch] = useState(""), [filter, setFilter] = useState("all"),
    [viewDate, setViewDate] = useState(""), [visible, setVisible] = useState([]),
    [sys, setSys] = useState([]), [editId, setEditId] = useState(null),
    [editTitle, setEditTitle] = useState(""), [editDate, setEditDate] = useState(""),
    [editTime, setEditTime] = useState("");
  const fired = useRef(new Set()), now = new Date(),
    [year, setYear] = useState(now.getFullYear()),
    [mode, setMode] = useState("month"), [month, setMonth] = useState(now.getMonth());

  useEffect(() => saveEvents(events), [events]);
  useEffect(() => {
    const tick = () => {
      const t = Date.now();
      events.forEach((e) => {
        if (new Date(e.datetime).getTime() <= t &&
          !visible.includes(e.id) && !fired.current.has(e.id)) {
          fired.current.add(e.id);
          setVisible((v) => [...v, e.id]);
        }
      });
    };
    tick(); const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, [events, visible]);

  const addEvent = () => {
    if (!title.trim() || !date) return;
    const d = combineDT(date, time);
    if (d < Date.now()) return setSys((s) => [...s, { id: uid(), text: "Cannot add past event" }]);
    const ev = { id: uid(), title: title.trim(), datetime: d.toISOString(), createdAt: new Date().toISOString() };
    setEvents((e) => [...e, ev].sort((a, b) => new Date(a.datetime) - new Date(b.datetime)));
    setTitle(""); setDate(""); setTime("");
  };

  const startEdit = (e) => {
    setEditId(e.id); setEditTitle(e.title);
    const dt = new Date(e.datetime);
    setEditDate(ymd(dt)); setEditTime(dt.toTimeString().slice(0, 5));
  };
  const saveEdit = () => {
    if (!editId || !editTitle.trim() || !editDate) return;
    const d = combineDT(editDate, editTime);
    setEvents((evs) =>
      evs.map((e) => e.id === editId ? { ...e, title: editTitle, datetime: d.toISOString() } : e)
        .sort((a, b) => new Date(a.datetime) - new Date(b.datetime)));
    setEditId(null);
  };

  const del = (id) => { setEvents((e) => e.filter((x) => x.id !== id)); setVisible((v) => v.filter((x) => x !== id)); };
  const closeToast = (id) => setVisible((v) => v.filter((x) => x !== id));
  const closeSys = (id) => setSys((s) => s.filter((t) => t.id !== id));

  const map = useMemo(() => {
    const m = new Map(); for (const e of events) {
      const k = ymd(new Date(e.datetime)); if (!m.has(k)) m.set(k, []);
      m.get(k).push(e);
    } return m;
  }, [events]);

  const filtered = useMemo(() => {
    const now = new Date(), t0 = startOfDay(new Date()), t1 = endOfDay(new Date());
    const tmr0 = startOfDay(addDays(now, 1)), tmr1 = endOfDay(addDays(now, 1));
    const n7 = endOfDay(addDays(now, 7)), n30 = endOfDay(addDays(now, 30));
    return events.filter((e) => {
      const dt = new Date(e.datetime);
      const pass =
        filter === "today" ? dt >= t0 && dt <= t1 :
        filter === "tomorrow" ? dt >= tmr0 && dt <= tmr1 :
        filter === "next7" ? dt > t1 && dt <= n7 :
        filter === "next30" ? dt > t1 && dt <= n30 :
        filter === "overdue" ? dt < now :
        filter === "ondate" && viewDate ? sameYMD(dt, new Date(viewDate)) : true;
      return pass && (!search.trim() || e.title.toLowerCase().includes(search.trim().toLowerCase()));
    });
  }, [events, filter, viewDate, search]);

  const prevYear = () => setYear((y) => y - 1), nextYear = () => setYear((y) => y + 1);
  const openMonth = (m) => { setMonth(m); setMode("month"); };
  const backToYear = () => setMode("year");
  const prevMonth = () => setMonth((m) => (m === 0 ? (setYear((y) => y - 1), 11) : m - 1));
  const nextMonth = () => setMonth((m) => (m === 11 ? (setYear((y) => y + 1), 0) : m + 1));
  const onDayClick = (iso) => { setViewDate(iso); setFilter("ondate"); };

  return (
    <CalendarView
      {...{ title, setTitle, date, setDate, time, setTime, addEvent, filtered,
        editId, setEditId, editTitle, setEditTitle, editDate, setEditDate, editTime, setEditTime,
        saveEdit, del, startEdit, filter, setFilter, viewDate, setViewDate, search, setSearch,
        visible, sys, closeToast, closeSys, year, setYear, prevYear, nextYear, mode, month,
        openMonth, backToYear, prevMonth, nextMonth, map, onDayClick }}
    />
  );
}
