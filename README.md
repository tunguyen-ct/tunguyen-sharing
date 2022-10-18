# Changesets demo

## Setup environment

```
pnpm install
pnpm dev
```

## How to contribute

Create a new branch from `main` branch

Update the code in the `packages/*`

Commit your changes then adding a changeset with:

```
pnpm changeset
```

or `npx changeset`

Using arrows to navigate and use space to select, then choosing bump type (major|minor|patch) then enter change message.

Read more: [adding a changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)

Committing your changeset and creating a PR to `main` branch.

Done.
