const template = (data) => {
    return `
# **${data.title}**

${data.badge}

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)


## Installation

${data.installation}

## Usage

${data.usage}

## Licence

${data.licence}

## Contributors

${data.contributing}

## Test

${data.test}


## Repository

- [Project Repo](${data.repo})`

}

module.exports = template;