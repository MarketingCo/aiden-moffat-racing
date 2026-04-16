import Navbar from '@/components/Navbar';
import LiveTicker from '@/components/LiveTicker';
import Hero from '@/components/Hero';
import StatsDashboard from '@/components/StatsDashboard';
import ChampionshipHUD from '@/components/ChampionshipHUD';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import TechSpecs from '@/components/TechSpecs';
import TrackInsight from '@/components/TrackInsight';
import Calendar from '@/components/Calendar';
import Gallery from '@/components/Gallery';
import SocialFeed from '@/components/SocialFeed';
import Services from '@/components/Services';
import Newsletter from '@/components/Newsletter';
import PressCenter from '@/components/PressCenter';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white pt-8">
      <Navbar />
      <LiveTicker />
      <Hero />
      <StatsDashboard />
      <ChampionshipHUD />
      <About />
      <Timeline />
      <TechSpecs />
      <TrackInsight />
      <Calendar />
      <Gallery />
      <SocialFeed />
      <Services />
      <Newsletter />
      <PressCenter />
      <Sponsors />
      <Footer />
    </main>
  );
}
