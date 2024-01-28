import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const createNoteSchema = yup.object().shape({
  name: yup.string().required().min(4).max(40),
});

export const createNoteResolver = yupResolver(createNoteSchema);
