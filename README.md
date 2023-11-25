<div align="center">
  <img src="https://miro.medium.com/max/600/1*RCeGDSIqqW68bS5kYucTvA.png" alt="react-graphql-logos" width="300" />
</div>

# React

This is a minimal React template built using [Vite](https://vitejs.dev/guide/) (TypeScript + SWC) with [ESLint](https://eslint.org/docs/latest/) rules.

Simply, Vite is a build tool for developing web applications. SWC is a JavaScript/TypeScript compiler written in Rust. TypeScript is a strongly typed programming language for JavaScript.

## Getting Started

### Prerequisites

You will need the following installed on your machine:

- [Docker](https://www.docker.com/products/docker-desktop/)

### Setup with Docker

1. Environmental Variables

Create a `.env` file in the root-directory then copy and paste the following into it:

```
HASURA_URL=http://localhost:8080/v1/graphql
HASURA_GRAPHQL_ADMIN_SECRET=myadminsecret

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgrespassword
POSTGRES_DB=postgres
```

2. Run Docker Compose:

   ```
   docker compose -f docker-compose.yml up -d
   ```

   The `init.sql` file, which contains dummy email data, will be executed upon the initial setup of the database. You may modify this file. If you do not wish for the file to run, comment out **line 19** in the `docker-compose` file priopr to running `docker compose`.

3. Open your web browser and visit [localhost:8080](localhost:8080)

   1. enter your admin secret
   2. go to `DATA`
   3. click `default`
   4. click `public`
   5. click `Track` under `Untracked tables or views`

4. Open your web browser and visit [localhost:3000](localhost:3000)

5. Stop the all containers from running

```
docker compose stop
```

### Without Docker

If you wish to run the React application independently (i.e., without the involvement of Docker, Hasura, or the Postgres database):

1. Install the latest version of [Node.js](https://nodejs.org/en/).

2. Assuming you have already cloned the repository, navigate to the directory.

3. install [pnpm](https://pnpm.io/motivation) globally using `npm`:

```
npm install -g pnpm
```

4. Install and run the app locally:

```
pnpm install
pnpm dev
```

5. To run ESLint:

```
pnpm lint
```

# Dependencies

## What is?

#### [dotenv](https://www.npmjs.com/package/dotenv)

A module that loads environment variables from a `.env` file with `process.env` in Node.js applications, and thereby separate secrets from your source code.

#### [graphql-codegen](https://the-guild.dev/graphql/codegen/docs/getting-started)

A tool that auto-generates TypeScript typings and React hooks out of your GraphQL schema.

**What are hooks?**: Hooks allow you to '_hook in to_' or rather use `state` and other React features in functional components. If you’re unfamiliar with React, I recommend this [brief tutorial](https://nextjs.org/learn-pages-router/foundations/from-javascript-to-react) and the official [docs](https://react.dev/).

[`codegen.ts`](https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config) is the configuration file used by graphql-codegen.

#### [graphql-request](https://www.npmjs.com/package/graphql-request)

A minimal GraphQL client that works in both browser and Node.js environments. It provides a simple promise-based API to make requests to a GraphQL server.

#### [react-query](https://tanstack.com/query/latest/docs/react/overview)

A library for:

- **Fetching**: in the context of a React application, this usually means sending a request to an API endpoint and receiving data in response.
- **Caching**: used to store fetched data so that future requests for the same data can be served faster.
- **Synchronising**: keeping data consistent across different parts of the application. For example, if data changes on the server, the application needs to ensure that the change is reflected in the user interface.
- **Updating server state**: i.e. making changes to the data on the server.

# Recommended Extensions

I recommend the following extensions for [Visual Studio Code](https://code.visualstudio.com/download) (VSC).

- [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [GraphQL: Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier]()

Within VSC, `CTRL` `SHIFT` `P`, select `Preferences: Open Workspace Settings (JSON)` and paste the following:

```
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": false,
    "editor.formatOnType": false,
    "editor.formatOnSave": true,
    "editor.formatOnSaveMode": "file",
    "files.autoSave": "onFocusChange",
}
```

If you wish to override any of the default Prettier settings, create a `.prettierrc` file in your root directory and set the value of properties there.

<!-- Links: -->
<!-- https://zenn.dev/kikiki_kiki/scraps/dd849648424dca -->
<!-- https://nhost.io/blog/how-to-use-graphql-code-generator-with-react-query -->
<!-- https://blog.logrocket.com/making-graphql-requests-easy-with-react-typescript-and-react-query/ -->
