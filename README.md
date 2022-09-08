# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start local server

```bash
npm start
```
## Start local server

The database has 10 administrator users and 10 non-administrators.

###Admin:
- *Email*: isAdmin_`X`@test.com
- *Password*: userAdmin_`X`

###No Admin:
- *Email*: noAdmin_`X`@test.com
- *Password*: noAdmin_`X`

Note: replace `X` with a number from 1 to 10.
