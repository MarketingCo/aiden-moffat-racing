import Navbar from '@/components/Navbar';
import LiveTicker from '@/components/LiveTicker';
import Hero from '@/components/Hero';
import StatsDashboard from '@/components/StatsDashboard';
import BTCCStandings from '@/components/BTCCStandings';
import Vision from '@/components/Vision';
import ChampionshipHUD from '@/components/ChampionshipHUD';
import TelemetryChart from '@/components/TelemetryChart';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Archive from '@/components/Archive';
import TechnicalHotspots from '@/components/TechnicalHotspots';
import TechSpecs from '@/components/TechSpecs';
import TrackMap from '@/components/TrackMap';
import TrackInsight from '@/components/TrackInsight';
import Calendar from '@/components/Calendar';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
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
      <BTCCStandings />
      <Vision />
      <ChampionshipHUD />
      <TelemetryChart />
      <About />
      <Timeline />
      <Archive />
      <TechnicalHotspots />
      <TechSpecs />
      <TrackMap />
      <TrackInsight />
      <Calendar />
      <Gallery />
      <News />
      <SocialFeed />
      <Services />
      <Newsletter />
      <PressCenter />
      <Sponsors />
      <Footer />
    </main>
  );
}
