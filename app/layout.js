import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Receiver Engagement",
  description: "WU Receiver Engagement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />

        <div className="bg-yellow-400">{children}</div>
      </body>
    </html>
  );
}
