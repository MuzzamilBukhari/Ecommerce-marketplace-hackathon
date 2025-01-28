"use client";
import Link from "next/link";
import PricingCard from "./PricingCard";
import { useState } from "react";
import PageHeader from "../ui/PageHeader";
import TrialSection from "../ui/TrialSection";

// Pricing Component
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      plan: "FREE",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { name: "Unlimited Product Updates", available: true },
        { name: "24/7 Support", available: true },
        { name: "Custom Reports", available: false },
      ],
    },
    {
      plan: "STANDARD",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        { name: "Unlimited Product Updates", available: true },
        { name: "24/7 Support", available: true },
        { name: "Custom Reports", available: true },
      ],
      isHighlighted: true,
    },
    {
      plan: "PREMIUM",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        { name: "Unlimited Product Updates", available: true },
        { name: "24/7 Support", available: true },
        { name: "Custom Reports", available: true },
        { name: "Dedicated Account Manager", available: true },
      ],
    },
  ];

  const togglePricing = () => setIsYearly(!isYearly);

  return (
    <section className="flex flex-col items-center pt-20 bg-gray-50 text-[#272343] ">
      {/* Header */}
      <PageHeader
        first={"Pricing"}
        second={"Simple Pricing"}
        tagline={""}
        pageName={"Pricing"}
      />

      {/* Pricing Toggle */}
      <div className="flex items-center gap-4 my-6">
        <span className="font-semibold">Monthly</span>
        <div
          className="w-12 h-6 rounded-full bg-myHeading flex items-center cursor-pointer"
          onClick={togglePricing}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
              isYearly ? "translate-x-6" : ""
            }`}
          />
        </div>
        <span className="font-semibold">Yearly</span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            features={plan.features}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>

      {/* CTA */}
      <TrialSection />
    </section>
  );
};

export default Pricing;
