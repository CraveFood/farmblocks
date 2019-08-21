# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.2.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.2.2...@crave/farmblocks-table@4.2.3) (2019-08-21)

**Note:** Version bump only for package @crave/farmblocks-table





## [4.2.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.2.1...@crave/farmblocks-table@4.2.2) (2019-07-19)

**Note:** Version bump only for package @crave/farmblocks-table





## [4.2.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.2.0...@crave/farmblocks-table@4.2.1) (2019-07-18)

**Note:** Version bump only for package @crave/farmblocks-table





# [4.2.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.1.1...@crave/farmblocks-table@4.2.0) (2019-07-17)


### Bug Fixes

* **Table:** overlaping borders when using colSpan ([880c75d](https://github.com/CraveFood/farmblocks/commit/880c75d))
* **Table:** transparent border not working with colspan ([3a9ed0f](https://github.com/CraveFood/farmblocks/commit/3a9ed0f))


### Features

* **Table:** add renderExtraChildRows prop ([a9127de](https://github.com/CraveFood/farmblocks/commit/a9127de)), closes [#834](https://github.com/CraveFood/farmblocks/issues/834)
* **Table:** change hover highlight color ([d95e5fa](https://github.com/CraveFood/farmblocks/commit/d95e5fa))





## [4.1.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.1.0...@crave/farmblocks-table@4.1.1) (2019-07-09)


### Bug Fixes

* use fontWeight instead of title property on Text ([e87f9da](https://github.com/CraveFood/farmblocks/commit/e87f9da))





# [4.1.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.0.2...@crave/farmblocks-table@4.1.0) (2019-06-25)


### Features

* **Text/fontWeight:** Apply new Text props ([3c69ac7](https://github.com/CraveFood/farmblocks/commit/3c69ac7))





## [4.0.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.0.1...@crave/farmblocks-table@4.0.2) (2019-06-11)

**Note:** Version bump only for package @crave/farmblocks-table





## [4.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@4.0.0...@crave/farmblocks-table@4.0.1) (2019-05-31)

**Note:** Version bump only for package @crave/farmblocks-table





# [4.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.5.0...@crave/farmblocks-table@4.0.0) (2019-05-17)


### Features

* **Table:** allow injection of props in Columns with customCell ([fed15d2](https://github.com/CraveFood/farmblocks/commit/fed15d2))


### BREAKING CHANGES

* **Table:** - customCell now sends a single object with the extra params instead of multiple params
  Previous usage: customCell={(row, rowIndex, selected, grouped) => ...
  New usage: customCell={(row, {rowIndex, selected, grouped}) => ...
- If the customCell function return a falsy value, the cell won't be
rendered at all instead of rendering an empty cell as before





# [3.5.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.4.1...@crave/farmblocks-table@3.5.0) (2019-04-25)


### Features

* **table:** make it extendable by styled() ([493000f](https://github.com/CraveFood/farmblocks/commit/493000f))





## [3.4.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.4.0...@crave/farmblocks-table@3.4.1) (2019-04-03)

**Note:** Version bump only for package @crave/farmblocks-table





# [3.4.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.3.3...@crave/farmblocks-table@3.4.0) (2019-03-26)


### Features

* **Table:** check added rows when previous were all checked ([2b4810a](https://github.com/CraveFood/farmblocks/commit/2b4810a))
* **Table:** increase row selection checkbox hit area ([90b5817](https://github.com/CraveFood/farmblocks/commit/90b5817))
* **Table:** pass allChecked bool to selectionHeader rander prop ([a2a3925](https://github.com/CraveFood/farmblocks/commit/a2a3925))





## [3.3.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.3.2...@crave/farmblocks-table@3.3.3) (2019-03-21)

**Note:** Version bump only for package @crave/farmblocks-table





## [3.3.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.3.1...@crave/farmblocks-table@3.3.2) (2019-03-21)

**Note:** Version bump only for package @crave/farmblocks-table





## [3.3.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.3.0...@crave/farmblocks-table@3.3.1) (2019-03-19)

**Note:** Version bump only for package @crave/farmblocks-table





# [3.3.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.2.1...@crave/farmblocks-table@3.3.0) (2019-03-08)


### Features

* **table:** update polished dependency ([09d636c](https://github.com/CraveFood/farmblocks/commit/09d636c))





## [3.2.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.2.0...@crave/farmblocks-table@3.2.1) (2019-03-07)


### Bug Fixes

* **Table:** lint ([0c5ff67](https://github.com/CraveFood/farmblocks/commit/0c5ff67))





# [3.2.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.1.2...@crave/farmblocks-table@3.2.0) (2019-02-18)


### Features

* **package.json:** update react and related packages ([b34fbee](https://github.com/CraveFood/farmblocks/commit/b34fbee)), closes [#693](https://github.com/CraveFood/farmblocks/issues/693)





## [3.1.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.1.1...@crave/farmblocks-table@3.1.2) (2019-02-13)

**Note:** Version bump only for package @crave/farmblocks-table





## [3.1.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.1.0...@crave/farmblocks-table@3.1.1) (2019-01-29)

**Note:** Version bump only for package @crave/farmblocks-table





# [3.1.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.10...@crave/farmblocks-table@3.1.0) (2019-01-14)


### Features

* updated all dependencies to their latest versions ([908663c](https://github.com/CraveFood/farmblocks/commit/908663c)), closes [#667](https://github.com/CraveFood/farmblocks/issues/667)





<a name="3.0.10"></a>
## [3.0.10](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.9...@crave/farmblocks-table@3.0.10) (2019-01-03)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.9"></a>
## [3.0.9](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.8...@crave/farmblocks-table@3.0.9) (2018-12-17)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.8"></a>
## [3.0.8](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.7...@crave/farmblocks-table@3.0.8) (2018-12-14)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.7"></a>
## [3.0.7](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.6...@crave/farmblocks-table@3.0.7) (2018-12-12)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.6"></a>
## [3.0.6](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.5...@crave/farmblocks-table@3.0.6) (2018-12-12)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.5"></a>
## [3.0.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.4...@crave/farmblocks-table@3.0.5) (2018-11-29)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.4"></a>
## [3.0.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.3...@crave/farmblocks-table@3.0.4) (2018-11-21)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.3"></a>
## [3.0.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.2...@crave/farmblocks-table@3.0.3) (2018-11-08)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.2"></a>
## [3.0.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.1...@crave/farmblocks-table@3.0.2) (2018-10-30)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.1"></a>
## [3.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@3.0.0...@crave/farmblocks-table@3.0.1) (2018-10-30)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="3.0.0"></a>
# [3.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.4.6...@crave/farmblocks-table@3.0.0) (2018-10-29)


### Features

* **package.json:** upgrade styled-components to v4 ([b5c195a](https://github.com/CraveFood/farmblocks/commit/b5c195a)), closes [#592](https://github.com/CraveFood/farmblocks/issues/592)
* **update styled-components:** update peer dependency for all packages ([ae80edf](https://github.com/CraveFood/farmblocks/commit/ae80edf))


### BREAKING CHANGES

* **update styled-components:** Requires React ^v16.6.0




<a name="2.4.6"></a>
## [2.4.6](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.4.5...@crave/farmblocks-table@2.4.6) (2018-10-26)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.4.5"></a>
## [2.4.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.4.4...@crave/farmblocks-table@2.4.5) (2018-10-26)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.4.4"></a>
## [2.4.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.4.3...@crave/farmblocks-table@2.4.4) (2018-10-23)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.4.3"></a>
## [2.4.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.4.2...@crave/farmblocks-table@2.4.3) (2018-10-23)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.4.2"></a>
## [2.4.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.4.1...@crave/farmblocks-table@2.4.2) (2018-10-19)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.4.1"></a>
## [2.4.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.4.0...@crave/farmblocks-table@2.4.1) (2018-10-17)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.4.0"></a>
# [2.4.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.11...@crave/farmblocks-table@2.4.0) (2018-10-15)


### Bug Fixes

* **Table.Column:** set propType of align to any string ([c703195](https://github.com/CraveFood/farmblocks/commit/c703195))


### Features

* **Table:** add top and bottom padding for cells ([6a45b5d](https://github.com/CraveFood/farmblocks/commit/6a45b5d))
* **Table.Column:** add whiteSpace prop ([bbc6961](https://github.com/CraveFood/farmblocks/commit/bbc6961))




<a name="2.3.11"></a>
## [2.3.11](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.10...@crave/farmblocks-table@2.3.11) (2018-09-27)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.10"></a>
## [2.3.10](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.9...@crave/farmblocks-table@2.3.10) (2018-09-26)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.9"></a>
## [2.3.9](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.8...@crave/farmblocks-table@2.3.9) (2018-09-25)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.8"></a>
## [2.3.8](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.7...@crave/farmblocks-table@2.3.8) (2018-09-24)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.7"></a>
## [2.3.7](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.6...@crave/farmblocks-table@2.3.7) (2018-09-20)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.6"></a>
## [2.3.6](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.5...@crave/farmblocks-table@2.3.6) (2018-09-20)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.5"></a>
## [2.3.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.4...@crave/farmblocks-table@2.3.5) (2018-09-19)


### Bug Fixes

* updated styled-components to 3.4.9 peer-dependency on all packages ([c648df4](https://github.com/CraveFood/farmblocks/commit/c648df4))




<a name="2.3.4"></a>
## [2.3.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.3...@crave/farmblocks-table@2.3.4) (2018-09-18)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.3"></a>
## [2.3.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.2...@crave/farmblocks-table@2.3.3) (2018-09-18)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.2"></a>
## [2.3.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.1...@crave/farmblocks-table@2.3.2) (2018-09-17)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.1"></a>
## [2.3.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.3.0...@crave/farmblocks-table@2.3.1) (2018-09-14)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.3.0"></a>
# [2.3.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.2.0...@crave/farmblocks-table@2.3.0) (2018-08-17)


### Features

* **table:** pass grouped to customCell ([ac546ef](https://github.com/CraveFood/farmblocks/commit/ac546ef)), closes [#499](https://github.com/CraveFood/farmblocks/issues/499)




<a name="2.2.0"></a>
# [2.2.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.1.2...@crave/farmblocks-table@2.2.0) (2018-08-17)


### Features

* **table:** pass full row to parents of row groups ([127dd9b](https://github.com/CraveFood/farmblocks/commit/127dd9b)), closes [#496](https://github.com/CraveFood/farmblocks/issues/496)




<a name="2.1.2"></a>
## [2.1.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.1.1...@crave/farmblocks-table@2.1.2) (2018-08-16)


### Bug Fixes

* **Table:** fix horizontal align of button on expandable rows ([64f482c](https://github.com/CraveFood/farmblocks/commit/64f482c))
* **Table:** fix vertical align of corner icon ([1c3fe2c](https://github.com/CraveFood/farmblocks/commit/1c3fe2c)), closes [#495](https://github.com/CraveFood/farmblocks/issues/495)




<a name="2.1.1"></a>
## [2.1.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.1.0...@crave/farmblocks-table@2.1.1) (2018-08-14)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.1.0"></a>
# [2.1.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.0.3...@crave/farmblocks-table@2.1.0) (2018-08-14)


### Bug Fixes

* **Table:** check if checkbox ref is present before calling contains ([7e68533](https://github.com/CraveFood/farmblocks/commit/7e68533))


### Features

* **Table:** added onRowClick property ([04bf579](https://github.com/CraveFood/farmblocks/commit/04bf579))
* **Table:** expand/collapse rows on line click when onRowClick is present ([f28a2de](https://github.com/CraveFood/farmblocks/commit/f28a2de))




<a name="2.0.3"></a>
## [2.0.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.0.2...@crave/farmblocks-table@2.0.3) (2018-08-13)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.0.2"></a>
## [2.0.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.0.1...@crave/farmblocks-table@2.0.2) (2018-08-09)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.0.1"></a>
## [2.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@2.0.0...@crave/farmblocks-table@2.0.1) (2018-08-08)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="2.0.0"></a>
# [2.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.7...@crave/farmblocks-table@2.0.0) (2018-08-03)


### Code Refactoring

* **table:** render SelectionBar actions from children ([0f6ce18](https://github.com/CraveFood/farmblocks/commit/0f6ce18)), closes [#462](https://github.com/CraveFood/farmblocks/issues/462)


### BREAKING CHANGES

* **table:** SelectionBar now can receive children to render the actions.
Primary and Secondary action props are not available anymore.




<a name="1.4.7"></a>
## [1.4.7](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.6...@crave/farmblocks-table@1.4.7) (2018-08-01)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.4.6"></a>
## [1.4.6](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.5...@crave/farmblocks-table@1.4.6) (2018-08-01)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.4.5"></a>
## [1.4.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.4...@crave/farmblocks-table@1.4.5) (2018-07-26)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.4.4"></a>
## [1.4.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.3...@crave/farmblocks-table@1.4.4) (2018-07-20)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.4.3"></a>
## [1.4.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.2...@crave/farmblocks-table@1.4.3) (2018-07-09)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.4.2"></a>
## [1.4.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.1...@crave/farmblocks-table@1.4.2) (2018-07-05)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.4.1"></a>
## [1.4.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.4.0...@crave/farmblocks-table@1.4.1) (2018-06-22)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.4.0"></a>
# [1.4.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.3.5...@crave/farmblocks-table@1.4.0) (2018-06-18)


### Bug Fixes

* **table:** fix row selection and select/unselect all for tables with row groups ([d0391d5](https://github.com/CraveFood/farmblocks/commit/d0391d5))
* **table:** update rowsMap after prop data update ([197d577](https://github.com/CraveFood/farmblocks/commit/197d577))


### Features

* **table:** change arrow icon from down to up when user expand a group ([d9632ba](https://github.com/CraveFood/farmblocks/commit/d9632ba))
* **table:** change selection background color and add different backgroud for grouped rows ([c37e2a9](https://github.com/CraveFood/farmblocks/commit/c37e2a9))
* **table:** implement expandable groups and row buttons ([48b5cd8](https://github.com/CraveFood/farmblocks/commit/48b5cd8))
* **table:** include blue corner icon after checkbox on grouped rows ([8ac57dd](https://github.com/CraveFood/farmblocks/commit/8ac57dd))
* **table:** new property for describing which groups to ungroup ([3bff390](https://github.com/CraveFood/farmblocks/commit/3bff390))
* **table:** render nested rows with a parent row ([d2ad874](https://github.com/CraveFood/farmblocks/commit/d2ad874))




<a name="1.3.5"></a>
## [1.3.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.3.4...@crave/farmblocks-table@1.3.5) (2018-06-12)


### Bug Fixes

* **stories:** the second argument of storiesOf shouldnt be a string ([ea2bbee](https://github.com/CraveFood/farmblocks/commit/ea2bbee))




<a name="1.3.4"></a>
## [1.3.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.3.3...@crave/farmblocks-table@1.3.4) (2018-06-08)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.3.3"></a>
## [1.3.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.3.1...@crave/farmblocks-table@1.3.3) (2018-05-23)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.3.2"></a>
## [1.3.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.3.1...@crave/farmblocks-table@1.3.2) (2018-05-22)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.3.1"></a>
## [1.3.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.3.0...@crave/farmblocks-table@1.3.1) (2018-05-10)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.3.0"></a>
# [1.3.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.10...@crave/farmblocks-table@1.3.0) (2018-05-10)


### Features

* **Table/Column:** add light option ([40c8517](https://github.com/CraveFood/farmblocks/commit/40c8517)), closes [#344](https://github.com/CraveFood/farmblocks/issues/344)




<a name="1.2.10"></a>
## [1.2.10](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.9...@crave/farmblocks-table@1.2.10) (2018-04-17)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.9"></a>
## [1.2.9](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.8...@crave/farmblocks-table@1.2.9) (2018-04-11)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.8"></a>
## [1.2.8](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.7...@crave/farmblocks-table@1.2.8) (2018-04-10)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.7"></a>
## [1.2.7](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.6...@crave/farmblocks-table@1.2.7) (2018-04-09)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.6"></a>
## [1.2.6](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.5...@crave/farmblocks-table@1.2.6) (2018-04-05)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.5"></a>
## [1.2.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.4...@crave/farmblocks-table@1.2.5) (2018-04-04)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.4"></a>
## [1.2.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.3...@crave/farmblocks-table@1.2.4) (2018-03-23)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.3"></a>
## [1.2.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.2...@crave/farmblocks-table@1.2.3) (2018-03-15)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.2"></a>
## [1.2.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.1...@crave/farmblocks-table@1.2.2) (2018-03-14)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.1"></a>
## [1.2.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.2.0...@crave/farmblocks-table@1.2.1) (2018-03-13)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.2.0"></a>
# [1.2.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.10...@crave/farmblocks-table@1.2.0) (2018-03-08)


### Features

* **Table:** add borderless property to Table component ([69da4aa](https://github.com/CraveFood/farmblocks/commit/69da4aa))




<a name="1.1.10"></a>
## [1.1.10](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.9...@crave/farmblocks-table@1.1.10) (2018-03-07)


### Bug Fixes

* **table-children:** support for empty / null / false childs inside Table component ([0ed58d0](https://github.com/CraveFood/farmblocks/commit/0ed58d0))




<a name="1.1.9"></a>
## [1.1.9](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.8...@crave/farmblocks-table@1.1.9) (2018-03-01)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.8"></a>
## [1.1.8](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.7...@crave/farmblocks-table@1.1.8) (2018-03-01)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.7"></a>
## [1.1.7](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.6...@crave/farmblocks-table@1.1.7) (2018-02-28)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.6"></a>
## [1.1.6](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.5...@crave/farmblocks-table@1.1.6) (2018-02-19)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.5"></a>
## [1.1.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.4...@crave/farmblocks-table@1.1.5) (2018-02-15)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.4"></a>
## [1.1.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.3...@crave/farmblocks-table@1.1.4) (2018-02-14)


### Bug Fixes

* **checkbox dependants:** change the format of the import ([ee6eaf4](https://github.com/CraveFood/farmblocks/commit/ee6eaf4))




<a name="1.1.3"></a>
## [1.1.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.2...@crave/farmblocks-table@1.1.3) (2018-02-09)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.2"></a>
## [1.1.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.1...@crave/farmblocks-table@1.1.2) (2018-02-08)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.1"></a>
## [1.1.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.1.0...@crave/farmblocks-table@1.1.1) (2018-02-07)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.1.0"></a>
# [1.1.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.0.1...@crave/farmblocks-table@1.1.0) (2018-02-05)


### Features

* **css-transition:** add transition to table selection bar ([f16807a](https://github.com/CraveFood/farmblocks/commit/f16807a))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-table@1.0.0...@crave/farmblocks-table@1.0.1) (2018-01-29)




**Note:** Version bump only for package @crave/farmblocks-table

<a name="1.0.0"></a>
# 1.0.0 (2018-01-26)


*  ([d2daa25](https://github.com/CraveFood/farmblocks/commit/d2daa25))


### Bug Fixes

* **checkbox:** fix alignment on Firefox ([860bb36](https://github.com/CraveFood/farmblocks/commit/860bb36))
* **test:** minor text change ([2d26c6b](https://github.com/CraveFood/farmblocks/commit/2d26c6b))


### Features

* **api:** stories with the desired api and initial basic implementation ([bb0c989](https://github.com/CraveFood/farmblocks/commit/bb0c989))
* **cell render:** support for 2 types of text cell renderers ([41dc255](https://github.com/CraveFood/farmblocks/commit/41dc255))
* **custom cells:** include more metadata about the row: index and selected state ([6cdf0c8](https://github.com/CraveFood/farmblocks/commit/6cdf0c8))
* **headers:** accept columns with no title ([738c27a](https://github.com/CraveFood/farmblocks/commit/738c27a))
* **headers:** suport for clickable column titles ([7157aa2](https://github.com/CraveFood/farmblocks/commit/7157aa2))
* **headers:** support for custom column headers ([7924bd4](https://github.com/CraveFood/farmblocks/commit/7924bd4))
* **package:** initial skeleton ([b64d609](https://github.com/CraveFood/farmblocks/commit/b64d609))
* **selectable rows:** basic support for selecting rows ([c166f6d](https://github.com/CraveFood/farmblocks/commit/c166f6d))
* **selectionbar:** add a property on the table to allow the plugging of an action header ([13c859a](https://github.com/CraveFood/farmblocks/commit/13c859a))
* **styling:** basic styles for the table and it's cells ([646bf71](https://github.com/CraveFood/farmblocks/commit/646bf71))
* **table:** support for custom table width ([382c611](https://github.com/CraveFood/farmblocks/commit/382c611))


### BREAKING CHANGES

* moved align and width column option to outside of the old options object
* **cell render:** this drops the initial cell property of columns in favor of text for simple text cells or customCell
for custom cell renderers
