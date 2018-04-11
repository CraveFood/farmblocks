# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.2"></a>
## [1.0.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-carousel@1.0.1...@crave/farmblocks-carousel@1.0.2) (2018-04-11)




**Note:** Version bump only for package @crave/farmblocks-carousel

<a name="1.0.1"></a>
## [1.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-carousel@1.0.0...@crave/farmblocks-carousel@1.0.1) (2018-04-02)


### Bug Fixes

* **Carousel:** custom fontsize and border were not being respected ([58b0381](https://github.com/CraveFood/farmblocks/commit/58b0381))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-carousel@0.2.0...@crave/farmblocks-carousel@1.0.0) (2018-03-29)


### Bug Fixes

* **Carousel:** fix itemConfig spread default ([6c38f7f](https://github.com/CraveFood/farmblocks/commit/6c38f7f))


### Features

* **Carousel:** add scale property ([f534883](https://github.com/CraveFood/farmblocks/commit/f534883))
* **Carousel:** remove text opacity and change fontSize property type ([995c2cd](https://github.com/CraveFood/farmblocks/commit/995c2cd))
* **Carousel:** restart carousel interval when imageSet changes ([5eed3ac](https://github.com/CraveFood/farmblocks/commit/5eed3ac))


### Performance Improvements

* **Carousel:** move elements to the left using translateX instead of margin-left ([b5cb3cd](https://github.com/CraveFood/farmblocks/commit/b5cb3cd))
* **Carousel:** scale active item using transform instead of setting width and height ([6cb186f](https://github.com/CraveFood/farmblocks/commit/6cb186f))


### Reverts

* **Carousel:** swap itemConfig and defaultConfig ([cb6cd29](https://github.com/CraveFood/farmblocks/commit/cb6cd29))


### BREAKING CHANGES

* **Carousel:** fontSize property used to be a string. Now it accepts a number and passes it to the Text component




<a name="0.2.0"></a>
# 0.2.0 (2018-03-23)


### Bug Fixes

* **carousel:** address code review requests ([a99fe94](https://github.com/CraveFood/farmblocks/commit/a99fe94))


### Features

* **carousel:** add captions ([d44b69b](https://github.com/CraveFood/farmblocks/commit/d44b69b))
* **carousel:** autoplay and events for onChange and onEnd ([f408c83](https://github.com/CraveFood/farmblocks/commit/f408c83))
* **carousel:** initial files ([5233f8d](https://github.com/CraveFood/farmblocks/commit/5233f8d))
* **Carousel:** add image name on proptypes validation ([d91740f](https://github.com/CraveFood/farmblocks/commit/d91740f))
