import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export async function GET() {
  try {
    await prisma.$connect(); // optional, ensures connection before query

    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    console.log('✅ Fetched posts from PostgreSQL:', posts);
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('❌ Prisma connection/query error:', error);
    return NextResponse.json(
      { error: 'Failed to connect to PostgreSQL or fetch posts' },
      { status: 500 }
    );
  } 
}
