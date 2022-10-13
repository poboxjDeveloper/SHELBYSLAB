// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { pronetDateString } from 'utils/protimeHelpers';
import { Category } from 'interfaces/Category';

/**
 * The `categories` property of the `Data` type is an array of `Category` objects or `undefined`.
 * @property {Category[] | undefined} categories - Category[] | undefined;
 */
type Data = {
  categories: Category[] | undefined;
};

/**
 * It fetches a JSON file from a URL, and returns the JSON file's `categories` property as the response
 * @param {NextApiRequest} req - NextApiRequest - This is the request object that Next.js provides.
 * @param res - NextApiResponse<Data>
 * @returns The categories array from the json file.
 */
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
