'use client'

import { useEffect, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar() {
  const calendarRef = useRef<FullCalendar>(null)

  // サンプルイベントデータ
  const events = [
    {
      title: 'ミーティング',
      start: new Date(new Date().setHours(10, 0, 0)),
      end: new Date(new Date().setHours(11, 0, 0)),
      backgroundColor: '#3b82f6',
      borderColor: '#2563eb'
    },
    {
      title: 'ランチ３',
      start: new Date(new Date().setHours(12, 0, 0)),
      end: new Date(new Date().setHours(13, 0, 0)),
      backgroundColor: '#10b981',
      borderColor: '#059669'
    },
    {
      title: 'プロジェクトレビュー',
      start: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(14, 0, 0),
      end: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(16, 0, 0),
      backgroundColor: '#f59e0b',
      borderColor: '#d97706'
    },
    {
      title: 'チーム会議',
      start: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(9, 0, 0),
      end: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(10, 30, 0),
      backgroundColor: '#8b5cf6',
      borderColor: '#7c3aed'
    }
  ]

  const handleDateClick = (arg: any) => {
    console.log('Date clicked:', arg.dateStr)
  }

  const handleEventClick = (info: any) => {
    alert(`イベント: ${info.event.title}`)
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '1200px'
    }}>
      <style jsx global>{`
        .fc {
          color: #1f2937;
        }
        .fc .fc-button-primary {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }
        .fc .fc-button-primary:hover {
          background-color: #2563eb;
          border-color: #2563eb;
        }
        .fc .fc-button-primary:disabled {
          background-color: #93c5fd;
          border-color: #93c5fd;
        }
        .fc-theme-standard td,
        .fc-theme-standard th {
          border-color: #e5e7eb;
        }
        .fc-col-header-cell {
          background-color: #f3f4f6;
          font-weight: 600;
        }
        .fc-daygrid-day-number {
          color: #374151;
        }
        .fc-daygrid-day.fc-day-today {
          background-color: #dbeafe !important;
        }
      `}</style>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          today: '今日１',
          month: '月',
          week: '週',
          day: '日'
        }}
        locale="ja"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
        height="auto"
        aspectRatio={1.8}
      />
    </div>
  )
}

