
import EmailSignUp from "./components/EmailSignUp";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import HeroBlocks from "./components/HeroBlocks";
import Listings from "./components/Listings";
import Listings2 from "./components/Listings2";
import TopNav from "./components/TopNav";



export default function Home() {
  return (
    <>
    <TopNav/>
    {/* Hero Blocks */}
        <HeroBlocks/>

    {/* Features */}
        <Features/>

    {/* Listings */}

        <Listings/>

    {/* Listings no 2 */}

        <Listings2/>

    {/* Email sing up  */}

        <EmailSignUp/>

        {/* Features */}

        <Features2/>
    
       

    </>
  );
}
