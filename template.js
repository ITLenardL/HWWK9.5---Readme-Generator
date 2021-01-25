const template = (answers) => {
    return `
<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiniProject</title>
</head>
<body>
    <h1>'hi my name is ${answers.name}'</h1>
    <h2>'im a developer located in ${answers.location}'</h2>
    <h3>'im ${answers.age} years old.'</h3>
    <h3>'my linked in is ${answers.linkedin} and my github is ${answers.github}</h3>
    
</body>
</html>` }

module.exports = template;