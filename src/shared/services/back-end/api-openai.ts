import { Configuration, OpenAIApi } from "openai-edge";
import {
  CreateNotebookThumbnail,
  CreateNotebookThumbnailDescription,
} from "@shared/types/notebook";

const { OPENAI_API_KEY } = process.env;

if (!OPENAI_API_KEY)
  throw new Error("Missing OPENAI_API_KEY. Please check in env files");

const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const generateImagePrompt = async ({
  name,
}: CreateNotebookThumbnailDescription) => {
  try {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an creative and helpful AI assistance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titles ${name}`,
        },
      ],
    });

    const { error, choices } = await res.json();
    if (error) throw error;

    const image_description = choices[0].message.content;

    return image_description as string;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const generateImage = async ({
  imageDescription,
}: CreateNotebookThumbnail) => {
  try {
    const response = await openai.createImage({
      prompt: imageDescription,
      n: 1,
      size: "256x256",
    });

    const data = await response.json();

    const imageUrl = data.data[0].url;

    return imageUrl as string;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
