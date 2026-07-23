import GithubStats from '@/components/github-stats';
import Icon from '@/components/icon';

interface SocialIconProps {
  href: string;
  name: 'github' | 'linkedin' | 'twitter' | 'facebook' | 'whatsapp';
}

const SocialIcon = ({ href, name }: SocialIconProps) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    className='group relative flex items-center justify-center size-12 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-zinc-800 hover:border-zinc-700'
  >
    <Icon
      name={name}
      className='size-8 text-zinc-400 group-hover:text-zinc-100 transition-colors duration-300'
    />
  </a>
);

export default function Home() {
  return (
    <main className='flex-1 flex flex-col items-center justify-center w-full px-6 py-20 overflow-hidden relative'>
      {/* Background decorative elements */}
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-50' />
      <div className='absolute bottom-1/4 right-1/4 w-100 h-100 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none opacity-40' />

      <div className='w-full max-w-3xl mx-auto space-y-16 opacity-0 animate-fade-in z-10 relative'>
        <header className='space-y-6 text-center sm:text-left'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400 mb-4 backdrop-blur-sm shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
            Available for opportunities
          </div>
          <h1 className='text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-zinc-100 to-zinc-500 sm:text-6xl pb-2'>
            Building modern digital experiences.
          </h1>
          <p className='max-w-2xl text-lg leading-relaxed text-zinc-400 mx-auto sm:mx-0'>
            👋 Hey, I&apos;m{' '}
            <strong className='text-zinc-200 font-medium'>Humayun Kabir</strong>
            , a design-focused software engineer based in Dhaka. Currently
            shaping the next-generation of Mobile Financial Services (MFS) at{' '}
            <a
              href='https://bkash.com'
              target='_blank'
              rel='noreferrer'
              className='text-zinc-200 hover:text-emerald-400 transition-colors border-b border-zinc-700 hover:border-emerald-400/50'
            >
              bKash Limited
            </a>{' '}
            as a Lead Engineer.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <GithubStats />
          <div className='flex flex-col justify-center gap-6 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 backdrop-blur-sm transition-all hover:bg-zinc-900/50 hover:border-zinc-800/50'>
            <h3 className='text-sm font-medium text-zinc-400'>
              Connect with me
            </h3>
            <div className='flex flex-wrap gap-4'>
              <SocialIcon
                href='https://github.com/humayunkabir'
                name='github'
              />
              <SocialIcon
                href='https://www.linkedin.com/in/humayunkabirdev'
                name='linkedin'
              />
              <SocialIcon
                href='https://twitter.com/humayunkabirdev'
                name='twitter'
              />
              <SocialIcon href='https://wa.me/+8801709152786' name='whatsapp' />
              <SocialIcon
                href='https://www.facebook.com/humayunkabirdev'
                name='facebook'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
