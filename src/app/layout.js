import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buland Darwaza - Gateway of Magnificence | Fatehpur Sikri's Iconic Monument",
  description: "Visit Buland Darwaza, the world's tallest gateway at Fatehpur Sikri. Discover the history, architecture, and timings of this UNESCO World Heritage Site near Agra, India.",
   icons: {
    icon: [
      { url: '/bd-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/bd-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/bd-180x180.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
