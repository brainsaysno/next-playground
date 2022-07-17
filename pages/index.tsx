
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {

  return (
    <div>
      <main className="flex flex-col justify-center align-center w-screen h-screen px-32">
        <h1 className="text-3xl font-semibold text-center py-5">
          UI Playground
        </h1>
        <Link href="/projects" className="text-center">Go to projects &rarr;</Link>
      </main>
    </div>
  );
};

export default Home;