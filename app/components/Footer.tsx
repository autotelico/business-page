import LinkedInIcon from '@/public/linkedin-icon.svg'

export default function Footer(): JSX.Element {
  return (
    <footer className="py-16 px-8bbg-black text-[#00df9a] flex flex-col items-center justify-center">
      <div className="">
        <h4 className="text-3xl">Developed by: Henrique Heron</h4>
      </div>
      <div id="social-media" className="grid grid-cols-3 gap-3 mt-5">
        <img src={LinkedInIcon.src} alt="" className="icon bg-blue-500 w-full" />
        <img src="" alt="" className="icon bg-blue-500 p-5" />
        <img src="" alt="" className="icon bg-blue-500 p-5" />
      </div>
    </footer>
  );
}
