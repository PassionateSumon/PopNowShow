// const image = document.querySelector('#image');
const username = document.querySelector('#name');
const mail = document.querySelector('#mail');
const password = document.querySelector('#password');
const date = document.querySelector('#date');
const submit = document.querySelector('#submit');
const rule1 = document.querySelector('#ruleno1');
const rule2 = document.querySelector('#ruleno2');
const rule3 = document.querySelector('#ruleno3');
const rule4 = document.querySelector('#ruleno4');
let userName, userMail, userPassword, userDob;
let r1 = 0, r2 = 0, r3 = 0, r4 = 0;
let details = [];
username.addEventListener('input', () => {
    userName = username.value;
})
mail.addEventListener('keyup', () => {
    userMail = mail.value
})
let speacialChars = ['!', '@', '#', '$', '%', '&', '?', '_'];
password.addEventListener('input', () => {
    let userpassword = password.value; //this variable is used to check rules
    userPassword = userpassword; //this variable is used to store in local
    let capCount = 0, digitCount = 0, scc = 0;
    //not rule1
    if(capCount < 2){
        rule1.style.color = 'black'
        r1 = 0;
    }
    //not rule2
    if(digitCount < 2){
        rule2.style.color = 'black'
        r2 = 0;
    }
    //not rule3
    if(scc < 1){
        rule3.style.color = 'black'
        r3 = 0;
    }
    //not rule4
    if(userpassword.length < 8){
        rule4.style.color = 'black'
        r4 = 0;
    }
    console.log(userpassword);
    for(let i = 0; i < userpassword.length; i++) {
        //CHECK RULE 1
        if(userpassword[i] >= 'A' && userpassword[i] <= 'Z'){
            capCount++;
            if(capCount >= 2){
                rule1.style.color = 'green'
                r1 = 1;
            }
        }
        //check rule 2
        if(userpassword[i] >= 0 && userpassword[i] <= 9){
            digitCount++;
            if(digitCount >= 2){
                rule2.style.color = 'green'
                r2 = 1;
            }
        }
        //check rule 3
        for(let sc of speacialChars){
            if(userpassword[i] === sc) {
                scc = 1;
                if(scc >= 1){
                    rule3.style.color = 'green';
                    r3 = 1;
                }
            }
        }
    }
    //cehck rule 4
    if(userpassword.length >= 8){
        rule4.style.color = 'green'
        r4 = 1;
    }
})
date.addEventListener('input', () => {
    userDob = date.value;
    console.log(typeof userDob);
})

window.addEventListener('change', () => {
    if(userName.length && userMail.length && r1 && r2 && r3 && r4) {
        submit.removeAttribute('disabled');
    }
})
submit.addEventListener('click', (e) => {
    e.preventDefault();
    details.push({
        "Name" : userName,
        "Mail": userMail,
        "Password": userPassword,
        "DOB": userDob
    })
    localStorage.setItem("userDetails", JSON.stringify(details)); //key ,value
})