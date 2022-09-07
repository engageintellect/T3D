import { createRouter } from './context';
import { z } from 'zod';

export const trpcRouter = createRouter()
	.query('helloworld', {
		input: z
			.object({
				text: z.string().nullish()
			})
			.nullish(),
		resolve({ input }) {
			return {
				greeting: `Hello ${input?.text ?? 'world'}`
			};
		}
	})
	.query('getAll', {
		async resolve({ ctx }) {
			return await ctx.prisma.example.findMany();
		}
	})
	.query('test', {
		input: z
			.object({
				text: z.string().nullish()
			})
			.nullish(),
		resolve({ input }) {
			return {
				greeting: `Hello ${input?.text ?? 'world'}`
			};
		}
	})
	.query('etAPI', {
		async resolve() {
			return {
				greeting: 'An Emerging Technologies template.'
			};
		}
	});
