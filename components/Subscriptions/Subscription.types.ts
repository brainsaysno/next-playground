import { ReactNode } from "react";

export type Frecuency =
  "daily" |
  "monthly" |
  "yearly";

export interface SubscriptionPlan {
  name: string,
  icon: ReactNode
  rates: {
    monthly: number,
    yearly: number
  },
  perks: string[],
  nonPerks?: string[]
}
