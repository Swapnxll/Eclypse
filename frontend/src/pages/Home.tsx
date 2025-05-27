import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import video1 from '../assets/4937474-uhd_4096_2160_25fps.mp4'
import Section from '../components/Section';
import Cartcart from '../components/Cartcart';
import Footer from '../components/Footer';
import CustomerCard from '../components/CustomerCard';
import Pictures from '../components/Pictures';




const Home: React.FC = () => {
  

   return (
    <>
<div className="bg-black text-white min-h-screen">
  <Layout>

<Navbar isDarkBackground={true} />
    <div className="px-6 py-28 sm:px-8 md:px-6 lg:px-14">
      
      <div className="relative w-full">
        <div className="relative inline-block">
          <h1 className="text-8xl font-primary">ECLIPSE</h1>
          <span
            className="
              absolute top-0 right-0
              text-3xl font-home text-white
              bg-black rounded-full
              w-10 h-10
              flex items-center justify-center
              translate-x-1/2 -translate-y-1/2
            "
            aria-label="Registered trademark"
          >
            ®
          </span>
        </div>
        <span className="absolute bottom-0 right-0 flex items-center gap-1 text-xs font-home">
          <span>©</span> 2025
        </span>
      </div>

      <div className="my-5">
        <video
          src={video1}
          autoPlay
          muted
          loop
          className="w-full aspect-[2.53] rounded-[5px] object-cover"
        />
      </div>

      <div className="my-25 text-3xl font-home">
        Rooted in a philosophy of quiet luxury, our<br />
        garments are designed to speak softly in<br />
        cut,in movement, in presence.
      </div>

      <div className="my-2 border-b border-white w-fit">
        <div className="text-sm relative flex items-center cursor-pointer">
          Learn more about Eclypse
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: 'rotate(315deg)',
              position: 'relative',
              top: '2px',
              marginLeft: '2px',
            }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <Pictures />

      <Cartcart />

      <div className="w-full text-white">
        <Section title="Product Details" />
        <Section title="Fabric & Care" />
        <Section title="Delivery & Returns" />
      </div>

      <CustomerCard />

      <Footer />

    </div>
  </Layout>
</div>

    </>

  );
};

export default Home;

