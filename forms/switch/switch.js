
// The following if statement assigns conditions under which specific messages will appear from the array
switch(true) {
case (userState.toUpperCase() === 'NE' && userTemp <= 32):
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[0]}`)
  break
case (userState.toUpperCase() === 'NE' && userTemp > 32 && userTemp <= 50):
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[1]}`)
  break
case (userState.toUpperCase() === 'FL' && userTemp > 32 && userTemp <= 50):
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[2]}`)
  break
case (userState.toUpperCase() === 'FL' && userTemp > 50 && userTemp <= 70):
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[3]}`)
  break;
default:
  NSB.MsgBox(`${userName.substring(0, 1).toUpperCase() + userName.substring(1)}, ${userMessage[4]}`)
  break
}
