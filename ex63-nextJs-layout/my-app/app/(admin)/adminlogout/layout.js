import localFont from "next/font/local";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


export const metadata = {
  title: "Admin Logut : Facebook - connect with friends and the world around you",
  description: "adminPaage FACEBOOK",
};

export default function AdminLayout({ children }) {
    return (
       <>
       <div>AdminLogout Navbar</div>
          {children} 
       </>
    );
  }