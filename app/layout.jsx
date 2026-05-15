import './globals.css'

export const metadata = {
  title: 'Unmoored',
  description: 'Life beyond the dock',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
