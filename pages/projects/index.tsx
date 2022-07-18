import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../../components/Projects/ProjectCard/ProjectCard";

const Home: NextPage = () => {
  const projects = [
    {
      name: "Subscription Selector",
      slug: "subscriptions",
      description: "A cool subscription selector mockup",
    },
    {
      name: "E-commerce product",
      slug: "ecommerce",
      description: "An aesthetic e-commerce product page",
    },
  ];

  return (
    <div>
      <main className="flex flex-col justify-center align-center w-screen h-screen px-32">
        <h1 className="text-3xl font-semibold text-center py-10">
          Projects
        </h1>
        <div className="flex flex-row gap-20 flex-wrap justify-center">
          {projects.map((project, index) => (
            <Card
              name={project.name}
              link={"/projects/" + project.slug}
              description={project.description}
              key={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
