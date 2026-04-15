import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function SocialWidget() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center z-50 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
      {[
        {
          icon: <FaFacebook className="w-5 h-5" />,
          color: "from-blue-400 to-blue-600",
          href: "https://www.facebook.com/SuperAcademyPro",
        },
        {
          icon: <FaInstagram className="w-5 h-5" />,
          color: "from-pink-400 to-purple-500",
          href: "https://www.instagram.com/superacademypro/",
        },
        {
          icon: <FaYoutube className="w-5 h-5" />,
          color: "from-red-400 to-red-600",
          href: "https://www.youtube.com/@SuperAcademyOficial",
        },
        {
          icon: <FaTiktok className="w-5 h-5" />,
          color: "from-black to-black",
          href: "https://www.tiktok.com/@superacademy_oficial?_r=1&_t=ZS-93WPwdbxtNE",
        },
      ].map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-xl hover:scale-125 hover:rotate-6 transition-transform group`}
        >
          {s.icon}
          <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition" />
        </a>
      ))}
    </div>
  );
}
