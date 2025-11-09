
export {};

const _prismaPkg: any = await import('@prisma/client');
const PrismaClient = _prismaPkg.PrismaClient ?? _prismaPkg.default?.PrismaClient;
const prisma = new PrismaClient();

async function main() {

    await prisma.post.deleteMany();
    await prisma.postCategory.deleteMany();
    await prisma.user.deleteMany();

    await prisma.user.create({
        data: {
            id: 1,
            name: "Admin User",
            email: "admin@example.com",
        }
    });

    await prisma.postCategory.createMany({data:[
            { id: 1, name: "Technology", slug: "technology" },
            { id: 2, name: "Programming", slug: "programming" },
            { id: 3, name: "Web Development", slug: "web-development" },
        ]
    });

    await prisma.post.createMany({data:[
            {
                id: 1,
                title: "Introduction to Prisma",
                slug: "introduction-to-prisma",
                excerpt: "Learn the basics of Prisma ORM.",
                content: "Prisma is an open-source ORM that makes it easy to work with databases in TypeScript and JavaScript.",
                authorId: 1,
                categoryId: 2,
                published: true,
            },
            {
                id: 2,
                title: "Getting Started with TypeScript",
                slug: "getting-started-with-typescript",
                excerpt: "A beginner's guide to TypeScript.",
                content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
                authorId: 1,
                categoryId: 1,
                published: true,
            },
            {  
                id: 3,
                title: "Building Web Applications with React",
                slug: "building-web-applications-with-react",
                excerpt: "An introduction to building web apps using React.",
                content: "React is a JavaScript library for building user interfaces.", 
                authorId: 1,
                categoryId: 3,
                published: true,
            },
        ]
    });
}


main()
    .catch((e) => console.error(e))
    .finally(async () => { await prisma.$disconnect(); });