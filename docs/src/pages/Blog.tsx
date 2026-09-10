import React from 'react';

const posts = [
	{
		date: '2030.08.18',
		title: 'Coming Soon...',
		summary: 'Posts coming soon..',
	},
	{
		date: '2030.08.18',
		title: 'Coming Soon...',
		summary: 'Posts coming soon..',
	},
	{
		date: '2030.08.18',
		title: 'Coming Soon...',
		summary: 'Posts coming soon..',
	}
];

export default function Blog() {
	return (
		<main className="bg-black text-white min-h-[90vh] px-6 md:px-12 py-12 md:py-20 overflow-hidden relative">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

			<div className="relative z-10 mx-auto w-full max-w-3xl">
				<header className="mb-8 text-center">
					<div className="mb-4 inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400 rounded">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
						PRESSCENTRA / BLOG
					</div>
					<h1 className="font-mono text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
						FIELD NOTES<span className="text-emerald-400">.</span>
					</h1>
					<p className="mt-4 font-mono text-sm leading-relaxed text-zinc-400">
						Thoughts on building useful software, learning in public, and staying curious.
					</p>
				</header>

				<div className="space-y-4">
					{posts.map((post, index) => (
						<article
							key={post.title}
							className="group rounded-md border border-zinc-800 bg-zinc-950/90 p-5 shadow-[0_0_20px_rgba(16,185,129,0.06)] transition-all duration-300 hover:border-emerald-500/70 hover:bg-zinc-900 hover:shadow-[0_0_25px_rgba(16,185,129,0.14)] sm:p-6"
						>
							<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
								<div className="flex gap-4">
									<span className="pt-1 font-mono text-xs text-emerald-500/70">0{index + 1}</span>
									<div>
										<p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">{post.date}</p>
										<h2 className="font-mono text-lg font-bold uppercase text-zinc-100 transition-colors group-hover:text-emerald-400 sm:text-xl">
											{post.title}
										</h2>
										<p className="mt-3 max-w-2xl font-mono text-sm leading-relaxed text-zinc-400">{post.summary}</p>
									</div>
								</div>
								<span className="font-mono text-xs text-emerald-400 opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true">
									&gt;_ 
								</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</main>
	);
}
