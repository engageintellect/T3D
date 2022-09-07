// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const user = await prisma.users.deleteMany({
		where: {
			userName: {
				contains: 'Neo'
			}
		}
	});
	res.status(200).json(user);
};

export default deleteUser;
