import React, { ChangeEvent, useState } from "react";
import { Color, Product } from "../../components/ECommerce/ECommerce.types";
import OneScreenLayout from "../../components/Projects/OneScreenLayout/OneScreenLayout";

type Props = {};

function toTitleCase(str: string) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function ECommerce({}: Props) {
  const product: Product = {
    title: "VANS SUEDE GUM SKATE SK8-HI",
    usdPrice: 92.99,
    designer: "Nicolás Russo",
    collection: "Skateboard Shoes",
    tags: ["skateboard", "cool", "radical"],
    colors: [
      {
        name: "Navy Blue",
        hex: "#000080",
      },
      {
        name: "Tobacco Brown",
        hex: "#9A7352",
      },
      {
        name: "Green Ash",
        hex: "#A0DAA5",
      },
    ],
    sizes: [8, 9, 10, 11, 12],
    stock: 12,
    description:
      "All New Skate Classics: Built Extra Tough on the Inside For Skateboarding Completely redesigned for modern skateboarding, the all-new Skate Classics collection delivers more of what skateboarders need to enable maximum progression.",
  };

  //TODO:
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const [currentSize, setCurrentSize] = useState<number>(0);

  const handleColorChange = (e: ChangeEvent<any>) => {
    setCurrentColorIndex(parseInt(e.target.value));
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentSize(parseInt(e.target.value));
  };

  return (
    <OneScreenLayout>
      <main className="p-36">
        <article className="flex gap-10">
          <aside className="flex gap-2">
            <div className="flex flex-col gap-1 h-96 ">
              <div
                className="w-32 !h-48"
                style={{
                  backgroundColor: product.colors[currentColorIndex].hex,
                }}
              ></div>
              <div
                className="w-32 !h-48"
                style={{
                  backgroundColor: product.colors[currentColorIndex].hex,
                }}
              ></div>
              <div
                className="w-32 !h-48"
                style={{
                  backgroundColor: product.colors[currentColorIndex].hex,
                }}
              ></div>
              <div
                className="w-32 !h-48"
                style={{
                  backgroundColor: product.colors[currentColorIndex].hex,
                }}
              ></div>
              <div
                className="w-32 !h-48"
                style={{
                  backgroundColor: product.colors[currentColorIndex].hex,
                }}
              ></div>
            </div>
            <div
              className="w-72 h-96"
              style={{ backgroundColor: product.colors[currentColorIndex].hex }}
            ></div>
          </aside>
          <section>
            <h1 className="text-3xl">{toTitleCase(product.title)}</h1>
            <h2 className="text-2xl font-medium">${product.usdPrice}</h2>
            <p>
              <span className="font-bold">DESIGNER: </span>
              {product.designer}
            </p>
            <p>
              <span className="font-bold">COLLECTION: </span>
              {product.collection}
            </p>
            <p>
              <span className="font-bold">COLOR: </span>
              {product.colors[currentColorIndex].name}
            </p>
            <ul
              onChange={handleColorChange}
              className="flex gap-2 items-center my-3"
            >
              {product.colors.map((color, index) => (
                <RadioColor color={color} colorIndex={index} />
              ))}
            </ul>

            <div className="flex gap-5 my-5">
              <select onChange={handleSizeChange} className="p-2 border border-gray-500 rounded-sm appearance-none">
                {product.sizes.map((size) => (
                  <option value={size}>Size: {size}</option>
                ))}
              </select>

              <input
                type="number"
                name="quantity"
                min={1}
                max={product.stock}
                defaultValue={1}
                className="w-24 py-2 text-md text-center border border-gray-500 rounded-sm"
              />
              <button className="bg-black text-gray-200 uppercase text-sm py-3 px-10 rounded-sm">
                Add to cart
              </button>
            </div>
            <h3 className="font-bold my-5">DESCRIPTION</h3>
            <p>{ product.description}</p>
          </section>
        </article>
      </main>
    </OneScreenLayout>
  );
}

type RadioColorProps = { color: Color; colorIndex: number };

function RadioColor({ color, colorIndex }: RadioColorProps) {
  const colorId = color.hex.slice(1);
  return (
    <li>
      <input
        type="radio"
        name="color"
        id={colorId}
        className="hidden peer"
        value={colorIndex}
      />
      <label
        htmlFor={colorId}
        className="peer-checked:w-8 peer-checked:h-8 border-2 border-white w-7 h-7 block rounded-full"
        style={{ backgroundColor: color.hex }}
      ></label>
    </li>
  );
}

export default ECommerce;
