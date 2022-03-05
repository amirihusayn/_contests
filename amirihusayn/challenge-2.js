let dataset = [];
let searchIndex = 0;
let result = "";

function perform(input) {
    const commandStirng = input.split('\n');
    commandStirng.forEach( command => {
        let anchor =  command.split(' ')[0];
        if(anchor == "Add")
            add(command);
        if (anchor == "Find")
            find(command);
    }); 
}

function add(command) {
    const idIndex = command.split(' ').length - 1;
    const id = command.split(' ')[idIndex];
    const newUser = command.replace("Add ", "");
    dataset.push(newUser);
    result += "User " + id + " added successfully\n";
}

function find(command) {
    found = false;
    searchIndex += 1;
    const idIndex = dataset[0].split(' ').length - 1;
    const targetUserId = command.replace("Find ", "");
    dataset.forEach((user, id) => {
        id = user.split(' ')[idIndex];
        if(id == targetUserId) {
            result += "" + searchIndex + user + "\n";
            found = true;
        }
    });

    if(!found) {
        let idArray = [];
        dataset.forEach(user => {
            idArray.push(user.split(' ')[idIndex]);
        });
        for (let index = 0; index < idArray.length; index++) {
            if(idArray[index].startsWith(targetUserId)) {
                result += "" + searchIndex + " " + dataset[index] + "\n";
                found = true;
            }
        }
    }

    if(!found) {
        result += "" + searchIndex + " No user found" + "\n";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on( 'line', input => {
    perform(input);
    console.log(result);
});

readline.on( 'close', () => {
    process.exit(0);
});

// Inputs
// Add Ali male 20 ali20ali
// Add Mohammad male 21 mohammadm
// Add Akbar male 30 akbar30
// Find ali
// Add Maryam female 20 maryam20
// Find mohammad21
// Add Mahtab female 13 mahtab13
// Add Maziar male 40 maziarAk
// Find ma


// Outputs
// User ali20ali added successfully
// User mohammadm added successfully
// User akbar30 added successfully
// 1 Ali male 20 ali20ali
// User maryam20 added successfully
// 2 No user found
// User mahtab13 added successfully
// User maziarAk added successfully
// 3 Mahtab female 13 mahtab13
// 3 Maryam female 20 maryam20
// 3 Maziar male 40 maziarAk