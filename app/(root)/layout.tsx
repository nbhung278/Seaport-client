import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/components/theme-provider";
import CategoryBar from "@/components/shared/CategoryBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seaport",
  description: "Welcome to Seaport - social blog app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <CategoryBar />
          <main>
            <section>{children}</section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
