import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Providers from "../components/privy-provider";
import { ThemeProvider } from "../components/theme-provider";

// Use Source Code Pro for monospace elements
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boon",
  description: "One prompt. Watch it go live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
