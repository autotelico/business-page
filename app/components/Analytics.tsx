import Laptop from '@/public/laptop.jpg';

export default function Analytics(): JSX.Element {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop.src} alt="" />nm
        <div>
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
        </div>
      </div>
    </div>
  );
}
