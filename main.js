
async function getContent() {
    try {
        const response = await fetch('http://localhost:3333/')

            const data = await response.json()
            
            show(data)

    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(films) {
    let output = ''
    for(let film of films) {
        title
        output += `<li>${film}<br /></li>`
    }

    document.querySelector('main').innerHTML = title
    document.querySelector('main').innerHTML = output
}