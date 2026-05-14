# CursiveStudio Pro: Classroom Edition ✏️

CursiveStudio Pro is a specialized web application designed for educators to create high-quality, printable cursive practice worksheets. Unlike generic text generators, this tool uses a mathematically aligned grid system to ensure handwriting rests perfectly on primary-ruled lines.

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Key Features

- **Indestructible Row Logic**: Uses a custom CSS "Smart Row" system. The lines are physically bound to the text container, preventing drifting when font sizes change.
- **Precision Alignment**: A dedicated "Baseline Nudge" slider allows teachers to seat different cursive fonts perfectly on the bottom dark-blue rule.
- **Classroom Ready**: Includes a "Lesson Title" header, "Name" line, and the ability to generate extra empty practice rows for students.
- **Print-to-Paper Accuracy**: Hard-coded CSS print media queries lock the worksheet to standard 8.5" x 11" Letter paper with 100% scale accuracy.
- **Multi-Font Support**: Switch between solid and dashed cursive styles (Learning Curve & School Script).

## 🛠️ Technical Evolution & Troubleshooting

This project evolved through several technical challenges:

1.  **The Drift Problem**: Early versions used global background repeats which didn't sync with text scaling. 
    * *Solution*: Implemented a component-based row system where each line of text is its own box with its own borders.
2.  **Ghosting Midlines**: Mid-line dots often "ghosted" into solid bars.
    * *Solution*: Constrained the `repeating-linear-gradient` to a fixed 1px height with `repeat-x` only.
3.  **Print Scaling**: Browsers often "Zoom to Fit" printable areas.
    * *Solution*: Forced `size: letter` and specific inch-based dimensions in the `@media print` CSS block.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/bbrooks37/cursive-tracer.git](https://github.com/bbrooks37/cursive-tracer.git)

2. Install dependecies 
   ```bash
   npm install
3. Start the devlopment Server:
   ```bash
   npm run dev

## 📂 Project Structure
- **/src/assets/fonts:** Contains .ttf files for cursive styles.

- **/src/App.tsx:** Core logic for text rendering and UI controls.

- **/src/index.css:** Custom print-media queries and Smart Row CSS.

### How to add this to your project:
1.  Create a new file in your project's **root folder** (the same place where `package.json` is).
2.  Name it `README.md`.
3.  Paste the code above into it.
4.  Push it to GitHub:
    ```bash
    git add README.md
    git commit -m "Add professional project documentation"
    git push
    ```
