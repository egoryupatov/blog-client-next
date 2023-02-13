import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { Roboto } from "@next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Live from "@/components/Live/Live";
import { SERVER_URL } from "@/constants/const";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-roboto",
});

async function getLiveComments() {
  const liveComments = await fetch(`${SERVER_URL}/comments/live`);

  if (!liveComments.ok) {
    throw new Error("Failed to fetch data");
  }

  return liveComments.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const liveComments = await getLiveComments();

  return (
    <html lang="en" className={roboto.className}>
      <head />
      <body>
        <div className="app">
          <Navbar />
          <div className="layout">
            <aside className="aside-left">
              <Sidebar />
            </aside>
            <main className="view">{children}</main>
            <aside className="aside-right">
              <Live liveComments={liveComments} />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
