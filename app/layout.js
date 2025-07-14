import { Poppins, Manrope, ABeeZee, Open_Sans  } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"], 
  weight: ["400", "500", "600", "700"],
});

const abeezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin", "latin-ext"], 
  weight: ["400"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic"], 
  weight: ["400", "500", "600", "700"],
});

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["cyrillic"],
  weight: ["400", "800"],
});


export const metadata = {
  title: "Podcast студія Reels Studio| Зйомки під ключ | Інтерв’ю, подкасти, Reels | Reels Studio",
  description: "Reels Studio — сучасна студія відеопродукції у Києві.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={` ${poppins.variable} ${manrope.variable} ${abeezee.variable} ${opensans.variable} antialiased`}
      >
        <Header/>
        <main className="bg-white">
        {children}
        </main>
        <Footer/>
     <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="244, 120, 32"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
      />
      </body>
    </html>
  );
}
