#!/usr/bin/env node

const { prompt } = require("inquirer");
const slug = require("slug");
const { mkdir, ShellString, cp } = require("shelljs");

const packageContents = require("./packageTemplate");
const readmeContents = require("./readmeTemplate");

const questions = [
  {
    type: "input",
    name: "fullName",
    default: "My Component",
    message: "Component’s name"
  },
  {
    type: "input",
    name: "shortName",
    default: ({ fullName }) => slug(fullName, { lower: true }),
    message: "Component’s short name"
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description"
  },
  {
    type: "input",
    name: "keywords",
    default: "farmblocks, react",
    filter: value => value.split(",").map(value => value.trim()),
    message: "Keywords"
  }
];

prompt(questions)
  .then(answers => {
    const packageJSON = packageContents(answers);
    const readme = readmeContents(answers);
    const { shortName } = answers;
    const dirName = `packages/${shortName}`;
    mkdir("-p", `${dirName}/src`);
    ShellString(packageJSON).to(`${dirName}/package.json`);
    ShellString(readme).to(`${dirName}/README.md`);
    cp(["AUTHORS", "LICENSE"], `${dirName}/.`);
  })
  .catch(console.error); // eslint-disable-line no-console
