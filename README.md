This project is a pixel-perfect, optimized, and reusable dashboard built using React. It includes components such as a Header, Sidebar, Table, and Cards, with functionalities like data fetching, dynamic display, and memoized components for performance. The project adheres to the requirements provided, ensuring optimized code, proper folder structure, and the use of Font Awesome icons and SVGs provided by the company.

# Features
1.Pixel-Perfect UI: Ensures the design matches the provided specifications exactly.
2.Reusable Components: The code is modular, with reusable components for easy maintenance.
3.Lazy Loading: Components like Cards are lazily loaded to improve performance.
4.Memoization: Used in critical components like Cards and Dropdown to prevent unnecessary re-renders.
5.Data Fetching: Dynamically fetches data from JSON files using fetch API.
6.Font Awesome Icons: Font Awesome 4.7.0 and custom SVGs are used for icons.
7.Hover and Shadow Effects: Improved visual experience with hover and shadow effects on components.
8.Routing: Integrated with React Router for navigation between pages

# Project Structure
The project follows a structured organization of files and components:

├── src
│   ├── assets                 # Contains images and SVG icons
│   ├── components             # Reusable components like Header, Sidebar, Table, and Card
│   ├── pages                  # Pages that represent different views (TablePage, CardsPage, etc.)
│   ├── App.jsx                 # Main application component
│   └── main.jsx               # Entry point of the app
├── public
│   ├── index.html             # Main HTML template
│   └── ...
├── package.json               # Project dependencies and scripts
├── .gitignore                 # Files and directories to ignore in git
└── README.md                  # Project documentation


# Installation and Setup
To run this project locally, follow these steps:
Prerequisites are:
Node.js (v12+)
npm or yarn

# Installation
1. Clone the repository:
git clone https://github.com/username/repo.git

2. Navigate to the project directory:
cd 42Gears-Assignment

3. Install the dependencies:
npm install

# Running the Project
Once the dependencies are installed, start the development server:
npm run dev

This will run the application in development mode. Open http://localhost:5173 to view it in the browser.

# Dependencies
React: Front-end JavaScript library for building user interfaces.
Font Awesome 4.7.0: Icon library for UI elements.
React Router: Used for page routing/navigation.
Fetch API: For fetching data from JSON files.


# Folder Structure Explanation
assets/: Contains all images and SVG icons used across the project.
components/: Contains reusable React components such as Header, Sidebar, Card, etc.
pages/: Contains page-level components such as TablePage, CardsPage, and EmailTodoPage.
public/: Holds static files, such as index.html.


# Key Concepts Used
Lazy Loading: Components are lazily loaded using React.lazy() and Suspense to optimize the app’s performance.
Memoization: React's useCallback and React.memo are used to prevent unnecessary re-renders of components like Card and DropDown.
Hover Effects: Smooth hover transitions and shadow effects provide a visually appealing UI.

# How to Use
Sidebar Navigation: The sidebar contains links to different components (Menu 1, Menu 2, and Menu 3). You can navigate between the table, card, and email components by clicking on the corresponding links.
Dynamic Data Fetching: The project fetches data from local JSON files and displays it dynamically in the Table and Card components.
Memoized Components: The Card component is memoized to avoid unnecessary re-renders, which improves the app’s performance.
Dropdown Menus: The DropDown menu inside the Card component can be toggled on and off for additional actions like "Share", "Edit", "Delete", etc.


# License
This project is licensed under the MIT License. See the LICENSE file for details.

