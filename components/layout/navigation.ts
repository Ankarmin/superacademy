export type PublicNavigationLink = {
  label: string;
  href: `/${string}`;
};

export const publicNavigationLinks: ReadonlyArray<PublicNavigationLink> = [
  { label: "NOSOTROS", href: "/nosotros" },
  { label: "CICLOS", href: "/ciclos" },
  { label: "DOCENTES", href: "/docentes" },
  { label: "VIDEOTECA", href: "/videoteca" },
  { label: "RECURSOS", href: "/recursos" },
];
