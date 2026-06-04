import { socialLinkPresentation } from "@/lib/social-presentation";
import { socialLinks } from "@/lib/site";

export default function SocialWidget() {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-l-xl rounded-r-none border border-r-0 border-[#8debf7]/90 bg-white/72 p-3 shadow-[0_18px_44px_rgba(15,23,42,0.14),0_0_0_1px_rgba(255,255,255,0.42)_inset,0_0_0_1px_rgba(1,184,219,0.22),0_0_26px_rgba(1,184,219,0.18)] backdrop-blur-xl transition-colors dark:border-cyan-200/18 dark:bg-slate-950/28 dark:shadow-[0_18px_44px_rgba(0,0,0,0.34),0_0_0_1px_rgba(127,246,241,0.08)_inset,0_0_24px_rgba(1,184,219,0.18)] lg:flex xl:gap-4 xl:p-4">
      {socialLinks.map((socialLink) => {
        const presentation = socialLinkPresentation[socialLink.key];
        const Icon = presentation.icon;

        return (
          <a
            key={socialLink.key}
            href={socialLink.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${socialLink.label} de SuperAcademy`}
            title={socialLink.label}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${presentation.color} text-white shadow-xl transition-transform hover:scale-110 hover:rotate-3 xl:h-11 xl:w-11`}
          >
            <Icon className="h-5 w-5" />
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          </a>
        );
      })}
    </div>
  );
}
