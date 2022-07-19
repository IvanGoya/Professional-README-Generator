// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    'Enter the title of your project:',
    'Enter a brief description of your project (can include: what problem does it solve, and what was your motivation):',
    'Insert a link to your live application: ',
    'Insert a folder path(from project) for a screenshot of the application:',  
    'Enter the name of your repository:',
    'Provide instructions for installing your repository:',
    'Provide instruction and examples for using the project:',
    'If relevant, enter the GitHub profile links of any collaborators you worked with:',
    'If relevant, enter any third-party assets that require attribution. List the creators with links to their primary web presence:',
    'If relevant, list all tutorials you used to help you create this project:',
    'Enter additional information about testing the project if you can:',
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
    gitUser,
] = questions;

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'titleA',
            message: title
        },
        {
            type: 'input',
            name: 'descriptionA',
            message: description
        },
        {
            type: 'input',
            name: 'linkA',
            message: link
        },
        {
            type: 'input',
            name: 'imagePathA',
            message: imagePath
        },
        {
            type: 'input',
            name: 'repoNameA',
            message: repoName
        },
        {
            type: 'input',
            name: 'installationA',
            message: installation
        },
        {
            type: 'input',
            name: 'usageA',
            message: usage
        },
        {
            type: 'input',
            name: 'collaboratorsA',
            message: collaborators
        },
        {
            type: 'input',
            name: 'thirdPartyAssetsA',
            message: thirdPartyAssets
        },
        {
            type: 'input',
            name: 'tutorialsA',
            message: tutorials
        },
        {
            type: 'input',
            name: 'testA',
            message: test
        },
        {
            type: 'list',
            name: 'licenseA',
            message: license,
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Other']
        },
        {
            type: 'input',
            name: 'emailA',
            message: email
        },
        {
            type: 'input',
            name: 'gitUserA',
            message: gitUser
        },
    ])
}