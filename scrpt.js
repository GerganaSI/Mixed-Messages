let generalLuck = ['Do not be afraid of competition.', 
    'An exciting opportunity lies ahead of you.', 
    'You love peace.',
    "You should be able to undertake and complete anything.",
    "You are kind and friendly.",
    "You are wise beyond your years.",
    "Your ability to juggle many tasks will take you far.",
    "A routine task will turn into an enchanting adventure.",
    "Beware of all enterprises that require new clothes.",
    "Be true to your work, your word, and your friend.",
    ];


let funnyLuck = ['A closed mouth gathers no feet.', 
'He who throws dirt is losing ground.', 
"Borrow money from a pessimist. They don't expect it back.", 
'Life is what happens to you while you are busy making other plans.', 
"Help! I'm being held prisoner in a fortune cookie factory."];

let romanticLuck = ["Paradise is always where love dwells.", 
"The one you love is closer than you think.",
"Love is like wildflowers…it is often found in the most unlikely places.",
"In dreams and in love there are no impossibilities.",
"Love isn't something you find. Love is something that finds you.",
"True love is not something that comes everyday, follow your heart, it knows the right answer"];

const generalLuckMessage = (arr) => {
    let randomNumber = Math.floor(Math.random() * arr.length);
    return `Your luck for the day is: ${arr[randomNumber]}`
}

const romanticLuckMessage = (arr) => {
    let randomNumber = Math.floor(Math.random() * arr.length);
    return `Feeling romantic?: ${arr[randomNumber]}`
}

console.log(generalLuckMessage(generalLuck));
console.log(romanticLuckMessage(romanticLuck));
