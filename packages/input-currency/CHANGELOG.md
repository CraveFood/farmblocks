# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.0"></a>
# [1.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-input-currency@0.2.3...@crave/farmblocks-input-currency@1.0.0) (2018-11-29)


### Features

* **CurrencyInput:** set default allowNegative to false ([d4c0795](https://github.com/CraveFood/farmblocks/commit/d4c0795))
* **input-currency:** use react-number-format as the auxiliary formatting lib ([7a5060b](https://github.com/CraveFood/farmblocks/commit/7a5060b)), closes [#640](https://github.com/CraveFood/farmblocks/issues/640)


### BREAKING CHANGES

* **input-currency:** Previously we were using react-currency-input as the auxiliary formatting lib but it has a bug on
safari and the maintainer is no longer releasing new versions with bug fixes. So now we are using
react-number-format as the auxiliary lib - as consequence some properties have changed




<a name="0.2.3"></a>
## [0.2.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-input-currency@0.2.2...@crave/farmblocks-input-currency@0.2.3) (2018-11-21)




**Note:** Version bump only for package @crave/farmblocks-input-currency

<a name="0.2.2"></a>
## [0.2.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-input-currency@0.2.1...@crave/farmblocks-input-currency@0.2.2) (2018-11-08)




**Note:** Version bump only for package @crave/farmblocks-input-currency

<a name="0.2.1"></a>
## [0.2.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-input-currency@0.2.0...@crave/farmblocks-input-currency@0.2.1) (2018-11-08)


### Bug Fixes

* **input-currency:** fix typo deafaultProps -> defaultProps ([f1ca5e8](https://github.com/CraveFood/farmblocks/commit/f1ca5e8)), closes [#631](https://github.com/CraveFood/farmblocks/issues/631)




<a name="0.2.0"></a>
# 0.2.0 (2018-11-08)


### Features

* **input-currency:** compose component from input-text HOCs ([85562de](https://github.com/CraveFood/farmblocks/commit/85562de)), closes [#624](https://github.com/CraveFood/farmblocks/issues/624)
* **input-currency:** create component package ([3509b25](https://github.com/CraveFood/farmblocks/commit/3509b25))
