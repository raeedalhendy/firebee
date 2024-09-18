import AboutFirebee from "../../components/About Firebee/AboutFirebee";
import BlackFridayNav from "../../components/BlackFridayNav/BlackFridayNav";
import Nav from "../../components/BlackFridayNav/Nav/Nav";
import Firebee from "../../components/Firebee/Firebee";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Hero2 from "../../components/Hero2/Hero2";
import Questions from "../../components/Questions/Questions";
import WhatsInTheBox from "../../components/What’s in the box/WhatsInTheBox";

export default function Home() {
  return (
    <div>
      <BlackFridayNav/>
      <Nav/>
      <Hero/>
      <Hero2/>
      <Firebee/>
      <AboutFirebee/>
      <WhatsInTheBox/>
      <Questions/>
      <Footer/>
    </div>
  )
}
