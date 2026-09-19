# Alejandro Gómez Escobar · Portfolio

An interactive, multilingual portfolio built with a cyberpunk aesthetic. It features two complementary ways to explore my profile: contact information, projects, technical skills, and personal experience.

[View the live portfolio](https://agomesc1503.github.io/Portfolio/) · [LinkedIn](https://www.linkedin.com/in/agomesc1503) · [GitHub](https://www.github.com/agomesc1503)

## About the project

I am a Computer Engineering student who enjoys creating interactive and unique digital experiences. This portfolio translates that idea into an interface with two complementary ways to explore the content:

- **Hologram UI** — navigate between floating glassmorphism panels in a cyberpunk environment.
- **Terminal UI** — read the same content through a classic, command-line interface.

The site is fully available in Spanish and English, allowing users to switch languages instantly without reloading the page.

## Highlights

- **Dual Interface:** Switch seamlessly between a futuristic UI and a retro terminal mode.
- **Bilingual Content:** Full Spanish and English support managed through a central dictionary.
- **Smooth Navigation:** Single-page scroll layout with a fixed sidebar navigation.
- **Responsive Design:** Adapts to different screen sizes and devices.
- **Cyberpunk Aesthetic:** Custom CSS animations, neon glows, and interactive hover effects.

## Built with

| Area | Technology |
| :--- | :--- |
| **UI** | React, JSX, CSS3 |
| **Build** | Vite |
| **Icons** | Lucide React |
| **Hosting** | GitHub Pages |

## Run locally

You will need Node.js and npm installed on your machine.

```bash
git clone https://github.com/agomesc1503/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open the local address shown by Vite (usually `http://localhost:5173/`).

## Available commands

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production build in the `dist/` folder |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
├── components/
│   ├── BootSequence.jsx  # Initial hacker-style loading animation
│   ├── CyberpunkOS.jsx   # Main holographic UI and scrolling layout
│   └── ProTerminal.jsx   # Command-line interface alternative view
├── i18n.js               # Centralized dictionary for Spanish and English text
├── App.jsx               # Application shell and state management (Theme & Lang)
├── index.css             # Visual system, neon effects, and layout
└── main.jsx              # React entry point
public/                   # Static assets (profile image, favicons)
```

## Editing the portfolio

Most updates are simple data changes rather than component changes:

- **Edit texts and projects:** Open `src/i18n.js` to modify the Spanish (`es`) and English (`en`) content.
- **Add new projects:** Add a new object to the `list` array inside the `projects` section in `src/i18n.js`.
- **Change the profile photo:** Replace `public/profile.jpeg` with your own image, keeping the exact same filename.
- **Customize styles:** Edit `src/index.css` to tweak neon colors (`--neon-cyan`, `--neon-magenta`) or backgrounds.

## Deployment

To deploy to GitHub Pages, you must generate a production build and push the `dist/` folder, or use GitHub Actions. 

If you fork the project or rename the repository, remember to update the production `base` path in `vite.config.js` to match your repository name.

## Author

**Alejandro Gómez Escobar** — Software Engineering Student

- [LinkedIn](https://www.linkedin.com/in/agomesc1503)
- [GitHub](https://www.github.com/agomesc1503)

## License

This project is open-source and available under the MIT License.
