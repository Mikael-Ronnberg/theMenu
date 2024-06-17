import { z } from "zod";
import { publicProcedure, router } from "../trpc/trpc";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";
import { getJwtSecretKey } from "@/lib/auth";
import cookie from "cookie";
import { TRPCError } from "@trpc/server";

export const adminRouter = router({
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { res } = ctx;
    }),
});
