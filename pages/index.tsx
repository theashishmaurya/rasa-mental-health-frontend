import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CalmingMusic from "../components/calmingMusic";
import ChatBot from "../components/chatbot";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main className='mx-10'>
        <Hero />
        <div className='md:absolute bottom-10'>
          <CalmingMusic />
        </div>

        <div className='md:absolute top-20 right-20'>
          <ChatBot />
        </div>
        <div className='md:absolute bottom-20 right-20 hidden md:block'>
          <div>
            <span className='font-lobster text-4xl'>Grief</span> / gri:f /
          </div>
          <div className='w-32 my-2'>
            Each day we learn of the griefs and Tributaions which affects our
            constituents or ourself
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
