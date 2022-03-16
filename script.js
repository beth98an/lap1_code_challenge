const result = document.querySelector('#api')
const ul = document.querySelector('#content')

result.addEventListener('submit', getResults())

async function getResults(e) {
    let resp = await fetch('http://localhost:3000/results')
    let facts = await resp.json()
    facts.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.fact
        ul.append(li)
    });
}


