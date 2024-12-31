# File and Directory 

```
📦 <project root>
 ├ 📂 drizzle
 ├ 📂 src
 │   ├ 📂 db
 │   │  └ 📜 schema.ts
 │   └ 📜 index.ts
 ├ 📜 .env
 ├ 📜 drizzle.config.ts
 ├ 📜 package.json
 └ 📜 tsconfig.json
```
# Step 1 - Install node-postgres package
```
- npm i drizzle-orm pg dotenv
- npm i -D drizzle-kit tsx @types/pg
```

# Step 2 - Setup connection variables 

```
DATABASE_URL=
```
# Step 3 - Connect Drizzle ORM to the database
#### Create a index.ts file in the src/db directory and initialize the connection:

```js
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
const db = drizzle(process.env.DATABASE_URL!);
```
# Step 4 - Create a table

#### Create a schema.ts file in the src/db directory and declare your table:

```js
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

```