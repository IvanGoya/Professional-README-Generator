// renderLicenseBadge function returns a license badge based on what the user input. If there is no license, it returns an empty string 
function renderLicenseBadge(license, user, repo) {
  if (license) {
    return `![GitHub](https://img.shields.io/github/license/${user}/${repo}?style=flat-square)
`
  } else {
    return ''
  }
}
// renderLicenseSection function returns the license section of the README if the user provided one. If there is no license, it returns an empty string
  function renderLicenseSection(license, fileString) {
    if (license != 'Other') {
      fileString = fileString.concat(
  `## License
  Here is a link to my ${license} license file: [Link](./license)
  `)
      return fileString
    } else {
      fileString = fileString.concat(
        `## License
        
        Here is a link to my license file: [Link](./license)
        
        `)
            return fileString
    }
  }

// createmarkDown function generates the markdown for the README
  function createmarkDown(data) {
    let markdown = `# ${data.titleInput}
  `;
  if (data.gitHubUserNameInput && data.repoNameInput) {
    var badge = renderLicenseBadge(data.licenseInput, data.gitHubUserNameInput, data.repoNameInput)
    markdown = markdown.concat(`${badge}
    
  `)
  }
    if (data.linkInput) {
      markdown = markdown.concat(`${data.linkInput}
      
  `)    
// Table of Contents will check if the user input a certain section, and if they did, it will add a link to that section
    markdown = markdown.concat(`## Table of Contents
  `)
  
    if (data.descriptionInput) {
      markdown = markdown.concat(`[- Description](#description)
      
  `)
    }
    if (data.installationInput) {
      markdown = markdown.concat(`[- Installation](#installation)
  `)
    }
    if (data.usageInput) {
      markdown = markdown.concat(`[- Usage](#usage)
  `)
    }
    if (data.collaboratorsInput || data.thirdPartyAssetsInput || data.tutorialsInput) {
      markdown = markdown.concat(`[- Credits](#credits)
  `)
    }
    if (data.testInput) {
      markdown = markdown.concat(`[- Test](#test)
  `)
    }
    if (data.gitHubUserNameInput || data.emailInput) {
      markdown = markdown.concat(`[- Questions](#questions)
  `)
    }
    markdown = markdown.concat(`
  `)
  
    }
    if (data.descriptionInput) {
      markdown = markdown.concat(`## Description
      
  ${data.descriptionInput}
      
  `)    
    }
    if (data.installationInput) {
      markdown = markdown.concat(`## Installation
      
  ${data.installationInput}
      
  `)    
    }
    if (data.usageInput) {
      markdown = markdown.concat(`## Usage
      
  ${data.usageInput}
      
  `)    
    if (data.imagePathInput) {
      markdown = markdown.concat(`\`\`\`md
  ![alt text](${data.imagePathInput})
  \`\`\`
  `)  
      }
    }
// the following credits section will loop through incrementing nested if's to see if any of the 3 fields were inputed by the user. if so, it will display the credits header in the read me, even if only 1 was inputted
    if (data.collaboratorsInput) {
      markdown = markdown.concat(`## Credits
  Collaborators: ${data.collaboratorsInput}
  `)
      if (data.thirdPartyAssetsInput) {
        markdown = markdown.concat(`Third Party Assets: ${data.thirdPartyAssetsInput}
  `)
      }
      if (data.tutorialsInput) {
        markdown = markdown.concat(`Tutorials: ${data.tutorialsInput}
  `)
      }    
    } else if (data.thirdPartyAssetsInput) {
        markdown = markdown.concat(`## Credits
  Third Party Assets: ${data.thirdPartyAssetsInput}
  `)
      if (data.tutorialsInput) {
        markdown = markdown.concat(`Tutorials: ${data.tutorialsInput}
  `)
      }
    } else if (data.tutorialsInput) {
        markdown = markdown.concat(`## Credits
      
  Tutorials: ${data.tutorialsInput}
  `)
      }
    if (data.licenseInput) {
      markdown = renderLicenseSection(data.licenseInput, markdown)
    }
  
    if (data.testInput) {
      markdown = markdown.concat(`## Test
  ${data.testInput}
  `)
      }  
    if (data.gitHubUserNameInput || data.emailInput) {
      markdown = markdown.concat(`## Questions
  Still have any questions? Feel free to reach me using:
  `)
      if(data.gitHubUserNameInput) {
        markdown = markdown.concat(`GitHub Profile: [${data.gitHubUserNameInput}](github.com/${data.gitHubUserNameInput})
  `)
        }
      if(data.emailInput) {
         markdown = markdown.concat(`Email Address: ${data.emailInput}
  `)
        }
      }
    return markdown
  }
  
  module.exports = {createmarkDown};