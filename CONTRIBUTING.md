## Contributing

### Setting up the development environment

```
yarn install
```

### Submiting a patch

#### Run tests

Before commiting your patch, please check the new code against existing tests.

```
yarn test
```

#### Precommit checks

If you can please install [pre-commit](http://pre-commit.com/) on your machine and then setup the
git hooks by running:

```
pre-commit install
```

#### Commit messages

Farmblocks uses commitizen to help with the formatting of commit messages,
so instead of doing a ``git commit``, we ask you to please use the ``commit`` 
npm script instead:

```
yarn commit
```

### (To be removed) Manually publish the package

```
lerna publish --skip-git --skip-npm --conventional-commits
lerna run build --scope my-component
lerna run release --scope my-component
```

