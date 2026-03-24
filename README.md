# Prisma-ExpressProject
SetUpPrisma-ConnectPostgresDB-UseitwithExpress

## How to Run the Server

1. **Clone the project**

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. **Install dependencies**

```bash
npm install node.js ,nodemon , express
```

3. **Set up Prisma**

```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

4. **Start the server**

```bash
node index.js
```
*(npx ts-node index.ts` if using TypeScript)*

Server will run on:
```
http://localhost:3000
```

---

## How to Test Routes

You can test the API using:

* Browser (for GET requests)
* Insomnia

#### Get all users

```
GET http://localhost:3000/users
```

## Available Routes

### 1. GET `/users`

Fetch users from the database.

#### Example filter used:

* Age greater than 30
* Sport = Swimming
* isAdmin = false

#### Sample Response:

```json
[
  {
    "id": 1,
    "name": "Olivia Anderson",
    "email": "olivia.anderson@test.com",
    "age": 26,
    "isAdmin": false,
    "address": "Örebro, Sweden",
    "sports": "Swimming"
  }
]
```
---

##  New Routes Created

### GET `/users`

* Fetch all users or filtered users
* Supports filtering using:

  * age
  * sports
  * isAdmin
update this section if you add more routes like POST, PUT, DELETE)*

---

##  Tech Stack

* Node.js
* Express.js
* Prisma ORM
* SQLite / PostgreSQL (depending on your setup)

---

## Notes

* Make sure your `.env` file is configured properly
* Always run `prisma generate` after changing schema
* If facing issues with data:

```bash
npx prisma migrate reset
```

---

