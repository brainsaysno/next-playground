import React, { PropsWithChildren } from "react";

type Props = {};

function OneScreenLayout({ children }: PropsWithChildren<Props>) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      {children}
      <footer className="bg-gray-800 text-white h-20 absolute bottom-0 w-screen flex items-center justify-center">
        <p>
          UI Playground &copy; Nicolás Russo
        <a href="https://www.github.com/brainsaysno">
        </a>
        </p>
      </footer>
    </div>
  );
}

export default OneScreenLayout;
