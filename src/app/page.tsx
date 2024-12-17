
import HeroBlock from "./components/HeroBlock";
import Features from "@/app/components/Features";
import NewCeramics from "./components/NewCeramics";
import PopularProducts from "./components/PopulerProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsletterSignup from "./components/NewsletterSignup";
import BrandStory from "@/app/components/Brandstory";


export default function Home() {
  return (
    <>
       <Header/>
       <HeroBlock/>
       <Features/>
       <NewCeramics/>
       <PopularProducts/>
       <NewsletterSignup/>
       <BrandStory/>
       <Footer/>
    </>
  );
}
