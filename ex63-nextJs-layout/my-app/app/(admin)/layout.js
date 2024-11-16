import localFont from "next/font/local";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

//by doing (admin) : we have grouped all the routes inside this folder, without creating any route of name 'admin' ; thus we can layout all the grouped routes from the single layout.js

export const metadata = {
  title: "Admin : Facebook - connect with friends and the world around you",
  description: "adminPaage FACEBOOK",
};

export default function AdminLayout({ children }) {
    return (
       <>
       <span>Admin Navbar</span>
          {children} 
       </>
    );
  }