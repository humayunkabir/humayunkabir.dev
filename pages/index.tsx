import Head from 'next/head';
import Icon from './components/Icon';

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
          <a
            href='https://www.facebook.com/humayunkabirdev'
            target='_blank'
            rel='noreferrer'
          >
            <Icon name='facebook' className='w-12 h-12' />
          </a>
          <a
            href='https://www.linkedin.com/in/humayunkabirdev'
            target='_blank'
            rel='noreferrer'
          >
            <Icon name='linkedin' className='w-12 h-12' />
          </a>
          <a
            href='https://twitter.com/humayunkabirdev'
            target='_blank'
            rel='noreferrer'
          >
            <Icon name='twitter' className='w-12 h-12' />
          </a>
          <a
            href='https://github.com/humayunkabir'
            target='_blank'
            rel='noreferrer'
          >
            <Icon name='github' className='w-12 h-12' />
          </a>
        </div>
      </div>
    </main>
  </>
);

export default Home;
