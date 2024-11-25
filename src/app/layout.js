import "./globals.css";
import Navbar from "~/components/cores/Navbar/Navbar";

export const metadata = {
  title: "Code Challenge",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div>
            <Navbar/>
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
