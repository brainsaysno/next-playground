import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { SubscriptionPlan } from "../../components/Subscriptions/Subscription.types";
import PlanCard from "../../components/Subscriptions/PlanCard";
import OneScreenLayout from "../../components/Projects/OneScreenLayout/OneScreenLayout";

type Props = {};

function Subscriptions({}: Props) {
  const plans: SubscriptionPlan[] = [
    {
      name: "Silver",
      icon: "🜛",
      rates: {
        monthly: 5.99,
        yearly: 3.99,
      },
      perks: ["Take on me", "Take me on"],
      nonPerks: [
        "Never gonna give you up",
        "Never gonna let you down",
        "Never gonna give you up",
        "Never gonna let you down",
      ],
    },
    {
      name: "Gold",
      icon: "🜚",
      rates: {
        monthly: 12.99,
        yearly: 9.99,
      },
      perks: ["Take on me", "Take me on", "Take on me", "Take me on"],
      nonPerks: ["Never gonna give you up", "Never gonna let you down"],
    },
    {
      name: "Platinum",
      icon: "🜉",
      rates: {
        monthly: 19.99,
        yearly: 15.99,
      },
      perks: [
        "Take on me",
        "Take me on",
        "Take on me",
        "Take me on",
        "Take on me",
        "Take me on",
      ],
    },
  ];

  const [frequency, setFrequency] = useState<"Monthly" | "Yearly">("Monthly");

  const handleFrecuencyChange = (e: ChangeEvent<any>) => {
    const newFrequency = e.target.value as "Monthly" | "Yearly";
    setFrequency(newFrequency);
  };

  return (
    <OneScreenLayout>
      <main className="px-20 py-20 bg-gray-800 h-full">
        {" "}
        {/* bg-gradient-to-br from-violet-500 to-pink-600 */}
        <h1 className="text-3xl text-center text-violet-100 my-7 ">
          Subscriptions
        </h1>
        <div className="flex justify-center my-4">

        <ul className="grid gap-6 w-1/4 md:grid-cols-2 " onChange={handleFrecuencyChange}>
          <RadioButton value="Monthly" checked={frequency === "Monthly"} />
          <RadioButton value="Yearly" checked={frequency === "Yearly"} />
        </ul>
        </div>
        <div className="flex flex-row gap-x-10 flex-nowrap justify-center">
          {plans.map((plan, index) => (
            <PlanCard
              plan={plan}
              key={index}
              showFlag={index === 2}
              flagText={"Most Valuable"}
              frequency={frequency}
            />
          ))}
        </div>
      </main>
    </OneScreenLayout>
  );
}

type RadioButtonProps = { value: string; checked: boolean };

function RadioButton(props: RadioButtonProps) {
  return (
    <li>
      <input
        type="radio"
        name="frequency"
        id={props.value}
        className="hidden peer"
        required
        {...props}
      />
      <label
        htmlFor={props.value}
        className="inline-flex justify-center items-center p-2 w-full rounded-lg  bg-violet-50 cursor-pointer text-gray-600 peer-checked:text-violet-100 peer-checked:bg-violet-800"
      >
        { props.value}
      </label>
    </li>
  );
}
//<h2 className="text-violet-100 peer-checked:text-violet-300">{ props.value}</h2>

export default Subscriptions;
