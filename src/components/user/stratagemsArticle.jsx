import { useState } from "react";



const StratagemsArticle = ({ selection, ...props }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const handleExpand = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <article className="menu-article" onClick={handleExpand}>
      {selection !== null && (
        <div className="menu-container">
          <aside className="menu-aside">
            <img
              src={`/images/stratagems/DEFENSIVE_${
                selection.get("key") + 1
              }.png`}
              alt={selection.get("name")}
              className="menu-image"
            />
          </aside>
          <div
            className="menu-description"
            style={{ display: isDescriptionVisible ? "block" : "none" }}
          >
            <p>Name : {selection.get("name")}</p>
            <p>Scope : {selection.get("scope")}</p>
            <p>Damage : {selection.get("damage")}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default StratagemsArticle;
