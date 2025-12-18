import dynamic from 'next/dynamic';

// Leafletはクライアントサイドのみで動作するため、SSRを無効にする
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>地図を読み込んでいます...</p>
});

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
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Hello World!
      </h1>
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Leaflet + OpenStreetMap 地図表示
      </p>
      <div style={{
        width: '90%',
        maxWidth: '1000px',
        marginBottom: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <Map />
      </div>
      <div style={{
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0.5rem',
        backdropFilter: 'blur(10px)'
      }}>
        <p>🗺️ OpenStreetMapで地図を表示しています</p>
      </div>
    </main>
  )
}

