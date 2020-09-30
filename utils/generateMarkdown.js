// function to generate markdown for README
function generateMarkdown(data) {
  var badges = {
    MIT: "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)",
    GPL: "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)",
    "Creative Commons": "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)"
  }
  
  return `# ${data.title}
${badges[data.license]}
## Description
${data.description}
## Table of Contents
- [Installation](#Installation)
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
