import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueRoute Dispatch LLC | Dedicated Truck Dispatch",
  description: "Carrier dispatch and back-office support for owner-operators."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
