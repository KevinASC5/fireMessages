const database = firebase.database().ref();
database.on('child_added',displayMsgOnBoard);

const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB); //click button UPDATE database

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

const userData = {
    Name:username,
    Message:message,
};


database.push(userData);
    //Update database here

}

// Set database "child_added" event listener here


function displayMsgOnBoard(rowData){
    const row = rowData.val();
    
const msgBox  = document.querySelector('.allMessages');
const newLine = document.createElement('br');
    const name = document.createTextNode(row.Name+ ':');
    const message = document.createTextNode(row.Message);
msgBox.appendChild(newLine);
msgBox.appendChild(name);
msgBox.appendChild(message);
}