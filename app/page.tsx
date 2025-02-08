import dynamic from 'next/dynamic';
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";

// Import FloatingNav with no SSR
const FloatingNav = dynamic(
  () => import('@/components/ui/FloatingNav').then(mod => mod.FloatingNav),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}