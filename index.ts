import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());


//Get all users with sports as Swimming or Cricket-
app.get("/users", async (req, res) => {
  try {
    // const users = await prisma.user.findUnique({
    //   where: {
    //     id: 9
    //   }
    // });
    // const users = await prisma.user.findFirst({
    //   where: {
    // id: 7
    //   }
    // });
    const users = await prisma.user.findMany({
      where: {
        sports :{in: ["Swimming", "Cricket"]},
        // OR: [
        //   { age: { gt: 30 } },
        //   { sports: "Swimming" },
        //   { isAdmin: true },
        // ]
      },
    });

    res.json(users); 
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});


//Update a user with email, change name, isAdmin and sports-
app.put("/users", async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                email: "sophia.johnson@test.com"
            },
            data: {
                name: "Sophia Anderson",
                isAdmin: true,
                sports: "Tennis"
            }
        });
        res.json(updatedUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

//Delete a user with email -
app.delete("/users", async (req, res) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                email: "sam.wilson@test.com"
            }
        });
        res.json(deletedUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});