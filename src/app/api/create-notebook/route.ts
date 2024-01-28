import { auth } from "@clerk/nextjs";
import {
  generateImagePrompt,
  generateImage,
} from "@shared/services/back-end/api-openai";
import { db } from "@shared/services/back-end/db/db-connection";
import { NoteSchema } from "@shared/services/back-end/db/schemas/note";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("unauthorised", { status: 401 });

    const body = await req.json();
    const { name } = body;

    const imageDescription = await generateImagePrompt({ name });

    const imageUrl = await generateImage({ imageDescription });

    if (!imageUrl)
      return new NextResponse("Failed to generate image", { status: 500 });

    const note = await db
      .insert(NoteSchema)
      .values({ name, userId, imageUrl })
      .returning({ insertedId: NoteSchema.id });

    return NextResponse.json({ id: note[0].insertedId });
  } catch (error) {
    console.error("error", error);
    return new NextResponse("Failed to generate image", { status: 500 });
  }
}
