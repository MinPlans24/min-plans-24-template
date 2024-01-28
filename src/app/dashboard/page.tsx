import React from "react";
import Link from "next/link";
import { AppRoute } from "@shared/constants/fe-route";
import { Button } from "@shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "@shared/components/ui/separator";
import { CreateNoteDialog } from "@features/note/components/create-note-dialog";

const Dashboard = () => {
  return (
    <main className="w-full h-full">
      <div className="pt-24 px-2 flex flex-col">
        <div className="flex justify-center items-center justify-between">
          <Link href={AppRoute.Home}>
            <Button className="bg-pink-700 flex gap-x-1" size={"sm"}>
              <ArrowLeft size={16} />
              Back
            </Button>
          </Link>
          <h2 className="text-white text-xl sm:text-4xl lg:text-8xl">
            My Notes
          </h2>
          <UserButton />
        </div>

        <Separator className="my-8" />

        <div className="self-center">
          <CreateNoteDialog />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
