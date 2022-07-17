import React from "react";

type Props = { name: string; link: string; description: string };

function Card({ name, link, description }: Props) {
  return (
    <div className="w-1/5 border-violet-900 border rounded-md shadow-md shadow-violet-300">
      <a href={link}>
        <div className="p-4">
          <h2 className="text-lg text-violet-600">{name} &rarr;</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
export default Card;
