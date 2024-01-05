Explanation:

1. **Imports:**

   - Import the `React` library.

2. **Functional Component:**

   - Create a functional component named `RenderData` that takes the `articles` prop.

3. **JSX Structure:**
   - Render a `div` containing an unordered list (`ul`) to display articles.
   - Use the `map` function to iterate over the `articles` array.
   - For each article, check if the `title` property exists before rendering a list item with a link to the article.
   - The link opens in a new tab (`target="_blank"`) with the `rel="noopener noreferrer"` attribute.
