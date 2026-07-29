let formRequest = document.querySelector("#form-request")
let fieldFormRequest = document.querySelector("#consulta-api")
let buttonFormRequest = document.querySelector("#busca-api")
let card = document.querySelector("#card")

let authorName = document.querySelector("#name-author")
let authorPhoto = document.querySelector("#photo-author")
let repoName = document.querySelector("#repo-name")
let repoDesc = document.querySelector("#repo-description")
let repoStars = document.querySelector("#repo-stars")
let repoLink = document.querySelector("#repo-link")
let repoLanguage = document.querySelector("#repo-language")
let alertMessage = document.querySelector("#show-message") 

async function sendRequest(text) {
    let sanitizedText = text.trim()
    clearInput()
    console.log(sanitizedText)
    alertMessage.textContent = "Buscando repositórios..."

    try {
        let response = await fetch(`https://api.github.com/search/repositories?q=${sanitizedText}&sort=stars&per_page=1`)
        let data = await response.json()

        if(response.status === 200) {
            alertMessage.classList.add("hide")
            if(data.items[0].name) {
                //happy path
                document.querySelector("#card").classList.remove("hide")
                authorName.textContent = data.items[0].owner.login
                authorPhoto.setAttribute("src", data.items[0].owner.avatar_url)
                repoName.textContent = data.items[0].name
                if(data.items[0].description) {
                    repoDesc.textContent = data.items[0].description
                } else {
                    repoDesc.textContent = "Sem descrição neste repositório"
                }
                
                repoLanguage.innerHTML = `Projeto feito com <strong>${data.items[0].language}</strong>`
                repoStars.textContent = `${data.items[0].stargazers_count} ⭐`
                repoLink.setAttribute("href", data.items[0].html_url)
            }
            else {
                alertMessage.textContent = "Nenhum repositório encontrado! Tente novamente."  
            }
        }
        else {
            throw new Error();
        }
    } catch (error) {
        alertMessage.textContent = `Ocorreu um erro inesperado...`
        console.log(error)
        alertMessage.classList.remove("hide")
        document.querySelector("#card").classList.add("hide")
    }
    
}


function clearInput() {
    fieldFormRequest.value = ""
    fieldFormRequest.focus()
}

formRequest.addEventListener('submit', (event) => {
    event.preventDefault() // desabilita a função padrão do form.
    sendRequest(fieldFormRequest.value)

})

renderCard()