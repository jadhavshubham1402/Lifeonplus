"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { FooterLinkType } from "@/app/types/footerlinks";
import withBasePath from "@/utils/basePath";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath("/data/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black" id="first-section">
      {/* Main Footer Content */}
      <div className="container pt-60 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 - Logo + Description + Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <Image
                src={withBasePath("/images/logo/footerLogo.png")}
                alt="Logo"
                width={110}
                height={110}
                className="mb-2"
              />
            </div>

            <p className="text-white/90 text-[15px] md:text-base leading-relaxed max-w-md">
              Level up your skills, and get dream job with passion.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <Link
                href="https://www.instagram.com/lifeonplus.india/"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Icon icon="tabler:brand-instagram" className="text-2xl" />
              </Link>

              <Link
                href="https://www.facebook.com/lifeonplus.india/"
                target="_blank"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Icon icon="tabler:brand-facebook" className="text-2xl" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/lifeonplus/"
                target="_blank"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Icon icon="tabler:brand-linkedin" className="text-2xl" />
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=91%206580136083&text=Hi+Lifeonplus&app_absent=0"
                target="_blank"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Icon icon="tabler:brand-whatsapp" className="text-2xl" />
              </Link>

              <Link
                href="https://x.com/Lifeonplus"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Icon icon="tabler:brand-twitter-filled" className="text-2xl" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {footerlink.map((product, i) => (
                <div key={i}>
                  <p className="text-white text-lg font-semibold mb-5 tracking-wide">
                    {product.section}
                  </p>
                  <ul className="space-y-3">
                    {product.links.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          scroll={item.href !== "/"}
                          className="text-white/70 hover:text-white text-[14px] md:text-[15px] transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact + App Downloads */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-5">
                Get In Touch
              </h3>

              <div className="space-y-4 text-sm md:text-base">
                <p className="flex items-center gap-2 text-white/80">
                  <span className="font-medium text-white">Email:</span>
                  <a
                    href="mailto:info@lifeonplus.com"
                    className="hover:text-[#35A93E] transition-colors"
                  >
                    info@lifeonplus.com
                  </a>
                </p>

                <p className="flex items-center gap-3 text-white/80">
                  <span className="text-xl">🇮🇳</span>
                  <a
                    href="tel:+919986880000"
                    className="hover:text-[#35A93E] transition-colors"
                  >
                    +91 99868 80000
                  </a>
                </p>

                <p className="flex items-center gap-3 text-white/80">
                  <span className="text-xl">🇸🇬</span>
                  <a
                    href="tel:+6580136083"
                    className="hover:text-[#35A93E] transition-colors"
                  >
                    +65 8013 6083
                  </a>
                </p>
              </div>
            </div>

            {/* App Download */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                App Download
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://apps.apple.com/us/app/lifeonplus-digital-health-hub/id6739937070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={withBasePath("/images/appstore.png")}
                    alt="Download on App Store"
                    width={140}
                    height={48}
                    className="rounded-md ring-1 ring-white/30 hover:ring-white/50 transition-all"
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.paxykop.lifeonplus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={withBasePath("/images/playstore.png")}
                    alt="Get it on Google Play"
                    width={140}
                    height={48}
                    className="rounded-md ring-1 ring-white/30 hover:ring-white/50 transition-all"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Addresses */}
      <div className="container border-t border-white/10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Registered Office */}
          <div>
            <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-4">
              Registered Office
            </h3>
            <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
              # No.301, 3rd Floor, "MasterMind 1,
              <br />
              Royal Palms" Aarey Milk Colony,
              <br />
              Goregaon (East), Mumbai-400065
            </p>
            <div className="mt-4 space-y-1 text-xs md:text-sm">
              <p className="text-white/70">
                <strong className="text-white">GST:</strong> 27AAFCL7111F1ZQ
              </p>
              <p className="text-white/70">
                <strong className="text-white">CIN :</strong>{" "}
                U79110MH2024PTC418580
              </p>
            </div>
          </div>

          {/* Chennai Office */}
          <div>
            <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-4">
              Branch Office
            </h3>
            <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
              No. 15, Devraja Mudali Street,
              <br />
              1st Floor, Park Town,
              <br />
              Chennai - 600 003
            </p>
          </div>

          {/* Bangalore Office */}
          <div>
            <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-4">
              Branch Office
            </h3>
            <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
              WeWork Cinnabar Hills,
              <br />
              Embassy Golf Links Business Park,
              <br />
              SY# 13/2, Location no 8,
              <br />
              Challaghatta,
              <br />
              Bangalore - 560047
            </p>
          </div>

          {/* Technical Partner */}
          <div>
            <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-4">
              In Collaboration with Technical Partner
            </h3>
            <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
              Paxykop Technologies Pte Ltd
              <br />
              L-39, MBFC,
              <br />
              10 Marina Blvd,
              <br />
              Singapore - 018983
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
