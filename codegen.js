module.exports = {
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `Bearer 142a19ef23aa0cbbf28d0309eef20094c7339dca`,
        },
      },
    },
  ],
  documents: "src/graphql/**/*.ts",
  overwrite: true,
  generates: {
    "src/generated/graphql-client-api.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
