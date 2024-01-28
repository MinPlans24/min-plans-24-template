"use client";
import React from "react";

type ErrorMessageUIProps = {
  message: string;
};

export const ErrorMessageUI = ({ message }: ErrorMessageUIProps) => {
  return (
    <p className="before:content-['⚠'] before:mr-0.5 inline-block text-pink-500">
      {message}
    </p>
  );
};
