## Contributing

### Setting up the development environment

```
yarn install
```

### Submiting a patch

#### Run tests

Before commiting your patch, please check the new code against existing tests.

** Inside a package subfolder **

```
yarn test
```

** On the root dir **

```
lerna run test
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
lerna run build
lerna publish
```

