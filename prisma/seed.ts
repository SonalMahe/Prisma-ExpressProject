import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
        data: [
        { name: "Sam Wilson", email: "sam.wilson@test.com" },
        { name: "Emily Davis", email: "emily.davis@test.com" },
        { name: "Michael Brown", email: "michael.brown@test.com" },
        { name: "Jessica Lee", email: "jessica.lee@test.com" },
    ],
    });
};
            

seed().then(() => prisma.$disconnect());