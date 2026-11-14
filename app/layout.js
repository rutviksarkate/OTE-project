import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/ui/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { company } from "@/lib/site";
import "./globals.css";

const sans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source-serif" });

export const metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Engineering and Project Execution | OTE Projects",
    template: "%s | OTE Projects",
  },
  description: company.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-mist font-sans text-ink antialiased">
        <JsonLd data={organizationSchema()} />
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <div id="content" className="pt-header">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
