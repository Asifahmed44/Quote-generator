//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

let prev = 0;
let NewNum;

function generateQuote(){
    NewNum = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    // console.log("ran again")
    if((NewNum >=arrayOfQuotes.length)|| (prev == NewNum)){
       prev = NewNum;
    //    console.log('same',prev,NewNum)
       generateQuote();
       
    } else {
        console.log('success',prev,NewNum)
        prev = NewNum;
        document.querySelector('#quoteOutput').textContent = arrayOfQuotes[NewNum].quote;
        document.querySelector('#authorOutput').textContent = arrayOfQuotes[NewNum].author;
        // console.log("success")
        

    }
    
}
