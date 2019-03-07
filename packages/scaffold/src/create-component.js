#!/usr/bin/env node

const { prompt } = require("inquirer");
const slug = require("slug");
const upperCamelCase = require("uppercamelcase");
const { mkdir, ShellString, cp, grep } = require("shelljs");

const packageContents = require("./templates/package");
const readmeContents = require("./templates/readme");
const indexContents = require("./templates/index");
const componentContents = require("./templates/component");
const storyContents = require("./templates/componentStory");

const questions = [
  {
    type: "input",
    name: "fullName",
    default: "My Component",
    message: "Component’s name",
  },
  {
    type: "input",
    name: "shortName",
    default: ({ fullName }) => slug(fullName, { lower: true }),
    message: "Component’s short name",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description",
  },
  {
    type: "input",
    name: "keywords",
    default: "farmblocks, react",
    filter: value => value.split(",").map(v => v.trim()),
    message: "Keywords",
  },
  {
    type: "input",
    name: "inactiveAuthors",
    message: "Type a pattern of AUTHORS to exclude",
  },
];

prompt(questions)
  .then(answers => {
    const packageJSON = packageContents(answers);
    const readme = readmeContents(answers);
    const { fullName, shortName } = answers;
    const componentName = upperCamelCase(fullName);
    const index = indexContents(componentName);
    const component = componentContents(componentName);
    const story = storyContents({ componentName, fullName });
    const dirName = `packages/${shortName}`;
    const inactiveAuthors = answers.inactiveAuthors
      ? new RegExp(answers.inactiveAuthors, "i")
      : null;
    mkdir("-p", `${dirName}/src`);
    ShellString(packageJSON).to(`${dirName}/package.json`);
    ShellString(readme).to(`${dirName}/README.md`);
    ShellString(index).to(`${dirName}/src/index.js`);
    ShellString(component).to(`${dirName}/src/${componentName}.js`);
    ShellString(story).to(`${dirName}/src/${componentName}.story.js`);
    cp(["AUTHORS", "LICENSE"], `${dirName}/.`);

    if (inactiveAuthors) {
      grep("-v", inactiveAuthors, `${dirName}/AUTHORS`).to(
        `${dirName}/AUTHORS`,
      );
    }
  })
  .catch(console.error); // eslint-disable-line no-console
