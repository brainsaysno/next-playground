import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = {leftArrowHref?: string, rightArrowHref?: string};

function OneScreenLayout({ children, leftArrowHref="/projects", rightArrowHref="/projects" }: PropsWithChildren<Props>) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      {children}
      <footer className="bg-gray-800 text-white h-20 absolute bottom-0 w-screen flex items-center justify-around">
        <Link href={leftArrowHref}>&larr;</Link>

        <p>
          <Link href={rightArrowHref}>UI Playground</Link> &copy; Nicolás Russo
          <a href="https://www.github.com/brainsaysno"></a>
        </p>
        <Link href="/projects">&rarr;</Link>
      </footer>
    </div>
  );
}

export default OneScreenLayout;
