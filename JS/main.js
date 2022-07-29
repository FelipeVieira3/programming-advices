let adviceId = document.getElementById('advice-id');
let adviceText = document.getElementById('advice-text');
let button = document.getElementById('button')

const advices = [{
    id: '01',
    advice: '"Always stick to one task at a time"'
},
{
    id: '02',
    advice: '"Different people find different things easy"'

},
{
    id: '03',
    advice: '"Your Work Can Be Only 80% Complete"'
},
{
    id: '04',
    advice: '"Learn how to Google"'
},
{
    id: '05',
    advice: `"Don't be afraid to ask for help or to help people back"`
},
{
    id: '06',
    advice: '"Technology always changes"'
},
{
    id: '07',
    advice: `"It's okay not to contribute to open source"`
},
{
    id: '08',
    advice: '"Programmers fail all the time"'
},
{
    id: '09',
    advice: `"Don't give up!"`
},
{
    id: '10',
    advice: '"Have your reason, and remember it"'
},
{
    id: '11',
    advice: '"Build a solid foundation"'
}, 
{
    id: '12',
    advice: '"Find a community"'
}, 
{
    id: '13',
    advice: '"Break down problems into smaller ones"'
}, 
{
    id: '14',
    advice: '"Embrace the cycle of learning"'
}, 
{
    id: '15',
    advice: '"Start with free resources"'
}, 
{
    id: '16',
    advice: '"Find your niche"'
}, 
{
    id: '17',
    advice: '"Get good at pattern recognition"'
}, 
{
    id: '18',
    advice: '"Identify your learning style"'
}, 
{
    id: '19',
    advice: '"Struggle, but not too much"'
}, 
{
    id: '20',
    advice: '"Get comfortable with failure"'
}, 
{
    id: '21',
    advice: `"You don't need to know everything"`
},
{
    id: '22',
    advice: '"Focus on the fundamentals first"'
}, 
{
    id: '23',
    advice: 'Love your error messages'
}, 
{
    id: '24',
    advice: '"Get good at researching"'
},
{
    id: '25',
    advice: '"Build projects you love"'
},
{
    id: '26',
    advice: '"Compare yourself to only yourself"'
},
{
    id: '27',
    advice: '"Do a bunch of code challenges"'
},
{
    id: '28',
    advice: '"Celebrate your wins"'
}];

function random() {
    return Math.floor(Math.random() * advices.length)
}

button.addEventListener('click', () => {
    adviceId.textContent = advices[random()].id;
    adviceText.innerText = advices[random()].advice;
});