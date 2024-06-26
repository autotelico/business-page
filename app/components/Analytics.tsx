'use client'
import Laptop from '@/public/laptop.jpg';

export default function Analytics(): JSX.Element {
  return (
    <div id="analytics" className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto" src={Laptop.src} alt="Laptop" />
        <div className="md:flex md:flex-col md:justify-center">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h3 className="font-extrabold text-xl">
            Manage Data Analytics Centrally
          </h3>
          <p className="text-sm leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            natus illum cum repellendus exercitationem nam nesciunt id
            cupiditate totam labore nemo quas laboriosam, laudantium voluptas,
            ab excepturi in et doloremque autem quasi eligendi accusamus! Saepe
            ea praesentium odio sunt. Autem.
          </p>
          <button className="block mx-auto text-[#00df9a] bg-black w-[200px] md:mx-0 rounded-md py-3 mt-4 font-bold cursor-pointer"
          onClick={() => alert('This button doesn\'t work as of yet!')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
