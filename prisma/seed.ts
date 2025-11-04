
export {};

const _prismaPkg: any = await import('@prisma/client');
const PrismaClient = _prismaPkg.PrismaClient ?? _prismaPkg.default?.PrismaClient;
const prisma = new PrismaClient();

async function main() {

    await prisma.user.create({
        data: {
            id: 1,
            name: "Admin User",
            email: "admin@example.com",
        }
    });

    await prisma.post.createMany({data:[
            { id: 1, title: "Understanding Next.js 13", slug: "understanding-nextjs-13", content: "Full post content for Understanding Next.js 13.", excerpt: "An introduction to the new features in Next.js 13.", authorId:1,published: true },
            { id: 2, title: "JavaScript ES2024 Features", slug: "javascript-es2024-features", content: "Full post content for JavaScript ES2024 Features.", excerpt: "A look at the latest features added to JavaScript in 2024.", authorId:1,published: true },
            { id: 3, title: "CSS Grid vs Flexbox", slug: "css-grid-vs-flexbox", content: "Full post content for CSS Grid vs Flexbox.", excerpt: "When to use CSS Grid and when to use Flexbox in your layouts.", authorId:1,published: true },
            { id: 4, title: "TypeScript Tips and Tricks", slug: "typescript-tips-and-tricks", content: "Full post content for TypeScript Tips and Tricks.", excerpt: "Enhance your TypeScript skills with these useful tips.", authorId:1,published: true },
            { id: 5, title: "Building Accessible Web Apps", slug: "building-accessible-web-apps", content: "Full post content for Building Accessible Web Apps.", excerpt: "Best practices for creating accessible web applications.", authorId:1,published: true },
        ]
    });
}


main()
    .catch((e) => console.error(e))
    .finally(async () => { await prisma.$disconnect(); });