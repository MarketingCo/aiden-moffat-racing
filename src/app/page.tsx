import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Calendar from '@/components/Calendar';
import Gallery from '@/components/Gallery';
import SocialFeed from '@/components/SocialFeed';
import Services from '@/components/Services';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Calendar />
      <Gallery />
      <SocialFeed />
      <Services />
      <Sponsors />
      <Footer />
    </main>
  );
}
