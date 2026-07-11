import Icon from "@/components/icon";

interface GithubUser {
	public_repos: number;
	followers: number;
	following: number;
	html_url: string;
	stargazers_count?: number; // Not directly on user, would need repo fetch
}

export default async function GithubStats() {
	try {
		const res = await fetch("https://api.github.com/users/humayunkabir", {
			next: { revalidate: 3600 },
		});

		if (!res.ok) {
			return null;
		}

		const data: GithubUser = await res.json();

		return (
			<a
				href={data.html_url}
				target="_blank"
				rel="noreferrer"
				className="group relative flex items-center justify-between gap-4 p-6 overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/50 transition-all hover:bg-zinc-800/50 hover:border-zinc-700/50 backdrop-blur-sm"
			>
				<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

				<div className="flex items-center gap-4 relative z-10">
					<div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 text-zinc-300 group-hover:scale-110 group-hover:text-white transition-all duration-300">
						<Icon name="github" className="w-6 h-6" />
					</div>
					<div>
						<h3 className="text-sm font-medium text-zinc-200">GitHub Stats</h3>
						<p className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
							<span className="flex items-center gap-1">
								<span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
								{data.public_repos} Repos
							</span>
							<span className="text-zinc-700">•</span>
							<span>{data.followers} Followers</span>
						</p>
					</div>
				</div>
				<div className="relative z-10 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</div>
			</a>
		);
	} catch (error) {
		console.error("Failed to fetch Github stats:", error);
		return null;
	}
}
