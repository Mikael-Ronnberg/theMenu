import { router } from "./trpc/trpc";
import { userRouter } from "./routers/users";
import { adminRouter } from "./routers/admin";
import { createContext } from "./trpc/context";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<Awaited<typeof createContext>>().create();

export const appRouter = router({
  users: userRouter,
  admin: adminRouter,
});

export type AppRouter = typeof appRouter;
