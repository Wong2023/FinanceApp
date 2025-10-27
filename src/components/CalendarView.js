// ✅ CalendarView.js
import React from "react";
import {
  Container, Content, Title, Row, LeftColumn, FormCard, Label, Input, Select, Button,
  CalendarPanel, CalendarHeader, YearNav, YearButton, YearTitle, MonthsGrid, MonthCard, MonthName,
  MiniNote, MonthBack, DaysGrid, DayName, DayCell, DayNumber, DayDots, DayDot, EventsCard, EventsHeader,
  EventsList, EventItem, EventTitle, EventMeta, EventActions, SmallButton, FilterRow, SearchInput,
  ToastStack, ToastItem, ToastTitle, ToastClose, EmptyState, DateInline,
} from "../styles/calendar";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const daysInMonth = (y,m)=>new Date(y,m+1,0).getDate();
const firstWeekday = (y,m)=>(new Date(y,m,1).getDay()+6)%7;
const toISO=(y,m,d)=>`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;

const CalendarView = (p) => {
  const {
    title,setTitle,date,setDate,time,setTime,addEvent,filtered,editId,setEditId,
    editTitle,setEditTitle,editDate,setEditDate,editTime,setEditTime,saveEdit,del,startEdit,
    filter,setFilter,viewDate,setViewDate,search,setSearch,visible,sys,closeToast,closeSys,
    year,prevYear,nextYear,mode,month,openMonth,backToYear,prevMonth,nextMonth,map,onDayClick
  }=p;

  return (
    <Container><Content><Title>Calendar</Title><Row>
      <CalendarPanel>
        <CalendarHeader>
          {mode==="year"?(
            <>
              <YearNav><YearButton onClick={prevYear}>‹</YearButton><YearTitle>{year}</YearTitle><YearButton onClick={nextYear}>›</YearButton></YearNav>
              <MiniNote>Click a month to open</MiniNote>
            </>
          ):(
            <>
              <YearNav><YearButton onClick={prevMonth}>‹</YearButton><YearTitle>{MONTHS[month]} {year}</YearTitle><YearButton onClick={nextMonth}>›</YearButton></YearNav>
              <MonthBack onClick={backToYear}>↩ Back</MonthBack>
            </>
          )}
        </CalendarHeader>

        {mode==="year"?(
          <MonthsGrid>{MONTHS.map((n,i)=><MonthCard key={i} onClick={()=>openMonth(i)}><MonthName>{n}</MonthName></MonthCard>)}</MonthsGrid>
        ):(
          <DaysGrid>
            {DAYS.map((d)=><DayName key={d}>{d}</DayName>)}
            {Array.from({length:firstWeekday(year,month)}).map((_,i)=><DayCell key={`e${i}`} />)}
            {Array.from({length:daysInMonth(year,month)}).map((_,i)=>{
              const day=i+1,iso=toISO(year,month,day),evs=map.get(iso)||[];
              return(<DayCell key={iso} onClick={()=>onDayClick(iso)}>
                <DayNumber>{day}</DayNumber>
                {evs.length>0&&<DayDots>{evs.slice(0,12).map((_,j)=><DayDot key={j}/>)}</DayDots>}
              </DayCell>);
            })}
          </DaysGrid>
        )}
      </CalendarPanel>

      <LeftColumn>
        <FormCard>
          <Label>Event title</Label><Input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Call client"/>
          <Label>Date</Label><Input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
          <Label>Time</Label><Input type="time" value={time} onChange={e=>setTime(e.target.value)}/>
          <Button onClick={addEvent}>Add</Button>
        </FormCard>

        <FormCard>
          <FilterRow>
            <div><Label>Filter</Label>
              <Select value={filter} onChange={e=>setFilter(e.target.value)}>
                <option value="all">All</option><option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option><option value="next7">Next 7</option>
                <option value="next30">Next 30</option><option value="overdue">Overdue</option>
                <option value="ondate">On date…</option>
              </Select>
            </div>
            <div><Label>Pick</Label><DateInline type="date" value={viewDate} onChange={e=>{setViewDate(e.target.value);setFilter("ondate");}}/></div>
            <div><Label>Search</Label><SearchInput value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..."/></div>
          </FilterRow>
        </FormCard>

        <EventsCard><EventsHeader>Events</EventsHeader>
          {filtered.length===0?<EmptyState>No events.</EmptyState>:(
            <EventsList>{filtered.map(e=>{
              const dt=new Date(e.datetime),ds=dt.toLocaleString(),edit=editId===e.id,over=dt<Date.now();
              return(<EventItem key={e.id} data-overdue={over?"1":"0"}>
                {!edit?<>
                  <div><EventTitle>{e.title}</EventTitle><EventMeta>{ds}</EventMeta></div>
                  <EventActions><SmallButton onClick={()=>startEdit(e)}>Edit</SmallButton><SmallButton onClick={()=>del(e.id)}>Del</SmallButton></EventActions>
                </>:<>
                  <Label>Title</Label><Input value={editTitle} onChange={ev=>setEditTitle(ev.target.value)}/>
                  <Label>Date</Label><Input type="date" value={editDate} onChange={ev=>setEditDate(ev.target.value)}/>
                  <Label>Time</Label><Input type="time" value={editTime} onChange={ev=>setEditTime(ev.target.value)}/>
                  <EventActions><SmallButton onClick={saveEdit}>Save</SmallButton><SmallButton onClick={()=>setEditId(null)}>Cancel</SmallButton></EventActions>
                </>}
              </EventItem>);
            })}</EventsList>
          )}
        </EventsCard>
      </LeftColumn>
    </Row>

    <ToastStack>
      {visible.map(id=>{
        let found; for(const [,arr]of map.entries()){const f=arr.find(x=>x.id===id);if(f){found=f;break;}}
        if(!found)return null;
        return(<ToastItem key={id}><ToastTitle>Deadline</ToastTitle><div>{found.title}</div><ToastClose onClick={()=>closeToast(id)}>×</ToastClose></ToastItem>);
      })}
      {sys.map(t=><ToastItem key={t.id}><ToastTitle>Error</ToastTitle><div>{t.text}</div><ToastClose onClick={()=>closeSys(t.id)}>×</ToastClose></ToastItem>)}
    </ToastStack>
  </Content></Container>);
}

export default CalendarView;