import { TaskProvider } from "@/contex/TaskContex";
import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/Nav";
import { Toaster } from "./Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasks App",
  description: "Create tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          <NavBar />
          {children}</TaskProvider>
          <Toaster />
      </body>
    </html>
  );
}
