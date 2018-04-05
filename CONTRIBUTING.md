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

```
npx lerna run build --scope=@crave/farmblocks-packagename
```

### Creating a new component

There is a tool to create some initial folders and files for new components:

```
yarn create-component
```

### Submiting a patch

#### Run tests

Before commiting your patch, please check the new code against existing tests.

```
yarn test
```

If you want to keep the tests running in watch mode, you might need to install
a Jest dependency watchman.

- https://facebook.github.io/watchman/docs/install.html

And then:
```
yarn test --watch
```

#### Generate new snapshots and coverage reports
To run the full test suite and generate a coverage report use:

```
yarn test --coverage
```

And open the html generated in ``coverage/lcov-report/index.html``

To update the snapshots use
```
yarn test -u
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

