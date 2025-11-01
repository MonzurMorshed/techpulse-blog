import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.post.createMany({data:[
            { id: 1, title: "Understanding Next.js 13", excerpt: "An introduction to the new features in Next.js 13.", published: "2024-06-01" },
            { id: 2, title: "JavaScript ES2024 Features", excerpt: "A look at the latest features added to JavaScript in 2024.", published: "2024-05-28" },
            { id: 3, title: "CSS Grid vs Flexbox", excerpt: "When to use CSS Grid and when to use Flexbox in your layouts.", published: "2024-05-20" },
            { id: 4, title: "TypeScript Tips and Tricks", excerpt: "Enhance your TypeScript skills with these useful tips.", published: "2024-05-15" },
            { id: 5, title: "Building Accessible Web Apps", excerpt: "Best practices for creating accessible web applications.", published: "2024-05-10" },
        ]
    });
}


main()
    .catch((e) => console.error(e))
    .finally(async () => { await prisma.$disconnect(); });