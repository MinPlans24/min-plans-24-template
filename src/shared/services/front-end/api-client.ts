import axios from "axios";
import qs from "qs";
import { ApiEndpoint } from "@shared/constants/api-endpoint";
import { CreateNotebookThumbnailDescription } from "@shared/types/notebook";

const createApi = () => {
  const apiInstance = axios.create({
    paramsSerializer: (params: unknown) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
    baseURL: process.env.NEXT_PUBLIC_BE_BASE_API_URL,
  });

  return {
    get: {},
    post: {
      async createNoteBook(noteBookForm: CreateNotebookThumbnailDescription) {
        const response = await apiInstance.post(
          ApiEndpoint.CreateNoteBook,
          noteBookForm,
        );

        return response;
      },
    },
    put: {},
    delete: {},
  };
};

export const apiClient = createApi();
