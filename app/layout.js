import { Manrope, Space_Grotesk } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/ui/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { company } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Offshore Engineering and Project Management | OTE Projects",
    template: "%s | OTE Projects",
  },
  description: company.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${grotesk.variable}`}>
      <body className="bg-mist font-sans text-ink antialiased">
        <JsonLd data={organizationSchema()} />
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <div id="content" className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
