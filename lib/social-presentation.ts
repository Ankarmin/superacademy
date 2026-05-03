import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import type { SocialLink } from "@/lib/site";

type SocialLinkPresentation = {
  icon: IconType;
  color: string;
};

export const socialLinkPresentation: Record<SocialLink["key"], SocialLinkPresentation> = {
  facebook: {
    icon: FaFacebook,
    color: "from-blue-400 to-blue-600",
  },
  instagram: {
    icon: FaInstagram,
    color: "from-pink-400 to-purple-500",
  },
  youtube: {
    icon: FaYoutube,
    color: "from-red-400 to-red-600",
  },
  tiktok: {
    icon: FaTiktok,
    color: "from-black to-black",
  },
};
