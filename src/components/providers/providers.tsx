"use client";

import { trpc } from "@/server/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";

// export const colors = {
//   brand: {
//     primary: "#a7a7a7",
//     primaryLight: "#ffffff",
//     primaryDark: "#535353",
//     primaryDarker: "#353535",
//     whiteGrey: "#9d9d9d",
//     whiteBlue: "#b4d6f8",
//     brownLight: "#EDC39F",
//     darkText: "#3A3A3A",
//     lightText: "#939393",

//     borderLight: "#535353",
//   },
// };

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",

      primary: "#a7a7a7",
      primaryLight: "#ffffff",
      primaryDark: "#535353",
      primaryDarker: "#353535",
      whiteGrey: "#9d9d9d",
      whiteBlue: "#b4d6f8",
      brownLight: "#EDC39F",
      darkText: "#3A3A3A",
      lightText: "#939393",

      borderLight: "#535353",
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
