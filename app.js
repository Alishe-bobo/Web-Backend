
// creatoing a web server

const express = require ('express');

const app = express ();

// arrow functions

function Greet (name) {
    console.log('hello', name);
}

let GreetA = (name) =>{
    console.log('hello', name);
}
GreetA('Arrow function');
Greet ('Shed');


let persons = [{ 
    id: 1,
    first_Name: 'Chimex', 
    last_Name: 'Okere', 
    email: 'chimex@gmail.com', 
    phone_number: '+2347041042437', 
    Password: 'ChiMex@3232!', 
    confirm_password: 'ChiMex@3232!'
},
{
    id: 2,
    first_Name: 'Davis', 
    last_Name: 'Shedy', 
    email: 'alishe@gmail.com', 
    phone_number: '+2347032986425', 
    confirm_password: 'alishe@3308!',
    Password: 'alishe@3308!', 
    confirm_password: 'alishe@3308!'
},
{
    id: 3,
    first_Name: 'king', 
    last_Name: 'Doe', 
    email: 'king@gmail.com', 
    phone_number: '+2347041662437', 
    Password: 'KinG@3235!', 
    confirm_password: 'KinG@3235!'
}]

app.get('/data', (req, res) =>{
    res.send (persons);
    console.log(persons);
})

app.post ('/post', (req, res) =>{
    res.send (persons);
})

app.put ('/update', (req, res) =>{
    res.send (persons);
})

app.delete ('/delete', (req, res) =>{
    res.send (persons);
})
app.listen(3000, () =>{
    console.log('server running on port 3000'); 
})
