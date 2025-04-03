export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to RAM-Q</h1>
      <a
        href="/themes/1"
        style={{
          marginTop: '1rem',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '1rem',
          textDecoration: 'none'
        }}
      >
        Start
      </a>
    </main>
  );
}
