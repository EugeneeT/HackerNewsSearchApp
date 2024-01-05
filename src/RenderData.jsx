import React from "react";

const RenderData = ({ articles }) => {
    return (
        <div>
            <ul>
                {articles.map((article) => (
                    article.title && (
                    <li key={article.objectID}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default RenderData;