"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { socialLinks } from "@/lib/site";
import { publicNavigationLinks } from "./navigation";

type ThemeMode = "light" | "dark";

function setDocumentTheme(theme: ThemeMode) {
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

const socialLinkPresentation = {
  facebook: {
    icon: <FaFacebook className="h-5 w-5 shrink-0" />,
    color: "from-blue-400 to-blue-600",
  },
  instagram: {
    icon: <FaInstagram className="h-5 w-5 shrink-0" />,
    color: "from-pink-400 to-purple-500",
  },
  youtube: {
    icon: <FaYoutube className="h-5 w-5 shrink-0" />,
    color: "from-red-400 to-red-600",
  },
  tiktok: {
    icon: <FaTiktok className="h-5 w-5 shrink-0" />,
    color: "from-black to-black",
  },
} as const;

const enrollmentWhatsappUrl = buildWhatsAppUrl(
  "Hola, estoy interesado/a en matricularme. Podria proporcionarme mas informacion por favor.",
);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousMobileNavState = document.body.dataset.mobileNavOpen;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.dataset.mobileNavOpen = "true";
    } else {
      delete document.body.dataset.mobileNavOpen;
    }

    return () => {
      document.body.style.overflow = previousOverflow;

      if (previousMobileNavState) {
        document.body.dataset.mobileNavOpen = previousMobileNavState;
      } else {
        delete document.body.dataset.mobileNavOpen;
      }
    };
  }, [open]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const syncDesktopViewport = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    syncDesktopViewport();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncDesktopViewport);

      return () => {
        mediaQuery.removeEventListener("change", syncDesktopViewport);
      };
    }

    mediaQuery.addListener(syncDesktopViewport);

    return () => {
      mediaQuery.removeListener(syncDesktopViewport);
    };
  }, []);

  const isLinkActive = (href: string) => {
    const normalizedPathname = pathname.replace(/\/$/, "") || "/";
    const normalizedHref = href.replace(/\/$/, "") || "/";

    if (normalizedHref === "/") {
      return normalizedPathname === "/";
    }

    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  };

  const handleToggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === "dark"
      ? "dark"
      : "light";
    const nextTheme: ThemeMode = currentTheme === "dark" ? "light" : "dark";

    setDocumentTheme(nextTheme);
  };

  const enrollmentButtonBaseClassName =
    "group relative cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-[#028aa7] bg-gradient-to-r from-[#01b8db] via-[#59e7ff] to-[#01b8db] text-center text-xs font-extrabold tracking-[0.1em] text-slate-950 shadow-[0_18px_40px_rgba(1,184,219,0.38)] ring-4 ring-[#01b8db]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(1,184,219,0.48)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#01b8db]/30";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#051321]/78 dark:shadow-[0_8px_36px_rgba(0,0,0,0.32)]">
        <nav
          aria-label="Principal"
          className="relative z-20 container mx-auto grid h-[80px] grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 md:px-6 lg:h-[88px] lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-8"
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Ir al inicio"
            className="group inline-flex items-center justify-self-start leading-none"
          >
            <Image
              src="/images/logo.webp"
              alt="SuperAcademy"
              width={62}
              height={60}
              className="h-12 w-auto object-contain transition duration-500 group-hover:rotate-12 group-hover:scale-110 md:h-14"
            />
          </Link>

          <ul className="hidden items-center justify-center gap-5 text-sm lg:flex lg:gap-7 lg:text-[0.95rem] 2xl:gap-9">
            {publicNavigationLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className="group relative font-bold uppercase tracking-[0.08em]"
                    >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        active
                          ? "text-primary"
                          : "text-gray-700 group-hover:text-transparent dark:text-slate-200"
                      }`}
                    >
                      {link.label}
                    </span>

                    {!active && (
                      <span className="absolute inset-0 w-0 overflow-hidden bg-gradient-to-r from-[#01b8db] to-[#01b8db] bg-clip-text text-transparent transition-all duration-500 ease-out group-hover:w-full">
                        {link.label}
                      </span>
                    )}

                    <span
                      className={`absolute left-1/2 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-[#01b8db] via-[#01b8db] to-[#01b8db] transition-all duration-500 ease-out ${
                        active
                          ? "w-full -translate-x-1/2"
                          : "w-0 -translate-x-1/2 group-hover:w-full"
                      }`}
                    />

                    <span className="absolute inset-x-0 -bottom-3 h-6 rounded-full bg-[#01b8db]/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-self-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleToggleTheme}
              aria-label="Cambiar entre modo claro y modo oscuro"
              className="btn-icon inline-flex items-center justify-center leading-none text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#051321]"
            >
              <FiMoon className="h-5 w-5 shrink-0 dark:hidden" />
              <FiSun className="hidden h-5 w-5 shrink-0 dark:block" />
            </button>

            <Link
              href={enrollmentWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp para matricularme"
              className={`${enrollmentButtonBaseClassName} hidden lg:inline-flex px-4 py-3 lg:px-6 lg:py-3 lg:text-sm lg:tracking-[0.14em] 2xl:px-7 2xl:text-base`}
            >
              <span className="absolute inset-[3px] rounded-[14px] border border-white/75" />
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.5)_45%,transparent_70%)] transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">MATRICULATE AHORA</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className={`btn-icon relative inline-flex h-12 w-12 items-center justify-center leading-none transition-[border-color,background-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#051321] lg:hidden ${
                open
                  ? "border-primary text-primary shadow-[0_14px_32px_rgba(1,184,219,0.18)] dark:border-cyan-300/40 dark:text-cyan-200"
                  : ""
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-out ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[7px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                  open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-out ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[7px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/34 backdrop-blur-[3px] transition-opacity duration-300 dark:bg-[#01060d]/62 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute inset-y-0 right-0 w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-[108%]"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-nav-surface flex h-full flex-col overflow-y-auto px-5 pb-8 pt-[96px] text-slate-950 shadow-[-22px_0_60px_rgba(3,20,39,0.16)] transition-colors dark:text-white dark:shadow-[-24px_0_70px_rgba(0,0,0,0.42)] sm:px-6">
            <div className="mx-auto flex h-full w-full max-w-[34rem] flex-col items-center justify-start">
              <ul className="mt-3 flex w-full flex-col border-y border-slate-200/90 dark:border-white/10">
                {publicNavigationLinks.map((link) => {
                  const active = isLinkActive(link.href);

                  return (
                    <li
                      key={link.href}
                      className="border-b border-slate-200/90 last:border-b-0 dark:border-white/10"
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`group flex min-h-[64px] items-center justify-center px-4 py-4 text-center text-sm font-bold uppercase tracking-[0.1em] transition sm:min-h-[72px] sm:text-[0.95rem] ${
                          active
                            ? "text-primary dark:text-cyan-200"
                            : "text-slate-900 hover:text-primary dark:text-white dark:hover:text-cyan-200"
                        }`}
                      >
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto flex w-full max-w-[20rem] flex-col items-center gap-4 pb-4 pt-8">
                <Link
                  href={enrollmentWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className={`${enrollmentButtonBaseClassName} inline-flex w-full px-6 py-3.5 text-sm tracking-[0.14em]`}
                >
                  <span className="absolute inset-[3px] rounded-[14px] border border-white/75" />
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.5)_45%,transparent_70%)] transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10">MATRICULATE AHORA</span>
                </Link>

                <div className="flex items-center justify-center gap-3 pt-2 text-[1.45rem]">
                  {socialLinks.map((socialLink) => {
                    const presentation = socialLinkPresentation[socialLink.key];

                    return (
                    <a
                      key={socialLink.label}
                      href={socialLink.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${socialLink.label} de SuperAcademy`}
                      className={`group relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${presentation.color} leading-none text-white shadow-xl transition-transform hover:scale-110 hover:rotate-3`}
                    >
                      {presentation.icon}
                      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition group-hover:opacity-100" />
                    </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
