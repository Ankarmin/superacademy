"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { publicNavigationLinks } from "./navigation";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SuperAcademyPro",
    icon: <FaFacebook className="h-5 w-5" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/superacademypro/",
    icon: <FaInstagram className="h-5 w-5" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SuperAcademyOficial",
    icon: <FaYoutube className="h-5 w-5" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@superacademy_oficial?_r=1&_t=ZS-93WPwdbxtNE",
    icon: <FaTiktok className="h-5 w-5" />,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const whatsappUrl = useMemo(
    () =>
      buildWhatsAppUrl(
        "Hola, estoy interesado/a en matricularme. Podria proporcionarme mas informacion por favor.",
      ),
    [],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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

  const handleSendMessage = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/85 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <nav
        aria-label="Principal"
        className="container mx-auto grid h-[80px] grid-cols-[1fr_auto] items-center px-4 sm:px-6 md:grid-cols-[auto_1fr_auto] md:gap-6 md:px-6 lg:h-[88px] lg:px-8"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Ir al inicio"
          className="group flex items-center gap-3 justify-self-start"
        >
          <Image
            src="/logo.png"
            alt="SuperAcademy"
            width={62}
            height={60}
            className="h-12 w-auto object-contain transition duration-500 group-hover:rotate-12 group-hover:scale-110 md:h-14"
          />
        </Link>

        <ul className="hidden items-center justify-center gap-5 text-sm md:flex lg:mx-auto lg:gap-7 lg:text-[0.95rem] xl:gap-9">
          {publicNavigationLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative font-bold"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active
                        ? "text-primary"
                        : "text-gray-700 group-hover:text-transparent"
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

                  <span className="absolute inset-x-0 -bottom-3 h-6 rounded-full bg-[#01b8db]/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={handleSendMessage}
          aria-label="Abrir WhatsApp para matricularme"
          className="group relative hidden cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-[#028aa7] bg-gradient-to-r from-[#01b8db] via-[#59e7ff] to-[#01b8db] px-4 py-3 text-center text-xs font-extrabold tracking-[0.1em] text-slate-950 shadow-[0_18px_40px_rgba(1,184,219,0.38)] ring-4 ring-[#01b8db]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(1,184,219,0.48)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#01b8db]/30 md:inline-flex md:justify-self-end md:self-center lg:px-6 lg:py-3 lg:text-sm lg:tracking-[0.14em] xl:px-7 xl:text-base"
        >
          <span className="absolute inset-[3px] rounded-[14px] border border-white/75" />
          <span className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.5)_45%,transparent_70%)] -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative z-10">MATRICULATE AHORA</span>
        </button>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="min-h-11 min-w-11 justify-self-end rounded-xl text-2xl text-gray-700 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 border-t border-gray-200 bg-white/95 px-5 py-5 text-center backdrop-blur-xl sm:px-6 sm:py-6">
          {publicNavigationLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block break-words text-base font-medium transition sm:text-lg ${
                    active
                      ? "text-primary drop-shadow-[0_0_6px_rgba(1,184,219,.4)]"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li>
            <div className="flex items-center justify-center gap-4 pt-1">
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${socialLink.label} de SuperAcademy`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8eef3] bg-[#f4fdff] text-slate-700 transition hover:border-primary hover:text-primary"
                >
                  {socialLink.icon}
                </a>
              ))}
            </div>
          </li>

          <li>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                handleSendMessage();
              }}
              className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-[#028aa7] bg-gradient-to-r from-[#01b8db] via-[#59e7ff] to-[#01b8db] px-5 py-3 text-center text-sm font-extrabold tracking-[0.12em] text-slate-950 shadow-[0_18px_36px_rgba(1,184,219,0.32)] ring-4 ring-[#01b8db]/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-[3px] rounded-[14px] border border-white/75" />
              <span className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.5)_45%,transparent_70%)] -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">MATRICULATE AHORA</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
