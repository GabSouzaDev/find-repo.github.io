# 🔎 GitHub Repository Search

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/API-GitHub%20Search-181717?style=for-the-badge&logo=github)

A simple and elegant web project for searching public repositories on GitHub directly through the interface, using the official GitHub API. The application displays key information such as repository name, description, language, star count, and a direct link to access it.

> 🇧🇷 This is the main README in English. A Portuguese version is available [here](README.pt-br.md).

## ✨ Highlights

- Dynamic repository search by keyword
- Display of cards with main information
- Integration with the GitHub API
- Clean, modern, and visually organized interface
- Simple and intuitive user experience

## 🌐 Live Preview

Access the online version here:

- [Repository Search](https://gabsouzadev.github.io/find-repo.github.io/)

## 🧠 Features

- Search repositories by keyword
- Show the author avatar
- Display the number of stars
- Show the main project language
- Open the repository directly on GitHub
- Display status messages such as loading and no results found

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API
- GitHub REST API

## 📁 Project Structure

```text
my-buscador-repo/
├── assets/
│   ├── script.js
│   └── style.css
├── index.html
├── README.md
└── README.pt-br.md
```

## ▶️ How to Run

1. Clone this repository:

```bash
git clone https://github.com/seu-usuario/my-buscador-repo.git
```

2. Open the project folder:

```bash
cd my-buscador-repo
```

3. Open the file `index.html` in your browser, or use a tool like Live Server in VS Code.

## 🚀 How It Works

The application captures the term entered by the user, sends a request to the GitHub repository search API, and renders the results as cards on the screen.

### User Flow

1. The user types a search term.
2. The form is submitted.
3. The application queries the GitHub API.
4. The matching repositories are displayed with their main details.

## 📸 Example

Searching for something like:

```text
javascript
```

will return repositories related to that topic with information such as name, description, language, and stars.

## 🌟 Future Improvements

- Add pagination for results
- Implement language filters
- Create a dark theme
- Show more repository details
- Add loading animations

## 🤝 Contributing

Contributions are welcome! If you want to improve this project:

1. Fork the repository
2. Create a branch for your feature
3. Commit your changes
4. Open a pull request

## 📄 License

This project is still in development and does not yet have a formal license.

## 👤 Author

Project developed with a focus on advanced JavaScript studies, API consumption, and interactive interface building.
