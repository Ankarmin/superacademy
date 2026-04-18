export type PublicNavigationLink = {
  label: string;
  href: `/${string}`;
};

export const publicNavigationLinks: ReadonlyArray<PublicNavigationLink> = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Ciclos", href: "/ciclos" },
  { label: "Docentes", href: "/docentes" },
  { label: "Videoteca", href: "/videoteca" },
  { label: "Recursos", href: "/recursos" },
];
