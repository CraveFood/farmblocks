# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-modal@2.0.1...@crave/farmblocks-modal@2.0.2) (2019-07-18)

**Note:** Version bump only for package @crave/farmblocks-modal





## [2.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-modal@2.0.0...@crave/farmblocks-modal@2.0.1) (2019-07-17)

**Note:** Version bump only for package @crave/farmblocks-modal





# [2.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-modal@1.0.0...@crave/farmblocks-modal@2.0.0) (2019-07-17)


### Features

* **Modal:** Add footer section that will be used primarily to actions ([382cb7c](https://github.com/CraveFood/farmblocks/commit/382cb7c))
* **Modal:** Add header prop element and replace close icon to close button ([3346470](https://github.com/CraveFood/farmblocks/commit/3346470)), closes [#824](https://github.com/CraveFood/farmblocks/issues/824)
* **Modal:** Add stories to the  new modal api changes ([399fe88](https://github.com/CraveFood/farmblocks/commit/399fe88))
* **Modal.styled:** Add Section component and set close button to absolute position ([ac3d16f](https://github.com/CraveFood/farmblocks/commit/ac3d16f))
* **README/Modal:** Update readme properties API ([66f1b49](https://github.com/CraveFood/farmblocks/commit/66f1b49))
* **stories:** Apply Modal footer to stories ([c4b1286](https://github.com/CraveFood/farmblocks/commit/c4b1286))


### BREAKING CHANGES

* **Modal:** prop changes => showCloseIcon to showCloseButton, closeProps to closeButtonProps, card padding and
border styles are disabled and for default overflow is setted to hidden.





# [1.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-modal@0.3.1...@crave/farmblocks-modal@1.0.0) (2019-07-09)


### Bug Fixes

* **lint:** cycle dependency on modal and some array indexes used as key ([b5ecaf8](https://github.com/CraveFood/farmblocks/commit/b5ecaf8))


### chore

* **Modal:** move react-spring to peer dependencies ([c67f758](https://github.com/CraveFood/farmblocks/commit/c67f758))


### BREAKING CHANGES

* **Modal:** react-spring is not a direct dependency anymore





## [0.3.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-modal@0.3.0...@crave/farmblocks-modal@0.3.1) (2019-06-25)

**Note:** Version bump only for package @crave/farmblocks-modal





# [0.3.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-modal@0.2.0...@crave/farmblocks-modal@0.3.0) (2019-06-11)


### Bug Fixes

* **modal:** scroll lock causing document.body resize when scrollbar gets hidden ([2bc3c7e](https://github.com/CraveFood/farmblocks/commit/2bc3c7e))


### Features

* **modal:** add 'openAtMount' option to 'useModal' helper ([736fd12](https://github.com/CraveFood/farmblocks/commit/736fd12))
* **modal:** add zIndex prop ([486db71](https://github.com/CraveFood/farmblocks/commit/486db71))
* **modal:** set max-width ([d26ca7a](https://github.com/CraveFood/farmblocks/commit/d26ca7a))
* **modal:** swap transition direction ([d3f4a11](https://github.com/CraveFood/farmblocks/commit/d3f4a11))





# 0.2.0 (2019-05-31)


### Bug Fixes

* **modal:** don't trigger ovelay click event when clicking in the modal content ([1886289](https://github.com/CraveFood/farmblocks/commit/1886289))
* **modal:** handle proptype warnings in stories ([1a9c534](https://github.com/CraveFood/farmblocks/commit/1a9c534))
* **modal:** rename close button to close icon ([ce06da0](https://github.com/CraveFood/farmblocks/commit/ce06da0))
* **Modal:** remove keydown event listener on unmount ([c44658b](https://github.com/CraveFood/farmblocks/commit/c44658b))


### Features

* **modal:** add close button ([dd46b81](https://github.com/CraveFood/farmblocks/commit/dd46b81))
* **modal:** add customization for the card wrapper and the close icon ([a412749](https://github.com/CraveFood/farmblocks/commit/a412749))
* **modal:** add onOpen and onClose props ([a208e77](https://github.com/CraveFood/farmblocks/commit/a208e77))
* **modal:** add transitions ([e761042](https://github.com/CraveFood/farmblocks/commit/e761042))
* **modal:** add verticalAlign prop ([77a68b7](https://github.com/CraveFood/farmblocks/commit/77a68b7))
* **modal:** close on click in overlay or ESC key press ([58170b0](https://github.com/CraveFood/farmblocks/commit/58170b0))
* **modal:** constrain modal size to viewport ([2227c0f](https://github.com/CraveFood/farmblocks/commit/2227c0f))
* **modal:** create basic components ([8e76c09](https://github.com/CraveFood/farmblocks/commit/8e76c09))
* **modal:** create component files from scaffold ([0079743](https://github.com/CraveFood/farmblocks/commit/0079743))
* **modal:** create DialogModal ([417d560](https://github.com/CraveFood/farmblocks/commit/417d560))
* **modal:** extract style and helpers into their own files ([8117750](https://github.com/CraveFood/farmblocks/commit/8117750))
* **modal:** prevent scrolling of underneath content while modal is open ([ed3328e](https://github.com/CraveFood/farmblocks/commit/ed3328e))
