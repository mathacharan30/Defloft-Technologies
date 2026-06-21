import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ParticleBackground from "@/src/components/ParticleBackground";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      <ParticleBackground />
      <Header />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
