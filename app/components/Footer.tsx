import LinkedInIcon from '@/public/linkedin-green-icon.svg'
import DiscordIcon from '@/public/discord-green-icon.svg'
import Email from '@/public/email-green-icon.svg'

export default function Footer(): JSX.Element {
  return (
    <footer className="py-16 px-8bbg-black text-[#00df9a] flex items-center justify-center">
      <div id="footer-wrapper" className='mx-auto'>
        <h4 className="text-3xl mx-auto text-center">Developed by: Henrique Heron</h4>
        <div id="social-media" className="mx-auto grid grid-cols-3 justify-items-center content-center mt-5">
          <img src={LinkedInIcon.src} alt="Henrique Heron's LinkedIn Profile" className="h-[50px] w-[50px] hover:scale-110 duration-300" />
          <img src={DiscordIcon.src} alt="Henrique Heron's Discord Profile" className="h-[50px] w-[50px] hover:scale-110 duration-300" />
          <img src={Email.src} alt="Henrique Heron's Email" className="h-[50px] w-[50px] hover:scale-110 duration-300" />
        </div>
      </div>
    </footer>
  );
}
