export const metadata = {
  title: 'BEYOND REALMS 29 - VR ARENA',
  description: 'Welcome to the Beyond Realms 29!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
        }}>
          <p style={{color: 'white'}}>Header Beyond Realms 29</p>
        </header>
        {children}
        <footer
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
        }}
        >
          <p style={{color: 'white'}}>Footer Beyond Realms 29</p>
        </footer>
        </body>
    </html>
  )
}
