import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#2C2627] font-sans antialiased">
      
      <AnnouncementBar />

      <Navbar />

      <Hero />

      <Categories />

    </main>
  );
}