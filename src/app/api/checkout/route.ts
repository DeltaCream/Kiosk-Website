import { NextApiRequest, NextApiResponse } from "next";

const bentoSelections = [];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { selections } = req.body;
        bentoSelections.push(selections);
        return res
            .status(201)
            .json({ message: "Bento selections stored successfully" });
    } else if (req.method === "GET") {
        return res.status(200).json({ selections: bentoSelections });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}

export async function POST(req: Request) {
    const body = await req.json();
    const { selections } = body;
    bentoSelections.push(selections);
    return new Response(
        JSON.stringify({ message: "Bento selections stored successfully" }),
        {
            status: 201,
        }
    );
}

export async function GET(req: Request) {
    return new Response(JSON.stringify(bentoSelections), {
        status: 200,
    });
}
