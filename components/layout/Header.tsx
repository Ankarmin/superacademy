"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { publicNavigationLinks } from "./navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
    const mensaje =
      "Hola, estoy interesado/a en matricularme. Podria proporcionarme mas informacion por favor.";
    window.open(
      buildWhatsAppUrl(mensaje),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/85 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <nav className="container mx-auto grid h-[84px] grid-cols-[1fr_auto] items-center px-6 md:grid-cols-[1fr_auto_1fr] lg:h-[88px] lg:px-8">
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
            className="object-contain transition duration-500 group-hover:rotate-12 group-hover:scale-110"
          />
        </Link>

        <ul className="hidden items-center justify-center gap-5 md:flex lg:gap-9 xl:gap-10">
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
          className="group relative hidden cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-[#028aa7] bg-gradient-to-r from-[#01b8db] via-[#59e7ff] to-[#01b8db] px-5 py-3 text-sm font-extrabold tracking-[0.12em] text-slate-950 shadow-[0_18px_40px_rgba(1,184,219,0.38)] ring-4 ring-[#01b8db]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(1,184,219,0.48)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#01b8db]/30 md:inline-flex md:justify-self-end lg:px-7 lg:py-3.5 lg:text-base lg:tracking-[0.14em]"
        >
          <span className="absolute inset-[3px] rounded-[14px] border border-white/75" />
          <span className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.5)_45%,transparent_70%)] -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative z-10">MATRICULATE AHORA</span>
        </button>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="justify-self-end text-2xl text-gray-700 transition hover:text-primary md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-white/95 backdrop-blur-xl border-t border-gray-200 px-6 py-6 flex flex-col gap-5">
          {publicNavigationLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-medium transition ${
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
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                handleSendMessage();
              }}
              className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-[#028aa7] bg-gradient-to-r from-[#01b8db] via-[#59e7ff] to-[#01b8db] px-5 py-3 font-extrabold tracking-[0.12em] text-slate-950 shadow-[0_18px_36px_rgba(1,184,219,0.32)] ring-4 ring-[#01b8db]/15 transition-all duration-300 hover:-translate-y-0.5"
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
