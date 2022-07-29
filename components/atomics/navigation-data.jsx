import { HomeIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/outline"
// import Akun from "../../../public/StickNav/akun.png";
import Home from "../../public/StickNav/home.png";
import Kalender from "../../public/StickNav/kalender.png";
import Kampus from "../../public/StickNav/kampus.png";
import Santri from "../../public/StickNav/santri.png";
import Akun from "../../public/StickNav/akun.png";

export const bottomNavigation = [
  {
    name: "Info Kampus",
    icon: Kampus,
    href: "/",
    exact: true
  },
  {
    name: "Info Santri",
    icon: Santri,
    href: "/"
  },
  {
    name: "Home",
    icon: Home,
    href: "/"
  },
  {
    name: "Kalender",
    icon: Kalender,
    href: "/"
  },
  {
    name: "Akun",
    icon: Akun,
    href: "/"
  }
]

export const navMenu = [
  {
    name: "Beranda",
    href: "/",
    exact: true
  },
  {
    name: "Daftar Kontak Faskes per Provinsi",
    href: "/provinces",
    exact: true
  },
  {
    name: "Situs/Kontak Penting Terkait Covid-19",
    href: "/kontak-darurat"
  },
  {
    name: "Rumah Sakit",
    href: "/provinces?kebutuhan=Rumah%20sakit",
    exact: true
  },
  {
    name: "Ambulans",
    href: "/provinces?kebutuhan=Ambulans",
    exact: true
  },
  {
    name: "Info Oksigen",
    href: "/provinces?kebutuhan=Oksigen",
    exact: true
  },
  {
    name: "Donor Plasma",
    href: "/provinces?kebutuhan=Donor%20plasma",
    exact: true
  },
  {
    name: "Isolasi Mandiri",
    href: "/isolasi-mandiri"
  },
  {
    name: "Edukasi",
    href: "/edukasi"
  },
  {
    name: "Donasi",
    href: "/donasi",
    exact: true
  },
  {
    name: "Tentang Kami",
    href: "/tentang-kami",
    exact: true
  }
]
