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

## Users for testing

The database has 10 administrator users and 10 non-administrators.

### _Admin:_

- _Email_: isAdmin\_`X`@test.com
- _Password_: userAdmin\_`X`

### _No Admin:_

- _Email_: noAdmin\_`X`@test.com
- _Password_: noAdmin\_`X`

Note: replace `X` with a number from 1 to 10.
