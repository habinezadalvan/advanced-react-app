import React from "react";
import Tag from "./Tag";

export default function Box({ title, tags }) {
  // console.log('tags', tags)
  const tagToDisplay = tags.slice(0, 8);
const moreTages = tags.slice(8);

  const displayTags = () => {
    return tagToDisplay.map((tag) => {
      return <Tag key={tag.id} name={tag.tagName} />;
    });
  };
  const displayMoreTags = () => {
    return moreTages.map((tag) => {
      return <Tag key={tag.id} name={tag.tagName} />;
    });
  };
  return (
    <div className="box">
      <h3>{title}</h3>
      {tags.length > 8 ? (
        <div className="tags">
          {displayTags()}
          <button>+ {tags.length - tagToDisplay.length}</button>
        </div>
      ) : (
        <div className="tags">{displayTags()}</div>
      )}

      <div className="more-tags" >
            {displayMoreTags()}
      </div>
    </div>
  );
}
