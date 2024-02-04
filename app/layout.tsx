import { Metadata, ResolvingMetadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import Navigation from "./components/Navigation";
import clsx from "clsx";
import Footer from "./components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise",
    description:
      settings.data.meta_description || "Flowrise is the relaxing app for you.",
    openGraph: { images: [settings.data.og_image.url || ""] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunitoSans.variable)}>
        <Navigation />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50"></div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
