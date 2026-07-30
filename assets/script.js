let formRequest = document.querySelector("#form-request")
let fieldFormRequest = document.querySelector("#consulta-api")
let buttonFormRequest = document.querySelector("#busca-api")
let alertMessage = document.querySelector("#show-message") 
let results = document.querySelector("#results")


//async simula código síncrono
async function sendRequest(text) {
    let sanitizedText = text.trim()
    clearInput()

    alertMessage.classList.remove("hide")
    alertMessage.textContent = "Buscando repositórios..."
    results.innerHTML = ""

    //await - aguarda o código finalizar para prosseguir.
    try { 
        let response = await fetch(`https://api.github.com/search/repositories?q=${sanitizedText}&sort=stars&per_page=10`)
        let data = await response.json()

        //bad path - primeiro verifica os erros e depois retorna o happy path.
        if(!response.ok) {
            throw new Error("Erro na API")
        }
        if(!data.items || data.items.length === 0) {
            alertMessage.textContent = "Nenhum repositório localizado! Tente novamente."
            return
        }

        if(response.status === 200) {
            alertMessage.classList.add("hide")
            //loop dos 10 maiores repositórios
            data.items.forEach((repo) => {
                let card = document.createElement("div") //cria o elemento card.
                card.className = "card" //card recebe as devidas estilizações.

                //insere os elementos no card.
                card.innerHTML = 
                    `
                        <div class="author-section">
                            <div class="name-author" id="name-author">${repo.owner.login}</div>
                            <div class="photo-author" >
                                <img src="${repo.owner.avatar_url}" alt="${repo.owner.login}" id="photo-author">
                            </div>
                        </div>
                        
                        <div class="repo-section">
                            <div class="repo-name" id="repo-name">${repo.name}</div>
                            <div class="description-repo" id="repo-description">${repo.description || "Sem descrição neste repositório"}</div>
                            <div class="language-repo" id="repo-language">${repo.language || "N/A"}</div>
                            <div class="stars-repo" id="repo-stars">${repo.stargazers_count} ⭐</div>
                            <div class="link-repo">
                                <a href="${repo.html_url}" target="_blank"  id="repo-link">Acessar repositório</a>
                            </div>
                        </div>
                    ` //insere os elementos do card.
                    results.appendChild(card) //renderizar na tela.

            })
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

