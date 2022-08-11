import Image from "next/image";
export default function Hero() {
  return (
    <div className=' w-full flex flex-col items-center justify-center mt-10'>
      <div className='text-4xl md:text-6xl 2xl:text-8xl my-2 font-lobster'>
        Your Mental
      </div>
      <div className='text-4xl md:text-6xl 2xl:text-8xl my-2 font-lobster'>
        Health Matters
      </div>
      <a href='https://www.freepik.com/vectors/mindfulness' className='my-10'>
        <Image src={"/img/hero.png"} width={400} height={400} />
      </a>
    </div>
  );
}
