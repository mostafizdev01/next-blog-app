import { NextResponse } from "next/server";
import { blogs } from "../route";


export async function GET (request:Request, {params}: {params: Promise<{blogId: string}>}){
    const { blogId } = await params;
    const blog = blogs.find(blog => blog.id === Number(blogId));
    return NextResponse.json(blog)
}