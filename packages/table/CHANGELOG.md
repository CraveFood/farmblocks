# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
