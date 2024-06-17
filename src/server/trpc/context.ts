import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  const { res, req } = opts;
  return {
    res,
    req,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
