// packages included for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

//array of questions for user input
const questions = [
    'Enter the title of your project:',
    'Enter a brief description of your project (can include: what problem does it solve, and what was your motivation):',
    'Insert a link to your live application (if not applicaple, leave blank): ',
    'Insert a folder path(from project file structure) of a screenshot of the application:',  
    'Enter the name of your repository:',
    'Provide instructions for installing your repository:',
    'Provide instruction and examples for using the project:',
    'If relevant, enter the GitHub profile links of any collaborators you worked with (if not applicaple, leave blank):',
    'If relevant, enter any third-party assets that require attribution. List the creators with links to their primary web presence (if not applicaple, leave blank):',
    'If relevant, list all tutorials you used to help you create this project (if not applicaple, leave blank):',
    'Enter additional information about testing the project if you can (if not applicaple, leave blank):',
    'Enter the type of license you used:',
    'Enter your email address:',
    'Enter your GitHub username:',
];
const [
    title, 
    description, 
    link, 
    imagePath, 
    repoName,
    installation, 
    usage, 
    collaborators, 
    thirdPartyAssets, 
    tutorials,
    test,
    license,
    email,
    gitHubUserName,
] = questions;

var markDown;
// function init() initializes the application
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'titleInput',
            message: title
        },
        {
            type: 'input',
            name: 'descriptionInput',
            message: description
        },
        {
            type: 'input',
            name: 'linkInput',
            message: link
        },
        {
            type: 'input',
            name: 'imagePathInput',
            message: imagePath
        },
        {
            type: 'input',
            name: 'repoNameInput',
            message: repoName
        },
        {
            type: 'input',
            name: 'installationInput',
            message: installation
        },
        {
            type: 'input',
            name: 'usageInput',
            message: usage
        },
        {
            type: 'input',
            name: 'collaboratorsInput',
            message: collaborators
        },
        {
            type: 'input',
            name: 'thirdPartyAssetsInput',
            message: thirdPartyAssets
        },
        {
            type: 'input',
            name: 'tutorialsInput',
            message: tutorials
        },
        {
            type: 'input',
            name: 'testInput',
            message: test
        },
        {
            type: 'list',
            name: 'licenseInput',
            message: license,
            choices: ['MIT', 'Apache', 'BSD 3-clause', 'GPLv2', 'GPLv3', 'Other']
        },
        {
            type: 'input',
            name: 'emailInput',
            message: email
        },
        {
            type: 'input',
            name: 'gitHubUserNameInput',
            message: gitHubUserName
        },
    ])
    .then((data) => {
        markDown = generateMarkdown.createmarkDown(data)
        writeToFile('README.md', markDown);
    })
}

// writeToFile function writes the README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err)
            console.log(err);
        else {
            console.log('README.md file written successfully');
        }
    })
}
init();