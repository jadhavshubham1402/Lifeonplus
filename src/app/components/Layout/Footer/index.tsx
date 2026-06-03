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
    <div className="bg-primary" id="first-section">
      <div className="container pt-60 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 xl:gap-8">
          <div className="col-span-4 flex flex-col gap-5">
            <div>
              <Image
                src={withBasePath("/images/logo/logo.svg")}
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-white text-lg font-medium leading-7">
              {" "}
              Level up your skills, and get dream <br /> job with passion.{" "}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/lifeonplus.india/"
                scroll={false}
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-instagram"
                  className="text-2xl inline-block"
                />
              </Link>
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/lifeonplus.india/"
                target="_blank"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon icon="tabler:brand-facebook" className="text-2xl" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/lifeonplus/"
                target="_blank"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon icon="tabler:brand-linkedin" className="text-2xl" />
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://api.whatsapp.com/send/?phone=91%206580136083&text=Hi+Lifeonplus&app_absent=0"
                target="_blank"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon icon="tabler:brand-whatsapp" className="text-2xl" />
              </Link>
              <Link
                href="https://x.com/Lifeonplus"
                scroll={false}
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-twitter-filled"
                  className="text-2xl inline-block"
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}
          <div className="col-span-4">
            <div className="flex gap-20">
              {footerlink.map((product, i) => (
                <div key={i} className="group relative col-span-2">
                  <p className="text-white text-xl font-semibold mb-9">
                    {product.section}
                  </p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className="mb-3">
                        <Link
                          href={item.href}
                          scroll={item.href !== "/"}
                          className="text-white/60 hover:text-white text-sm font-normal mb-6"
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
          {/* CLOUMN-4 */}

          <div className="col-span-4">
            {/* Get In Touch */}
            <h3 className="text-white text-xl font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4 mb-8">
              <p className="text-white flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a
                  href="mailto:info@lifeonplus.com"
                  className="hover:text-[#35A93E]"
                >
                  info@lifeonplus.com
                </a>
              </p>

              <p className="text-white flex items-center gap-3">
                <span className="text-2xl">🇮🇳</span>
                <a href="tel:+919986880000" className="hover:text-[#35A93E]">
                  +91 99868 80000
                </a>
              </p>

              <p className="text-white flex items-center gap-3">
                <span className="text-2xl">🇸🇬</span>
                <a href="tel:+6580136083" className="hover:text-[#35A93E]">
                  +65 8013 6083
                </a>
              </p>
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
              App Download
            </h3>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="https://apps.apple.com/us/app/lifeonplus-digital-health-hub/id6739937070"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={withBasePath("/images/appstore.png")}
                  alt="Download on App Store"
                  width={150}
                  height={50}
                  className="cursor-pointer hover:opacity-90 transition"
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
                  width={150}
                  height={50}
                  className="cursor-pointer hover:opacity-90 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Registered Office */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-4">
              Registered Office
            </h3>

            <p className="text-white text-base leading-10">
              # No.301, 3rd Floor, "MasterMind 1,
              <br />
              Royal Palms" Aarey Milk Colony,
              <br />
              Goregaon (East), Mumbai-400065
            </p>

            <p className="text-white text-lg mt-4">
              <strong>GST:</strong> 27AAFCL7111F1ZQ
            </p>

            <p className="text-white text-lg mt-2">
              <strong>CIN :</strong> U79110MH2024PTC418580
            </p>
          </div>

          {/* Chennai Office */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-4">
              Branch Office
            </h3>

            <p className="text-white text-base leading-10">
              No. 15, Devraja Mudali Street,
              <br />
              1st Floor, Park Town,
              <br />
              Chennai - 600 003
            </p>
          </div>

          {/* Bangalore Office */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-4">
              Branch Office
            </h3>

            <p className="text-white text-base leading-10">
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
            <h3 className="text-yellow-400 font-bold text-xl mb-4">
              In Collaboration with Technical Partner
            </h3>

            <p className="text-white text-base leading-10">
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
      <div className="py-3">
        <h3 className="text-center text-white/60">
          @2025 - All Rights Reserved by{" "}
          <Link
            href="https://adminmart.com/"
            target="_blank"
            className="hover:text-white"
          >
            {" "}
            GetNextJs Templates.com{" "}
          </Link>
          • Distributed by{" "}
          <Link
            href="https://themewagon.com/"
            target="_blank"
            className="hover:text-white"
          >
            {" "}
            ThemeWagon
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
