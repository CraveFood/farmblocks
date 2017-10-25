## Contributing With Code

### Setting up the development environment

```
yarn install
yarn build
```

### Launching the dev gallery
```
yarn storybook
```

### To build individual packages after modifications

Local / dev / ES modules version:

```
npx lerna run build --scope=@crave/farmblocks-packagename
```

Production / commonjs / npm version:

```
BABEL_ENV=production npx lerna run build --scope=@crave/farmblocks-packagename

```

If you try to run the npm version of the libs with the development storybook server, you may
run into an ``exports is not defined`` error message.

### Submiting a patch

#### Run tests

Before commiting your patch, please check the new code against existing tests.

```
yarn test
```

#### Lint task

You can check for linting errors manually using:

```
yarn lint .
```

For the source files, or for the test files:

```
yarn lint.test .
```

Or to check for lint errors only on staged files:

```
yarn lint.staged
```

But if you have pre-commit set, it will already run linters automatically before commits, see below.

#### Precommit checks

This project use a config file with features that requires pre-commit
version bigger than 1.1.0.

If you already have it installed, check the version with:

```
pre-commit --version
```

If you dont have it, please install 
[pre-commit](http://pre-commit.com/) on your machine and then 
setup the git hooks by running:

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

