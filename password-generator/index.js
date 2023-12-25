const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("pass-1")
let secondPass = document.getElementById("pass-2")
let randomChar = ""
let randomPass = ""

function generatePasswords() {
    for (let j=0; j<15; j++) {
        for (let i=0; i<characters.length; i++) {
            randomChar = characters[Math.floor(Math.random() * characters.length)]
        }
        randomPass += randomChar
    }
    return randomPass
}

function generate() {
    randomPass = ""
    firstPass.textContent = generatePasswords()
    randomPass = ""
    secondPass.textContent = generatePasswords()
}