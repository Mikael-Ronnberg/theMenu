import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();

/**
 * Unprotected procedure
 **/

export const router = trpc.router;
export const publicProcedure = trpc.procedure;
