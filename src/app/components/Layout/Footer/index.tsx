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
                src={withBasePath("/images/logo/logo2.svg")}
                alt="Logo"
                width={48}
                height={64}
              />
            </div>
            <p className="text-white text-lg font-medium leading-7">
              {" "}
              Level up your skills, and get dream <br /> job with passion.{" "}
            </p>
            <div className="flex gap-4">
              <Link
                href="#!"
                scroll={false}
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-instagram"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                scroll={false}
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-dribbble"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                scroll={false}
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-twitter-filled"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                scroll={false}
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-youtube-filled"
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
            <h3 className="text-white text-xl font-semibold mb-6">
              Stay up to date
            </h3>
            <div className="relative text-white focus-within:text-white flex flex-row-reverse w-[50%] lg:w-full">
              <input
                type="Email address"
                name="q"
                className="py-4 text-sm w-full text-white bg-white/15 rounded-md pl-4 focus:outline-hidden bg-emailbg focus:text-white"
                placeholder="Your email address"
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-hidden focus:shadow-outline"
                >
                  <Icon
                    icon="tabler:send"
                    className="text-white text-2xl inline-block me-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <h2 className="text-center text-white text-4xl font-bold mb-12">
          LifeOnPlus Technologies India Private Limited
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Registered Office */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-4">
              Registered Office
            </h3>

            <p className="text-white text-lg leading-10">
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

            <p className="text-white text-lg leading-10">
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

            <p className="text-white text-lg leading-10">
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

            <p className="text-white text-lg leading-10">
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
