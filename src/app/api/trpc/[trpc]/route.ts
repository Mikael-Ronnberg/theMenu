import { appRouter } from "@/server";
import { createContext } from "@/server/trpc/context";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request): Promise<Response> => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: (res) => createContext,
  });
};

export { handler as GET, handler as POST };
