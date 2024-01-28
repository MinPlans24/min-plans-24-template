"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/components/ui/dialog";
import { Plus, Loader2 } from "lucide-react";
import { Input } from "@shared/components/ui/input";
import { Button } from "@shared/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@shared/services/front-end/api-client";
import { createNoteResolver } from "../resolvers/create-note";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CreateNotebookForm } from "@shared/types/notebook";
import { useRouter } from "next/navigation";
import { AppRoute } from "@shared/constants/fe-route";
import { replacePathSegments } from "@shared/utils/replace-path-segments";
import { ErrorMessageUI } from "@shared/components/error-message";

type CreateNoteDialogProps = {};

export const CreateNoteDialog = (props: CreateNoteDialogProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateNotebookForm>({
    resolver: createNoteResolver,
  });

  const { mutateAsync: createNoteBook, isPending } = useMutation({
    mutationFn: ({ name }: CreateNotebookForm) =>
      apiClient.post.createNoteBook({ name }),
  });

  const onCreateNotebook = async (data: CreateNotebookForm) => {
    const {
      data: { id },
    } = await createNoteBook(data);

    router.push(
      replacePathSegments({
        pathname: AppRoute.Notebook,
        replacements: { id },
      }),
    );
  };

  return (
    <Dialog>
      <DialogTrigger className="mx-auto">
        <div className="py-3 px-10 gap-3 flex justify-between border-dashed border-white border-2 sm:px-16 lg:py-6 lg:px-16">
          <Plus className="text-white" />
          <h2 className="text-white">New Note Book</h2>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="">New Note Book</DialogTitle>
          <DialogDescription>
            Create a new note to save your information.
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(onCreateNotebook)}
        >
          <Input
            type="text"
            placeholder="Name of note book"
            {...register("name")}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <ErrorMessageUI message={message} />}
          />
          <div className="flex gap-x-4">
            <Button className="grow bg-slate-400" type="reset">
              Cancel
            </Button>
            <Button
              className="grow"
              type="submit"
              disabled={!isValid || isPending}
            >
              <div className="flex gap-x-0.5">
                {isPending && <Loader2 />}
                Create
              </div>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
