import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createRouter } from "next-connect";
import pool from "../../../lib/db"

const router = createRouter<NextApiRequest, NextApiResponse>();

export async function GET(request: Request) {
    try {
        const response = await pool.query('SELECT * FROM posts');
        console.log(response.rows)
        return NextResponse.json(response.rows, { status: 200 });      
    } catch (error) {
        console.error('Error fetching posts: ', error)
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}

// router.post(async (req, res) => {
//     const { title, details } = req.body;
//     try {
//         const result = await pool.query(

//         )
//         res.status(201).json(result.rows[0])
//     } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ error: 'Internal Server Error' })
//     }
// })