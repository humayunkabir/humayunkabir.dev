import type { StaticImageData } from "next/image";
import facebook from "@/assets/img/facebook.png";
import github from "@/assets/img/github.png";
import linkedin from "@/assets/img/linkedin.png";
import twitter from "@/assets/img/twitter.png";
import whatsapp from "@/assets/img/whatsapp.png";
import Icon from "@/components/icon";

interface SocialIconProps {
	src: StaticImageData;
	href: string;
	name: "github" | "linkedin" | "twitter" | "facebook" | "whatsapp";
}

const SocialIcon = ({ href, name }: SocialIconProps) => (
	<a
		href={href}
		target="_blank"
		rel="noreferrer"
		className="text-zinc-500 transition-all duration-300 hover:text-zinc-100 hover:scale-110"
	>
		<Icon name={name} className="w-8 h-8" />
	</a>
);

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-screen min-h-screen px-6 py-12 text-center bg-zinc-950 text-zinc-300 selection:bg-zinc-800 selection:text-zinc-100">
			<div className="w-full max-w-2xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_forwards]">
				<h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
					A web engineer interested in design systems and closing the gap
					between design and development.
				</h1>
				<p className="max-w-xl mx-auto mt-8 text-lg leading-relaxed text-zinc-400">
					👋 Hey, I&apos;m Humayun Kabir, a design-focused software engineer
					based in Dhaka. I&apos;m currently working at bKash Limited as an
					Assistant Lead Engineer, building the next-generation Mobile Financial
					Services (MFS).
				</p>

				<div className="flex justify-center mt-12 space-x-6">
					<SocialIcon
						href="https://github.com/humayunkabir"
						name="github"
						src={github}
					/>
					<SocialIcon
						href="https://www.linkedin.com/in/humayunkabirdev"
						name="linkedin"
						src={linkedin}
					/>
					<SocialIcon
						href="https://twitter.com/humayunkabirdev"
						name="twitter"
						src={twitter}
					/>
					<SocialIcon
						href="https://wa.me/+8801709152786"
						name="whatsapp"
						src={whatsapp}
					/>
					<SocialIcon
						href="https://www.facebook.com/humayunkabirdev"
						name="facebook"
						src={facebook}
					/>
				</div>
			</div>
		</main>
	);
}
