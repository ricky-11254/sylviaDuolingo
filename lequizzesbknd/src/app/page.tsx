'use Client';

export default function Home() {

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
				
				</div>
			</div>

			<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<p>LEARNHALL'S FREE ENGLISH TESTS</p>
			</div>


			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<a
					href="/toeic"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
            TOEIC Practice Test{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Try out over 50 free questions while improving your knowledge of the TOEIC Exams.
					</p>
				</a>

				<a
					href="/articles"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Articles{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Read english articles to help you better understand the syntax and grammertical structure of the english language
					</p>
				</a>

			</div>
		</main>
	);
}
