// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { trpcRouter } from './trpc';

export const appRouter = createRouter().transformer(superjson).merge('trpcRoute.', trpcRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
