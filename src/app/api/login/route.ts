// pages/api/auth.js
import { NextApiRequest, NextApiResponse } from "next";

const users = [
    { id: 1, username: "johndoe@gmail.com", password: "helloworld" },
    // Add more users here...
];

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method === "POST") {
//         const { username, password } = req.body;
//         const user = users.find(
//             (user) => user.username === username && user.password === password
//         );
//         if (user) {
//             // Return a token or user ID
//             res.json({ token: "some-token" });
//         } else {
//             res.status(401).json({ error: "Invalid credentials" });
//         }
//     } else {
//         res.status(405).json({ error: "Method not allowed" });
//     }
// }

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    if (user) {
        // Return a token or user ID
        return new Response(JSON.stringify({ token: "some-token" }), {
            status: 200,
        });
    } else {
        return new Response(JSON.stringify({ error: "Invalid username or password. Please try again." }), {
            status: 401,
        });
    }
}
