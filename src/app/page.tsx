import { Button } from "@shared/components/ui/button";
import { TypewritterTitle } from "@features/landing/components/typewritter-title";
import Link from "next/link";
import { AppRoute } from "@shared/constants/fe-route";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-pink-500 text-3xl">AI note taking assistant.</h1>

      <p className="text-white">AI Powered</p>

      <h2 className="text-pink-200">
        <TypewritterTitle
          titles={["Supercharged Productivity.", "AI-Powered Insights."]}
        />
      </h2>

      <Button className="bg-pink-700 flex gap-x-0.5">
        <Link href={AppRoute.Dashboard}>Dashboard</Link>
        <ArrowRight size={18} />
      </Button>
    </main>
  );
}
