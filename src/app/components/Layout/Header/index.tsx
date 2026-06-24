"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HeaderItem } from "@/app/types/menu";
import withBasePath from "@/utils/basePath";
import {
  FaUserTie,
  FaUsers,
  FaUser,
  FaLock,
  FaClock,
  FaHandshake,
  FaBuilding,
  FaBriefcase,
  FaStore,
  FaChartLine,
  FaCheckCircle,
  FaStoreAlt,
} from "react-icons/fa";

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Fetch Header Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath("/data/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setHeaderData(data.HeaderData);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (showAccountModal || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showAccountModal, navbarOpen]);

  const handleScroll = () => {
    setSticky(window.scrollY >= 10);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  const handleTypeClick = (type: any, action: any) => {
    if (action === "login") {
      if (type === "channelpartner") {
        window.open(
          "https://lifeonplus.in/dashboardPanel/partnerlogin",
          "_blank",
        );
      } else if (type === "channelpartnerplus") {
        window.open(
          "https://lifeonplus.in/dashboardPanel/partnerpluslogin",
          "_blank",
        );
      } else if (type === "corporate") {
        window.open(
          "https://lifeonplus.in/dashboardPanel/corporatelogin",
          "_blank",
        );
      } else if (type === "director") {
        window.open(
          "https://lifeonplus.in/dashboardPanel/directorlogin",
          "_blank",
        );
      } else if (type === "franchise") {
        window.open(
          "https://lifeonplus.in/dashboardPanel/franchiselogin",
          "_blank",
        );
      } else if (type === "vendor") {
        window.open(
          "https://lifeonplus.in/dashboardPanel/vendorlogin",
          "_blank",
        );
      } else if (type === "member") {
        window.open("https://lifeonplus.in/signin/member", "_blank");
      } else if (type === "endUser") {
        window.open("https://lifeonplus.in/signin/enduser", "_blank");
      }
    }

    if (action === "register") {
      if (type === "channelpartner") {
        window.open("https://lifeonplus.in/signup/channelpartner", "_blank");
      } else if (type === "channelpartnerplus") {
        window.open(
          "https://lifeonplus.in/signup/channelpartnerplus",
          "_blank",
        );
      } else if (type === "corporate") {
        window.open("https://lifeonplus.in/signup/corporate", "_blank");
      } else if (type === "director") {
        window.open("https://lifeonplus.in/signup/director", "_blank");
      } else if (type === "franchise") {
        window.open("https://lifeonplus.in/signup/franchise", "_blank");
      } else if (type === "vendor") {
        window.open("https://lifeonplus.in/signup/vendor", "_blank");
      } else if (type === "member") {
        window.open("https://lifeonplus.in/signup/member", "_blank");
      } else if (type === "endUser") {
        window.open("https://lifeonplus.in/signup/enduser", "_blank");
      }
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 bg-white shadow-sm ${
        sticky ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAccountModal(true)}
              className="hidden lg:block bg-[#02BE0F] text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-green-600 transition"
            >
              Account
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle Menu"
            >
              <Icon
                icon={navbarOpen ? "mdi:close" : "mdi:menu"}
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed top-[73px] left-0 w-full bg-white shadow-lg z-50 max-h-[calc(100vh-73px)] overflow-y-auto"
        >
          <div className="p-6">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}

            <div className="mt-8">
              <button
                onClick={() => setShowAccountModal(true)}
                className="w-full bg-[#02BE0F] text-white py-3.5 rounded-2xl font-medium"
              >
                Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Account Type Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">
                Choose Account Type
              </h2>
              <button
                onClick={() => setShowAccountModal(false)}
                className="text-3xl text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Member",
                    icon: <FaUsers />,
                    desc: "Shop products, track orders and enjoy member benefits.",
                    type: "member",
                    bg: "#e9f9ee",
                    color: "#02BE0F",
                    knowMore: true,
                  },
                  {
                    title: "Channel Partner",
                    icon: <FaHandshake />,
                    desc: "For distributors and sales partners to grow business with us.",
                    type: "channelpartner",
                    bg: "#e7f1ff",
                    color: "#0d6efd",
                    knowMore: true,
                  },
                  {
                    title: "Franchise",
                    icon: <FaStoreAlt />,
                    desc: "For distributors and sales partners to grow business with us.",
                    type: "franchise",
                    bg: "#e7f1ff",
                    color: "#0d6efd",
                    // knowMore: true,
                  },
                  {
                    title: "Channel Partner Plus",
                    icon: <FaUserTie />,
                    desc: "Premium partners with higher commission and priority support.",
                    type: "channelpartnerplus",
                    bg: "#fff4e5",
                    color: "#ff9800",
                  },
                  {
                    title: "Corporates & Industries & Professionals",
                    icon: <FaBuilding />,
                    desc: "For companies and professionals buying in bulk or services.",
                    type: "corporate",
                    bg: "#f3e8ff",
                    color: "#6f42c1",
                    knowMore: true,
                  },
                  {
                    title: "Director / Super Distributor",
                    icon: <FaBriefcase />,
                    desc: "Manage distribution network and oversee partner operations.",
                    type: "director",
                    bg: "#f1f3f5",
                    color: "#343a40",
                  },
                  {
                    title: "Vendor",
                    icon: <FaStore />,
                    desc: "Sell your products and manage inventory through our platform.",
                    type: "vendor",
                    bg: "#e6fffa",
                    color: "#20c997",
                    knowMore: true,
                  },
                  {
                    title: "End User",
                    icon: <FaUser />,
                    desc: "Purchase and use products/services directly from platform.",
                    type: "enduser",
                    bg: "#f8f9fa",
                    color: "#6c757d",
                    knowMore: true,
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div
                      className="border rounded-2xl p-4 h-full flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        transition: "0.3s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 20px rgba(0,0,0,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <h5 className="mb-2 flex items-center gap-2 text-base font-semibold">
                        {" "}
                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{
                            width: "30px",
                            height: "30px",
                            background: item.bg,
                            color: item.color,
                            fontSize: "15px",
                          }}
                        >
                          {item.icon}
                        </div>
                        {item.title}
                      </h5>

                      <p className="text-gray-500 text-xs flex-grow mb-3">
                        {" "}
                        {item.desc}
                      </p>

                      {/* {item.knowMore && (
                              <p
                                className="text-blue-600 text-sm underline mb-2 cursor-pointer"

                                // onClick={() => {
                                //   if (item.type === "channelpartner") {
                                //     setShowDetailsModal(true);
                                //   } else {
                                //     setShowModal(true);
                                //     setSelectedType(item.type);
                                //   }
                                // }}
                              >
                                Click here to know more
                              </p>
                            )} */}

                      <div className="flex gap-2 mt-auto">
                        {" "}
                        <button
                          className="flex justify-center items-center w-[100px] h-[35px]  bg-[#02BE0F] text-white rounded  hover:bg-[#029e0c] transition duration-200"
                          onClick={() => handleTypeClick(item.type, "register")}
                        >
                          Register
                        </button>
                        <button
                          className="flex justify-center items-center w-[100px] h-[35px] border border-[#02BE0F] text-[#02BE0F] bg-white rounded"
                          onClick={() => handleTypeClick(item?.type, "login")}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* COMING SOON */}
                {[
                  { label: "Affiliate", icon: <FaHandshake /> },
                  { label: "Investor", icon: <FaChartLine /> },
                  // { label: "Franchise", icon: <FaStoreAlt /> },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="border rounded-2xl p-4 h-full flex flex-col shadow-sm opacity-75">
                      {" "}
                      <h5 className="mb-2 flex items-center gap-2 text-lg font-semibold">
                        {" "}
                        <FaLock className="text-secondary" size={18} />
                        <span style={{ fontSize: "24px" }}>{item.icon}</span>
                        {item.label}
                        <span className="ml-auto flex items-center rounded-full bg-yellow-400 px-2 py-1 text-xs font-medium text-black">
                          {" "}
                          <FaClock className="mr-1" size={12} />
                          Coming Soon
                        </span>
                      </h5>
                      <p className="text-gray-500 text-sm flex-grow mb-4">
                        {" "}
                        This account type will be available soon. Stay tuned!
                      </p>
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
