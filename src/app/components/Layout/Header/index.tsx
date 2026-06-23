"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/app/components/Auth/SignIn";
import SignUp from "@/app/components/Auth/SignUp";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath("/data/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setHeaderData(data.HeaderData);
      } catch (error) {
        console.error("Error fetching services:", error);
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
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky ? " shadow-lg bg-white py-4" : "shadow-none py-4"
      }`}
    >
      <div>
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex grow items-center gap-8 justify-start ml-14">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div>
            <button
              className="hidden lg:block bg-[#02BE0F] text-white text-base font-medium hover:bg-transparent duration-300 hover:text-[#02BE0F] border border-[#02BE0F] px-6 py-2 rounded-lg hover:cursor-pointer"
              onClick={() => setShowAccountModal(true)}
            >
              Account
            </button>
            {showAccountModal && (
              <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4">
                <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-3 border-b">
                    <h2 className="text-xl font-semibold">
                      Choose Your Account Type
                    </h2>

                    <button
                      onClick={() => setShowAccountModal(false)}
                      className="text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>

                  <div className="p-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4">
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
                              e.currentTarget.style.transform =
                                "translateY(-6px)";
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
                                onClick={() =>
                                  handleTypeClick(item.type, "register")
                                }
                              >
                                Register
                              </button>
                              <button
                                className="flex justify-center items-center w-[100px] h-[35px] border border-[#02BE0F] text-[#02BE0F] bg-white rounded"
                                onClick={() =>
                                  handleTypeClick(item?.type, "login")
                                }
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
                              <span style={{ fontSize: "24px" }}>
                                {item.icon}
                              </span>
                              {item.label}
                              <span className="ml-auto flex items-center rounded-full bg-yellow-400 px-2 py-1 text-xs font-medium text-black">
                                {" "}
                                <FaClock className="mr-1" size={12} />
                                Coming Soon
                              </span>
                            </h5>
                            <p className="text-gray-500 text-sm flex-grow mb-4">
                              {" "}
                              This account type will be available soon. Stay
                              tuned!
                            </p>
                          </div>
                        </div>
                      ))}{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <div className='flex items-center gap-4'>
                        <button
                            className='hidden lg:block bg-transparent text-[#02BE0F] border hover:bg-[#02BE0F] border-[#02BE0F] hover:text-white duration-300 px-6 py-2 rounded-lg hover:cursor-pointer'
                            onClick={() => {
                                setIsSignInOpen(true)
                            }}>
                            Sign In
                        </button>
                        {isSignInOpen && (
                            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                                <div
                                    ref={signInRef}
                                    className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey/90 backdrop-blur-md bg-white'>
                                    <button
                                        onClick={() => setIsSignInOpen(false)}
                                        className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
                                        aria-label='Close Sign In Modal'>
                                        <Icon
                                            icon='material-symbols:close-rounded'
                                            width={24}
                                            height={24}
                                            className='text-black hover:text-[#02BE0F] inline-block hover:cursor-pointer'
                                        />
                                    </button>
                                    <Signin />
                                </div>
                            </div>
                        )}
                        <button
                            className='hidden lg:block bg-[#02BE0F] text-white text-base font-medium hover:bg-transparent duration-300 hover:text-[#02BE0F] border border-[#02BE0F] px-6 py-2 rounded-lg hover:cursor-pointer'
                            onClick={() => {
                                setIsSignUpOpen(true)
                            }}>
                            Sign Up
                        </button>
                        {isSignUpOpen && (
                            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                                <div
                                    ref={signUpRef}
                                    className='relative mx-auto bg-white w-full max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-8 pt-14 pb-8 text-center'>
                                    <button
                                        onClick={() => setIsSignUpOpen(false)}
                                        className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
                                        aria-label='Close Sign Up Modal'>
                                        <Icon
                                            icon='material-symbols:close-rounded'
                                            width={24}
                                            height={24}
                                            className='text-black hover:text-[#02BE0F] inline-block hover:cursor-pointer'
                                        />
                                    </button>
                                    <SignUp />
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className='block lg:hidden p-2 rounded-lg'
                            aria-label='Toggle mobile menu'>
                            <span className='block w-6 h-0.5 bg-black'></span>
                            <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
                            <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
                        </button>
                    </div> */}
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text">
              <Logo />
            </h2>
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-black/30 rounded-full p-1 text-white"
              aria-label="Close menu Modal"
            >
              <Icon
                icon={"material-symbols:close-rounded"}
                width={24}
                height={24}
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-4 flex flex-col gap-4 w-full">
              <button
                className="hidden lg:block bg-[#02BE0F] text-white text-base font-medium hover:bg-transparent duration-300 hover:text-[#02BE0F] border border-[#02BE0F] px-6 py-2 rounded-lg hover:cursor-pointer"
                onClick={() => setShowAccountModal(true)}
              >
                Account
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
