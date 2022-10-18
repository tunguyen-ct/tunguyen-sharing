# Changesets demo

## Setup environment

```
pnpm install
pnpm dev
```

## How to contribute

1. Fork this repo

2. Create a new branch from `main` branch

3. Update the code in the `packages/*` then commiting your changes


4. Adding a changeset with:

```
pnpm changeset
```

or `npx changeset`

Using arrows to navigate and use space to select, then choosing bump type (major|minor|patch) then enter change message.

Read more: [adding a changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)

5. Committing your changeset and creating a PR to `main` branch.

6. Done.
