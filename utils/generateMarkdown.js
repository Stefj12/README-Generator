// function to generate markdown for README
function generateMarkdown(data) {
  // code to display license the license badge, selected by key
  var badges = {
    MIT: "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)",
    GPLv3: "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)",
    Apache: "[![Apache license](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)"
  }
  
  return `# ${data.title}
${badges[data.license]}
## Description
${data.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.install}
\`\`\` 
## Usage
${data.usage}
## License
${badges[data.license]} \n
This application is covered by the ${data.license} license.
## Contributing
${data.contributing}
## Tests
\`\`\`
${data.test}
\`\`\` 
## Questions
Find all of my repos at ${data.username}. \n
Please email me at ${data.email} with any questions.
`;
}

module.exports = {
  generateMarkdown
};
