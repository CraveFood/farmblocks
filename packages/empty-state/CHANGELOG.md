# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.1"></a>
## [1.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-empty-state@1.0.0...@crave/farmblocks-empty-state@1.0.1) (2017-11-28)




**Note:** Version bump only for package @crave/farmblocks-empty-state

<a name="1.0.0"></a>
# 1.0.0 (2017-11-21)


### Bug Fixes

* **lib:** add missing lib index.js ([5115b1f](https://github.com/CraveFood/farmblocks/commit/5115b1f))


### Features

* **docs:** authors and readme ([bd05a46](https://github.com/CraveFood/farmblocks/commit/bd05a46))
* **emptystate:** initial implementation of the empty state component ([5726f38](https://github.com/CraveFood/farmblocks/commit/5726f38))
* **package.json:** initial manifest file ([fc656d4](https://github.com/CraveFood/farmblocks/commit/fc656d4))
* **property names:** standarize on the same primary and secondary ([5655059](https://github.com/CraveFood/farmblocks/commit/5655059))


### BREAKING CHANGES

* **property names:** change the property name for the primary button, from primaryButtonLabel and onPrimaryButtonClick to
mainButtonLabel and mainButtonClick

feat(api): include a property for a second neutral button

affects: @crave/farmblocks-empty-state

feat(property names): standarize on the same primary and secondary actions property names as the foo

affects: @crave/farmblocks-empty-state
* **property names:** change button related property names

feat(properties): remove width property, this will be responsibility of the container

affects: @crave/farmblocks-empty-state
* **property names:** property width no longer exists
