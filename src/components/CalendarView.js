// ✅ src/components/calendar/CalendarView.jsx
import React from "react";
import {
  Container,
  Content,
  Title,
  Row,
  LeftColumn,
  FormCard,
  Label,
  Input,
  Select,
  Button,
  CalendarPanel,
  CalendarHeader,
  YearNav,
  YearButton,
  YearTitle,
  MonthsGrid,
  MonthCard,
  MonthName,
  MiniNote,
  MonthBack,
  DaysGrid,
  DayName,
  DayCell,
  DayNumber,
  DayDots,
  DayDot,
  EventsCard,
  EventsHeader,
  EventsList,
  EventItem,
  EventTitle,
  EventMeta,
  EventActions,
  SmallButton,
  EditRow,
  FilterRow,
  SearchInput,
  ToastStack,
  ToastItem,
  ToastTitle,
  ToastClose,
  EmptyState,
  DateInline,
} from "../styles/calendar";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const DAY_NAMES = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// helpers for calendar rendering (UI-only)
function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}
function firstWeekdayMonStart(year, monthIndex) {
  // Return 0..6 with Monday=0 ... Sunday=6
  const js = new Date(year, monthIndex, 1).getDay(); // 0=Sun..6=Sat
  return (js + 6) % 7;
}
function toISO(y, mIndex, d) {
  const mm = String(mIndex + 1).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

export default function CalendarView(props) {
  const {
    // form
    titleInput, setTitleInput,
    dateInput, setDateInput,
    timeInput, setTimeInput,
    addEvent,
    // list
    filtered,
    editingId, setEditingId,
    editTitle, setEditTitle,
    editDate, setEditDate,
    editTime, setEditTime,
    saveEdit, deleteEvent, startEdit,
    // filters
    filterMode, setFilterMode,
    viewDate, setViewDate,
    search, setSearch,
    // toasts
    visibleToasts, systemToasts,
    closeToast, closeSystemToast,
    // calendar
    calendarYear, setYear, prevYear, nextYear,
    calendarMode, activeMonth, openMonth, backToYear,
    prevMonth, nextMonth,
    eventsMap, onDayClick,
  } = props;

  return (
    <Container>
      <Content>
        <Title>Calendar</Title>

        <Row>
          {/* LEFT COLUMN: две компактные карточки + список событий ниже */}
          

          {/* RIGHT: BIG CALENDAR PANEL — занимает всё оставшееся пространство */}
          <CalendarPanel>
            <CalendarHeader>
              {calendarMode === "year" ? (
                <>
                  <YearNav>
                    <YearButton onClick={prevYear}>‹</YearButton>
                    <YearTitle>{calendarYear}</YearTitle>
                    <YearButton onClick={nextYear}>›</YearButton>
                  </YearNav>
                  <MiniNote>Click a month to open it</MiniNote>
                </>
              ) : (
                <>
                  <YearNav>
                    {/* В режиме месяцев кнопки листают МЕСЯЦЫ (а не годы) */}
                    <YearButton onClick={prevMonth}>‹</YearButton>
                    <YearTitle>{MONTH_NAMES[activeMonth]} {calendarYear}</YearTitle>
                    <YearButton onClick={nextMonth}>›</YearButton>
                  </YearNav>
                  {/* Кнопка назад открывает обзор месяцев */}
                  <MonthBack onClick={backToYear}>↩ Back to year</MonthBack>
                </>
              )}
            </CalendarHeader>

            {calendarMode === "year" ? (
              <MonthsGrid>
                {MONTH_NAMES.map((name, idx) => (
                  <MonthCard key={idx} onClick={() => openMonth(idx)}>
                    <MonthName>{name}</MonthName>
                  </MonthCard>
                ))}
              </MonthsGrid>
            ) : (
              <>
                <DaysGrid>
                  {DAY_NAMES.map((d) => (
                    <DayName key={d}>{d}</DayName>
                  ))}

                  {/* пустые ведущие ячейки */}
                  {Array.from({ length: firstWeekdayMonStart(calendarYear, activeMonth) }).map((_, i) => (
                    <DayCell key={`lead-${i}`} data-empty="1" />
                  ))}

                  {/* дни месяца */}
                  {Array.from({ length: daysInMonth(calendarYear, activeMonth) }).map((_, i) => {
                    const dayNum = i + 1;
                    const iso = toISO(calendarYear, activeMonth, dayNum);
                    const eventsForDay = eventsMap.get(iso) || [];
                    const dotsCount = Math.min(eventsForDay.length, 12); // ограничим число точек

                    return (
                      <DayCell key={iso} onClick={() => onDayClick(iso)}>
                        <DayNumber>{dayNum}</DayNumber>

                        {/* Только точки, без названий задач */}
                        {dotsCount > 0 && (
                          <DayDots aria-label={`${eventsForDay.length} events`}>
                            {Array.from({ length: dotsCount }).map((_, idx) => (
                              <DayDot key={idx} />
                            ))}
                          </DayDots>
                        )}
                      </DayCell>
                    );
                  })}
                </DaysGrid>
              </>
            )}
          </CalendarPanel>
          <LeftColumn>
            <FormCard>
              <Label>Event title</Label>
              <Input
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                placeholder="e.g. Call client"
              />

              <Label>Date</Label>
              <Input
                type="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
              />

              <Label>Time</Label>
              <Input
                type="time"
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
              />

              <Button onClick={addEvent}>Add event</Button>
            </FormCard>

            <FormCard>
              <FilterRow>
                <div>
                  <Label>Filter</Label>
                  <Select
                    value={filterMode}
                    onChange={(e) => setFilterMode(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="next7">Next 7 days</option>
                    <option value="next30">Next 30 days</option>
                    <option value="overdue">Overdue</option>
                    <option value="ondate">On date…</option>
                  </Select>
                </div>

                <div>
                  <Label>Pick a day</Label>
                  <DateInline
                    type="date"
                    value={viewDate}
                    onChange={(e) => {
                      setViewDate(e.target.value);
                      setFilterMode("ondate");
                    }}
                  />
                </div>

                <div>
                  <Label>Search</Label>
                  <SearchInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title…"
                  />
                </div>
              </FilterRow>
            </FormCard>

            {/* EVENTS LIST — теперь сразу под формами, узкой ширины */}
            <EventsCard>
              <EventsHeader>Events</EventsHeader>

              {filtered.length === 0 ? (
                <EmptyState>No events found.</EmptyState>
              ) : (
                <EventsList>
                  {filtered.map((e) => {
                    const dt = new Date(e.datetime);
                    const dateStr = dt.toLocaleString(undefined, {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    const isEditing = editingId === e.id;
                    const isOverdue = dt.getTime() < Date.now();

                    return (
                      <EventItem key={e.id} data-overdue={isOverdue ? "1" : "0"}>
                        {!isEditing ? (
                          <>
                            <div>
                              <EventTitle>{e.title}</EventTitle>
                              <EventMeta>{dateStr}</EventMeta>
                            </div>
                            <EventActions>
                              <SmallButton onClick={() => startEdit(e)}>Edit</SmallButton>
                              <SmallButton onClick={() => deleteEvent(e.id)}>Delete</SmallButton>
                            </EventActions>
                          </>
                        ) : (
                          <EditRow>
                            <div>
                              <Label>Title</Label>
                              <Input
                                value={editTitle}
                                onChange={(ev) => setEditTitle(ev.target.value)}
                              />
                            </div>
                            <div>
                              <Label>Date</Label>
                              <Input
                                type="date"
                                value={editDate}
                                onChange={(ev) => setEditDate(ev.target.value)}
                              />
                            </div>
                            <div>
                              <Label>Time</Label>
                              <Input
                                type="time"
                                value={editTime}
                                onChange={(ev) => setEditTime(ev.target.value)}
                              />
                            </div>
                            <EventActions style={{ alignSelf: "end" }}>
                              <SmallButton onClick={saveEdit}>Save</SmallButton>
                              <SmallButton onClick={() => setEditingId(null)}>Cancel</SmallButton>
                            </EventActions>
                          </EditRow>
                        )}
                      </EventItem>
                    );
                  })}
                </EventsList>
              )}
            </EventsCard>
          </LeftColumn>
        </Row>

        {/* ТОСТЫ справа снизу */}
        <ToastStack>
          {visibleToasts.map((id) => {
            // показываем текст по id среди всех событий (независимо от текущего фильтра)
            const all = filtered.length ? null : null; // заглушка, чтобы не переиспользовать filtered
            // Поищем событие среди всех возможных дат через eventsMap
            let eventFound = null;
            if (!eventFound && eventsMap) {
              for (const [, arr] of eventsMap.entries()) {
                const hit = arr.find((e) => e.id === id);
                if (hit) { eventFound = hit; break; }
              }
            }
            if (!eventFound) return null;

            return (
              <ToastItem key={id}>
                <ToastTitle>Deadline reached</ToastTitle>
                <div>{eventFound.title}</div>
                <ToastClose onClick={() => closeToast(id)}>×</ToastClose>
              </ToastItem>
            );
          })}
          {systemToasts.map((t) => (
            <ToastItem key={t.id}>
              <ToastTitle>Error</ToastTitle>
              <div>{t.text}</div>
              <ToastClose onClick={() => closeSystemToast(t.id)}>×</ToastClose>
            </ToastItem>
          ))}
        </ToastStack>
      </Content>
    </Container>
  );
}
