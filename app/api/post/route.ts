import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

declare global {
    // allow global `prisma` across hot-reloads in development
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return NextResponse.json({ posts });
}
