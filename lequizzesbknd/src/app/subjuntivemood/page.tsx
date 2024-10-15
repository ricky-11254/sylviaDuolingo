"use Client";

import Link from "next/link";


export default async function Page() {
  const style = {
		width: 400,
		backgroundColor: "gray",
	};
	return (
    <main>
    <h1>TOEIC Practice Test #2</h1>
    <h3>200 Questions</h3>

    {/* <TestCard /> */}

    <a href="#" style={style}>Next</a>
    <a href="#" >Prev</a>
    <a href="#" style={style}>Start Over</a>

    <Link
      href="https://launchenglish.thinkific.com/"
      className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
    >
      <span>Launch English</span>
    </Link>
  </main>
	);
}
