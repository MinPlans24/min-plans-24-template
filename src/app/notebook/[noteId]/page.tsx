import { auth } from "@clerk/nextjs";
import { AppRoute } from "@shared/constants/fe-route";
import { db } from "@shared/services/back-end/db/db-connection";
import { NoteSchema } from "@shared/services/back-end/db/schemas/note";
import { replacePathSegments } from "@shared/utils/replace-path-segments";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { noteId: string };
};

const NotebookPage = async ({ params: { noteId } }: Props) => {
  const { userId } = auth();

  if (!userId) redirect(AppRoute.SignIn);

  const [note] = await db
    .select()
    .from(NoteSchema)
    .where(
      and(eq(NoteSchema.id, parseInt(noteId)), eq(NoteSchema.userId, userId)),
    );

  if (!note) redirect(AppRoute.Dashboard);

  return <div className="bg-red-500">{JSON.stringify(note)}</div>;
};

export default NotebookPage;
