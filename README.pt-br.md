# 🔎 Buscador de Repositórios GitHub

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/API-GitHub%20Search-181717?style=for-the-badge&logo=github)

Um projeto web simples e elegante para buscar repositórios públicos no GitHub diretamente pela interface, utilizando a API oficial do GitHub. A aplicação exibe informações principais como nome do repositório, descrição, linguagem, quantidade de estrelas e link para acesso rápido.

> 🇺🇸 Esta é a versão em português do README. A versão principal em inglês está em [README.md](README.md).

## ✨ Destaques

- Busca dinâmica de repositórios por palavra-chave
- Exibição de cards com informações principais
- Integração com a API do GitHub
- Interface limpa, moderna e visualmente organizada
- Experiência simples e intuitiva para o usuário

## 🌐 Visualizar o projeto

Acesse a versão online aqui:

- [Buscador de Repositórios](https://gabsouzadev.github.io/find-repo.github.io/)

## 🧠 Funcionalidades

- Buscar repositórios por palavra-chave
- Mostrar avatar do autor do repositório
- Exibir a quantidade de estrelas
- Mostrar a linguagem principal do projeto
- Abrir o repositório diretamente no GitHub
- Exibir mensagens de estado, como carregamento e ausência de resultados

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- Fetch API
- GitHub REST API

## 📁 Estrutura do Projeto

```text
my-buscador-repo/
├── assets/
│   ├── script.js
│   └── style.css
├── index.html
├── README.md
└── README.pt-br.md
```

## ▶️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/my-buscador-repo.git
```

2. Acesse a pasta do projeto:

```bash
cd my-buscador-repo
```

3. Abra o arquivo `index.html` no navegador ou use uma extensão como Live Server no VS Code.

## 🚀 Como Funciona

A aplicação captura o termo digitado pelo usuário, envia uma requisição para a API de busca de repositórios do GitHub e renderiza os resultados em cards na tela.

### Fluxo de Uso

1. O usuário digita um termo no campo de busca.
2. O formulário é enviado.
3. A aplicação consulta a API do GitHub.
4. Os repositórios encontrados são exibidos com seus principais detalhes.

## 📸 Exemplo de Uso

Ao buscar por algo como:

```text
javascript
```

A aplicação retornará repositórios relacionados com esse tema, com informações como nome, descrição, linguagem e estrelas.

## 🌟 Melhorias Futuras

- Adicionar paginação de resultados
- Implementar filtros por linguagem
- Criar um tema escuro
- Exibir mais detalhes do repositório
- Adicionar animações de carregamento

## 🤝 Contribuição

Contribuições são bem-vindas! Se quiser melhorar este projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas alterações
4. Abra um pull request

## 📄 Licença

Este projeto ainda está em desenvolvimento e não possui uma licença formal definida.

## 👤 Autor

Projeto desenvolvido com foco em estudos de JavaScript avançado, consumo de API e construção de interfaces interativas.
