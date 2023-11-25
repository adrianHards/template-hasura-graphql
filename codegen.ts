import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_URL ?? "http://localhost:8080/v1/graphql"]: {
        headers: {
          "x-hasura-admin-secret":
            process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? "",
        },
      },
    },
  ],
  documents: "src/**/*.graphql",
  generates: {
    "./src/gql/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: "graphql-request",
      },
    },
  },
};

export default config;
