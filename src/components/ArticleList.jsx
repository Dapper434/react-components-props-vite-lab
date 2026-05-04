import React from "react";

function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date ? `${date} · ` : ""}{minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;