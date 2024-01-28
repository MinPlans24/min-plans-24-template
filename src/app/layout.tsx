import type { Metadata } from "next";
import "@shared/styles/shadcn-config.css";
import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "@shared/constants/font";
import { QueryClientProviderWrapper } from "@shared/components/ui/query-client-provider";

export const metadata: Metadata = {
  title: "Min Plans 24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <QueryClientProviderWrapper>
            <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black via-black to-purple-900 w-screen h-screen ">
              {children}
            </div>
          </QueryClientProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
