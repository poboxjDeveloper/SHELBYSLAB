// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { pronetDateString } from 'utils/protimeHelpers';
import { Category } from 'interfaces/Category';

type Data = {
  categories: Category[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const url = `http://localhost:3000/data/${pronetDateString()}.json`;
    const fetchResult = await fetch(url);
    const json = await fetchResult.json();

    return res.status(200).json({ categories: json.categories });
  } catch {
    return res.status(500).json({ categories: [] });
  }
}
