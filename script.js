const appBtn = document.getElementById('app')
const ul = document.getElementById('results')

appBtn.addEventListener('click', getResults);

async function getResults(e) {
        let resp = await fetch('http://localhost:3000/results');
        let facts = await resp.json();
        facts.forEach((item) => {
            const li = document.createElement('li')
            li.textContent = item.fact
            ul.appendChild(li)
        })
    
}

const searchForm = document.getElementById('search')

searchForm.addEventListener('click', (e) => {getFact(e)})

function getFact(e) {
    const userInput = document.querySelector('#inputtxt').value
    if (userInput !== ''){
        fetch('http://localhost:3000/results/'+ userInput)
        .then(resp => resp.text())
        .then(data => document.getElementById('fact').textContent = data)
    }
    else {
        document.getElementById('fact').textContent = userInput
    }
}
