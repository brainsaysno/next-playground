import React from "react";
import { SubscriptionPlan } from "./Subscription.types";

type Props = {
  plan: SubscriptionPlan;
  frequency: "Monthly" | "Yearly";
  showFlag: boolean;
  flagText: string;
};

function PlanCard({ plan, frequency: frecuency, showFlag, flagText }: Props) {
  const rate = frecuency === "Monthly" ? plan.rates.monthly : plan.rates.yearly;

  return (
    <div className="border w-1/4 border-violet-900 rounded-lg shadow-md shadow-violet-900 flex flex-col justify-between bg-white overflow-hidden">    
      {showFlag && (
        <div className="absolute -mt-3 ml-64 bg-violet-700 p-1 text-sm rounded-sm text-violet-100">
          {flagText}
        </div>
      )}
      <div className="p-5">
        <div className="flex flex-row justify-between">
          <span>
            <h2 className="text-xl">{plan.name}</h2>
        </span>
          <h3 className="text-xl">${rate}/mo</h3>
        </div>
        { frecuency === "Yearly" && 
        <p className="text-right text-sm text-gray-600">
          Billed yearly at $
          {rate * 12}
        </p>}
        <ul className="mt-2">
          {plan.perks.map((perk, index) => (
            <li key={index} className="py-1">
              <span className="text-violet-700 mr-2">&#x2714;</span>
              {perk}
            </li>
          ))}
          {plan.nonPerks?.map((nonPerk, index) => (
            <li className="text-gray-500 py-1" key={index}>
              <span className="text-violet-300 mr-2">&#x2718;</span>
              {nonPerk}
            </li>
          ))}
        </ul>
      </div>
      <a href="#">
        <div className="bg-violet-700 p-4 text-right text-violet-100">
          Go with {plan.name } &rarr;
        </div>
      </a>
    </div>
  );
}

export default PlanCard;
