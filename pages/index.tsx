import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Icon from './components/Icon';

import github from './assets/img/github.png';
import linkedin from './assets/img/linkedin.png';
import twitter from './assets/img/twitter.png';
import facebook from './assets/img/facebook.png';
import whatsapp from './assets/img/whatsapp.png';

interface SocialIconProps {
  src: StaticImageData;
  href: string;
  name: 'github' | 'linkedin' | 'twitter' | 'facebook' | 'whatsapp';
}

const SocialIcon = ({ src, href, name }: SocialIconProps) => (
  <a href={href} target='_blank' rel='noreferrer' className='social-icon'>
    <Icon name={name} className='w-12 h-12' />
    {/* <Image src={src} alt={name} height={40} width={40} /> */}
  </a>
);

const Home = () => (
  <>
    <Head>
      <title>Humayun Kabir</title>
    </Head>
    <main className='flex flex-col items-center justify-center w-screen min-h-screen py-8 text-center bg-[#14182c] text-white'>
      <div className='max-w-3xl px-8 mx-auto'>
        <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          A web engineer interested in design systems and closing the gap
          between design and development
        </h1>
        <p className='mt-6'>
          👋 Hey I&apos;m Humayun Kabir, a design-focused software engineer
          based in Dhaka. I&apos;m currently working at bKash Limited as
          Assistant Lead Engineer building the next-generation Mobile Financial
          Services (MFS).
        </p>

        <div className='flex justify-center mt-12 space-x-2'>
          <SocialIcon
            href='https://github.com/humayunkabir'
            name='github'
            src={github}
          />
          <SocialIcon
            href='https://www.linkedin.com/in/humayunkabirdev'
            name='linkedin'
            src={linkedin}
          />
          <SocialIcon
            href='https://twitter.com/humayunkabirdev'
            name='twitter'
            src={twitter}
          />
          <SocialIcon
            href='https://wa.me/+8801709152786'
            name='whatsapp'
            src={whatsapp}
          />
          <SocialIcon
            href='https://www.facebook.com/humayunkabirdev'
            name='facebook'
            src={facebook}
          />
        </div>
      </div>
    </main>
  </>
);

export default Home;
