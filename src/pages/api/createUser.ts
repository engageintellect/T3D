// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const user = await prisma.users.create({
		data: {
			userName: 'Neo',
			password: 'password'
		}
	});
	res.status(200).json(user);
};

export default createUser;
