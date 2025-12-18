import dynamic from 'next/dynamic'

// FullCalendarはクライアントサイドのみで動作するため、SSRを無効化
const Calendar = dynamic(() => import('./components/Calendar'), {
  ssr: false,
  loading: () => <div style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>カレンダーを読み込み中...</div>
})

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(to bottom right, #1e3a8a, #3b82f6)',
      color: 'white',
      gap: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}>
          Hello World!
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '0.5rem',
          opacity: 0.9
        }}>
          Next.js + Docker + Nginx + FullCalendar
        </p>
        <div style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '0.5rem',
          backdropFilter: 'blur(10px)',
          marginTop: '1rem'
        }}>
          <p>📅 カレンダー機能を追加しました</p>
        </div>
      </div>

      <Calendar />

      <div style={{
        textAlign: 'center',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0.5rem',
        backdropFilter: 'blur(10px)',
        maxWidth: '1200px',
        width: '100%'
      }}>
        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
          🚀 カレンダーをクリックして日付を選択したり、イベントをクリックして詳細を表示できます
        </p>
      </div>
    </main>
  )
}

