// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license}
## Description
${data.description}
## Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.install}
\`\`\` 
## Usage
${data.usage}
## License
This application is covered by the ${data.license}
## Contributing
${data.contributing}
## Tests
\`\`\`
${data.test}
\`\`\` 
## Questions
Find all of my repos at ${data.username}
Feel free to email me at ${data.email} with any questions
`;
}

module.exports = {
  generateMarkdown
};
