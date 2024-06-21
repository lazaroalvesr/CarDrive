import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/register";
import { FontRaleway, FontRalewayBold, FontRalewayMedium, FontRoboto, FontRobotoBold, FontRobotoMedium } from "@/lib/font";


export const metadata: Metadata = {
  title: "CarDrive",
  description: "CarDrive seu melhor amigo na hora de vender e comprar seu automóvel.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/img/icons/icone.png" type="image/png" />
      </head>
      <body className={`
        ${FontRaleway.variable}
         ${FontRalewayBold.variable}
          ${FontRalewayMedium.variable}
           ${FontRoboto.variable}
           ${FontRobotoMedium.variable}
           ${FontRobotoBold.variable}
           `}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
