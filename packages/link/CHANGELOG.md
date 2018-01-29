# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.2"></a>
## [2.0.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-link@2.0.1...@crave/farmblocks-link@2.0.2) (2018-01-29)




**Note:** Version bump only for package @crave/farmblocks-link

<a name="2.0.1"></a>
## [2.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-link@2.0.0...@crave/farmblocks-link@2.0.1) (2018-01-18)


### Bug Fixes

* **compatibility:** use a shim for Object.values ([402df85](https://github.com/CraveFood/farmblocks/commit/402df85))
* **proptypes:** fixed a merge leftover pointed by eslint ([9152ff6](https://github.com/CraveFood/farmblocks/commit/9152ff6))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-link@1.1.4...@crave/farmblocks-link@2.0.0) (2018-01-18)


### Code Refactoring

* **exports:** use better proptypes export names instead of just "newProps" ([031b732](https://github.com/CraveFood/farmblocks/commit/031b732))
* **link:** use disabled tooltip hoc on the link ([60ea799](https://github.com/CraveFood/farmblocks/commit/60ea799))


### BREAKING CHANGES

* **exports:** this package no longer exports a "newProps" propTypes dictionary, check the source for the new
export name
* **link:** previous versions wrapped the onclick event in a function that had event.stopPropagation, on this
version, onClick is forwarded to the a tag as is




<a name="1.1.4"></a>
## [1.1.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-link@1.1.3...@crave/farmblocks-link@1.1.4) (2017-12-08)




**Note:** Version bump only for package @crave/farmblocks-link

<a name="1.1.3"></a>
## [1.1.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-link@1.1.2...@crave/farmblocks-link@1.1.3) (2017-12-07)




**Note:** Version bump only for package @crave/farmblocks-link

<a name="1.1.2"></a>
## [1.1.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-link@1.1.1...@crave/farmblocks-link@1.1.2) (2017-12-07)




**Note:** Version bump only for package @crave/farmblocks-link

<a name="1.1.1"></a>
## [1.1.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-link@1.1.0...@crave/farmblocks-link@1.1.1) (2017-12-07)




**Note:** Version bump only for package @crave/farmblocks-link

<a name="1.1.0"></a>
# 1.1.0 (2017-12-05)


### Bug Fixes

* **link:** remove href value as required ([b9120e0](https://github.com/CraveFood/farmblocks/commit/b9120e0))


### Features

* **link:** add onClick function to links ([baa98bd](https://github.com/CraveFood/farmblocks/commit/baa98bd))
* **link:** initial link component ([ae1c41c](https://github.com/CraveFood/farmblocks/commit/ae1c41c))
* **Storybook:** initial files ([e455309](https://github.com/CraveFood/farmblocks/commit/e455309))
* **tooltipText:** add a property to pass a tooltip text instead of a hardcoded one ([4a76f8a](https://github.com/CraveFood/farmblocks/commit/4a76f8a))
