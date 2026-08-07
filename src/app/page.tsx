import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Exclusive from "@/components/Exclusive";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#2C2627] font-sans antialiased">
      
      <AnnouncementBar />

      <Navbar />

      <Hero />

      <Categories />

      <BestSellers />

      <About />

      <Exclusive />

      <Testimonials />

    </main>
  );
}