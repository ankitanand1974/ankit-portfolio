import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientWrapper from "../components/clientWrapper";

export const metadata = {
  title: "Ankit Anand - Full Stack Web Developer",
  description: "Personal portfolio of Ankit Anand, a Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen transition-colors duration-300">
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
