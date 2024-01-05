# Hacker News Search App

A simple React application that allows users to search for articles on Hacker News using the Hacker News API.

## Components

### 1. App.jsx

The main component that orchestrates the application. It manages the state for the search term and the fetched articles. The component structure includes:

- **State:**
  - `searchTerm`: The term entered by the user for searching Hacker News.
  - `articles`: The list of articles fetched from the Hacker News API.

- **Functions:**
  - `onInputChange`: Handles the input change event to update the search term.
  - `onSearch`: Handles the search button click event and triggers the fetch of articles.
  - `fetchArticles`: Asynchronously fetches articles from the Hacker News API.

- **Components:**
  - `UserInput`: Renders the search input field and the search button.
  - `RenderData`: Renders the list of articles based on the search results.

### 2. UserInput.jsx

A reusable functional component responsible for rendering the search input field and the search button. It takes the following props:

- `searchTerm`: The current search term.
- `onSearch`: Callback function triggered on the search button click.
- `onInputChange`: Callback function triggered on the input field change.

### 3. RenderData.jsx

Another reusable functional component responsible for rendering the list of articles based on the search results. It takes the following prop:

- `articles`: An array of articles fetched from the Hacker News API.

The component filters out articles with missing titles before rendering them in an unordered list (`ul`). Each list item (`li`) contains a link (`a`) to the article's URL, which opens in a new tab.

## How to Run

1. Clone the repository: `git clone https://github.com/your-username/hacker-news-search-app.git`
2. Navigate to the project directory: `cd hacker-news-search-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and go to `http://localhost:3000` to view the app.

Feel free to explore and modify the code to suit your needs!
