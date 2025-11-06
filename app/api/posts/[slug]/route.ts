import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {

    const { slug } = await context.params;
    
    const post = await prisma?.post.findUnique({
        where: { slug: slug },
        include: {
            author: true,
        }
    });

    if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
}