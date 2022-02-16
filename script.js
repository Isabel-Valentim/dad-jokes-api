const jokeEL = document.getElementById('joke')
const jokeBTN = document.getElementById('jokeBtn')

jokeBTN.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke(){
    const config = { 
        headers: {
        'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEL.innerHTML = data.joke
}

/*
OTHER WAY
fetch('https://icanhazdadjoke.com', config).then((res) => res.json())
.then((data) => {
    jokeEL.innerHTML = data.joke
})*/