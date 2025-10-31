import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/general/Navbar"
import { ThemeProvider } from "@/components/ui/theme-provider"

export const metadata: Metadata = {
  title: "BookIt",
  description:
    "People can explore travel experiences,select available slots, and complete bookings",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className='px-2 md:px-28'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
