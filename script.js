const result = document.querySelector('#app')
//const ul = document.getElementById('#results')

result.addEventListener('submit', getResults())

async function getResults(e) {
    let resp = await fetch('http://localhost:3000/results');
    let facts = await resp.json();
    //console.log(facts)
    //document.getElementById('results').textContent = facts;
    facts.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item.fact
        console.log(li)
        document.getElementById('#results').append(li)
    })
    //e.preventDefault()
}

// const search = document.querySelector('#search')

// // const input = document.querySelector('#inputtxt')
// let userInput = search.element['searchBar']
// console.log(userInput)

// search.addEventListener('submit', getFact())

// async function getFact(e) {
//     const url = 'http://localhost:3000/results/' + userInput
//     let resp = await fetch(url)
//     let fact = await resp.json()
//     document.getElementById('fact').textContent = fact
// }

