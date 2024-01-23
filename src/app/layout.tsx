import Link from "next/link";
import Image from "next/image";
import { inter } from "./ui/fonts";
import "./globals.css";
import styles from "./styles.module.css";
import Navigation from "./ui/navigation/page";

export const metadata = {
  title: "BEYOND REALMS 29 - VR ARENA",
  description: "Welcome to the Beyond Realms 29!",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={styles.main}>
     <body className={inter.className}>
        <Navigation />
        <header
          style={{
            backgroundImage: "url('/bg-header.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            width: "inherit",
            height: "64.313rem",
          }}
        >
          <div>
            <div className="absolute inset-40">
              <Image src="/logo-2.png" alt="Logo-2" width={1000} height={60} />
            </div>
            <div className={styles.new_main}>
              <span className="text-secondary">PARK </span>
              <span className="text-primary">
                VIRTUAL REALITY
                <br />
                FRANKFURT AM MAIN
              </span>
              <br />
              <span className="text-secondary">WITH FREE MOVEMENT</span>
              <div>

              </div>
              <div>
              <button className="btn bg-primary text-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
                BOOK YOUR EXPERIENCE
                </button>
              </div>
            </div>
            <div className="absolute top-52 right-0">
              <Image src="/people.png" alt="People" width={670} height={600} />
            </div>
          </div>
        </header>
        {children}
        <footer className="footer footer-center p-2 bg-black">
          <div>
            <Image src="/logo29.png" alt="BR29 Logo" width={100} height={100} />
          </div>
          <div className=" max-w-none text-white">
            <hr className="w-20 h-1" />
            <br />
            &#34;BEYOND REALMS 29 Ltd.&#34; +49 69 12345678 beyondrealms@gmail.com
            <br />
            The Matrix Building, unit 7, Musterstrasse 777, Frankfurt am Main,
            Germany
            <br />
            Company Info | Legal Notice | Privacy Policy
            <br />
            2024 ALL RIGHTS RESERVED ©
          </div>
        </footer>
      </body>
    </html>
  );
}

