import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
