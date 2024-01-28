import { AppRoute } from "@shared/constants/fe-route";

type ReplacePathSegments = {
  pathname: AppRoute;
  replacements: { [key: string]: string };
};

export const replacePathSegments = ({
  pathname,
  replacements,
}: ReplacePathSegments): string => {
  let updatedPathname = pathname as string;

  Object.entries(replacements).forEach(([segment, replacement]) => {
    const regex = new RegExp(`\\[${segment}\\]`, "g");
    updatedPathname = updatedPathname.replace(regex, replacement);
  });

  return updatedPathname;
};
