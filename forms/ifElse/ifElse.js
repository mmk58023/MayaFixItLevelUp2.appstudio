// The following let statements create prompts for the user to enter information
let userName = prompt('What is your first name?')
let userState = prompt('What state are you currently in? \n Ex. NE, FL, WA')
let userTemp = prompt('What is the temperature outside in Fahrenheit? \n Ex. 30, 50, 70')

// The following let statement creates an array that stores messages the user will see given a certain condition
let userMessage = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too.", "it's beautiful outside!"]

// The following if statement assigns conditions under which specific messages will appear from the array
if (userState.toUpperCase() === 'NE' && userTemp <= 32) {
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[0]}`)
} else if (userState.toUpperCase() === 'NE' && userTemp > 32 && userTemp <= 50) {
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[1]}`)
} else if (userState.toUpperCase() === 'FL' && userTemp > 32 && userTemp <= 50) {
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[2]}`)
} else if (userState.toUpperCase() === 'FL' && userTemp > 50 && userTemp <= 70) {
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[3]}`)
} else {
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[4]}`)
}
