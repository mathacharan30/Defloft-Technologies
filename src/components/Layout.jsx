import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

function Layout() {
  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      <ParticleBackground />
      <Header />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
