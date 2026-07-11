import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/styles/globals.css";

const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-fira-code",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Humayun Kabir | Web Engineer",
		template: "%s | Humayun Kabir",
	},
	description:
		"Humayun Kabir is a design-focused software engineer based in Dhaka, currently working at bKash Limited as Assistant Lead Engineer.",
	keywords: ["Web Engineer", "Software Engineer", "React", "Next.js", "Dhaka", "bKash"],
	authors: [{ name: "Humayun Kabir" }],
	creator: "Humayun Kabir",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://humayunkabir.dev",
		title: "Humayun Kabir | Web Engineer",
		description:
			"Humayun Kabir is a design-focused software engineer based in Dhaka, building the next-generation Mobile Financial Services (MFS) at bKash.",
		siteName: "Humayun Kabir",
		images: [
			{
				url: "https://humayunkabir.dev/og-image.jpg", // Placeholder for actual OG image
				width: 1200,
				height: 630,
				alt: "Humayun Kabir - Web Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@humayunkabirdev",
		creator: "@humayunkabirdev",
		title: "Humayun Kabir | Web Engineer",
		description:
			"Humayun Kabir is a design-focused software engineer based in Dhaka.",
		images: ["https://humayunkabir.dev/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${firaCode.className} font-mono text-base antialiased scroll-smooth`}>
				{children}
			</body>
		</html>
	);
}
