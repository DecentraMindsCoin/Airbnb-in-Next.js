import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[ 700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className='absolute top-1/2 w-full text-center'>
          <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
          <button className='cursor-pointer shadow-md mt-5 font-bold text-purple-500 rounded-full border-none bg-white px-10 py-4 hover:shadow-xl active:scale-90 transition ease-in-out duration-200'>I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;
