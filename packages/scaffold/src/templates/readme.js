const readmeTemplate = ({ fullName, shortName, description }) => `

# Farmblocks ${fullName}

${description}

## Installation

\`\`\`
npm install @crave/farmblocks-${shortName}
\`\`\`

## License

MIT
`;

module.exports = readmeTemplate;
