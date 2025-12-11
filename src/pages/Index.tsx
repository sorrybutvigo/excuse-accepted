import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExcuseGenerator from "@/components/ExcuseGenerator";
import MenuPreview from "@/components/MenuPreview";
import ShopPreview from "@/components/ShopPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ExcuseGenerator />
        <MenuPreview />
        <ShopPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
