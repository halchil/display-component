export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(to bottom right, #1e3a8a, #3b82f6)',
      color: 'white'
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Hello World!
      </h1>
      <p style={{
        fontSize: '1.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Next.js + Docker + Nginx
      </p>
      <div style={{
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0.5rem',
        backdropFilter: 'blur(10px)'
      }}>
        <p>🚀 アプリケーションが正常に起動しました</p>
      </div>
    </main>
  )
}

