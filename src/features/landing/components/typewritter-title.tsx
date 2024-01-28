"use client";
import TypewriterComponent from "typewriter-effect";
import React from "react";

type TypewritterTitleProps = {
  titles: string[];
};

export const TypewritterTitle = ({ titles }: TypewritterTitleProps) => {
  return (
    <TypewriterComponent
      options={{ loop: true }}
      onInit={(typewritter) => {
        titles.forEach((title) => {
          typewritter.typeString(title).pauseFor(500).deleteAll();
        });

        typewritter.start();
      }}
    />
  );
};
