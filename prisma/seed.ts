import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Sam Wilson",
                email: "sam.wilson@test.com",
                age: 28,
                isAdmin: false,
                address: "Stockholm, Sweden",
                sports: "Swimming",
            },
            {
                name: "Emily Davis",
                email: "emily.davis@test.com",
                age: 24,
                isAdmin: false,
                address: "Gothenburg, Sweden",
                sports: "Tennis",
            },
            {
                name: "Michael Brown",
                email: "michael.brown@test.com",
                age: 32,
                isAdmin: true,
                address: "Malmö, Sweden",
                sports: "Basketball",
            },
            {
                name: "Jessica Lee",
                email: "jessica.lee@test.com",
                age: 27,
                isAdmin: false,
                address: "Uppsala, Sweden",
                sports: "Badminton",
            },
            {
                name: "David Smith",
                email: "david.smith@test.com",
                age: 35,
                isAdmin: true,
                address: "Halmstad, Sweden",
                sports: "Cricket",
            },
            {
                name: "Sophia Johnson",
                email: "sophia.johnson@test.com",
                age: 22,
                isAdmin: false,
                address: "Lund, Sweden",
                sports: "Volleyball",
            },
            {
                name: "Daniel Martinez",
                email: "daniel.martinez@test.com",
                age: 30,
                isAdmin: false,
                address: "Västerås, Sweden",
                sports: "Cricket",
            },
            {
                name: "Olivia Anderson",
                email: "olivia.anderson@test.com",
                age: 26,
                isAdmin: false,
                address: "Örebro, Sweden",
                sports: "Swimming",
            },
            {
                name: "Lucas Eriksson",
                email: "lucas.eriksson@test.com",
                age: 29,
                isAdmin: false,
                address: "Linköping, Sweden",
                sports: "Floorball",
            },
            {
                name: "Emma Svensson",
                email: "emma.svensson@test.com",
                age: 31,
                isAdmin: true,
                address: "Helsingborg, Sweden",
                sports: "Swimming",
            }
        ],
    });
};


seed().then(() => prisma.$disconnect());