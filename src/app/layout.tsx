import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import FirstVisitModal from "./components/FirstVisitModal";
const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${font.className}`}>
                <style>{`:root{--banner-url: url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/banner/background1.png'); --newsletter-url: url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/newsletter/hands.svg');}`}</style>
                <Aoscompo>
                    <Header />
                    {children}
                    <Footer />
                </Aoscompo>
                <FirstVisitModal />   {/* ← Added */}
                <ScrollToTop />
            </body>
        </html>
    );
}
