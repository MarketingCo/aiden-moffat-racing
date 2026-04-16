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
import TyreStrategy from '@/components/TyreStrategy';
import SetupSheet from '@/components/SetupSheet';
import TrackMap from '@/components/TrackMap';
import TourMap from '@/components/TourMap';
import TrackInsight from '@/components/TrackInsight';
import Calendar from '@/components/Calendar';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import AutographCanvas from '@/components/AutographCanvas';
import SocialFeed from '@/components/SocialFeed';
import Services from '@/components/Services';
import Newsletter from '@/components/Newsletter';
import PressCenter from '@/components/PressCenter';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import AudioAmbience from '@/components/AudioAmbience';

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
      <TyreStrategy />
      <SetupSheet />
      <TrackMap />
      <TourMap />
      <TrackInsight />
      <Calendar />
      <Gallery />
      <News />
      <AutographCanvas />
      <SocialFeed />
      <Services />
      <Newsletter />
      <PressCenter />
      <Sponsors />
      <Footer />
      <AudioAmbience />
    </main>
  );
}
