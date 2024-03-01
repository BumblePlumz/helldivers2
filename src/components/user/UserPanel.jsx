import { useState } from "react";
import Stratagems from "./Stratagems";
import defense from "../../assets/defense.json";

const UserPanel = () => {
  const [selection, setSelection] = useState(null);
  const [stratagemsSelected, setStratagemsSelected] = useState([]);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleActif = (e) => {
    const parts = e.split("-");
    const num = parseInt(parts[1], 10);
    switch (parts[0]) {
      case "def":
        setSelection(() => {
          const map = new Map(Object.entries(defense[num]));
          map.set("key", num);
          return map;
        });
        break;
      case "off":
        // setSelection("offensive");
        break;
      case "supply":
        // setSelection("supply");
        break;
      case "support":
        // setSelection("support");
        break;
      default:
        break;
    }
  };

  function handleAdd() {
    if (selection !== null) {
      // Convertit la sélection en tableau
      const selectedObject = Object.fromEntries(selection);

      // Vérifie si l'objet sélectionné existe déjà dans stratagemsSelected
      const exists = stratagemsSelected.some(
        (item) => item.key === selectedObject.key
      );

      // Si l'objet n'existe pas, ajoutez-le à stratagemsSelected
      if (!exists) {
        setStratagemsSelected((prevValue) => [...prevValue, selectedObject]);
      }
    }
  }
  function handleDelete() {
    if (selection !== null) {
      // Supprime l'objet sélectionné de stratagemsSelected
      setStratagemsSelected(
        // filter : retourne un tableau contenant les éléments qui passent le test
        stratagemsSelected.filter((item) => item.key !== selection.get("key"))
      );
    }
  }
  function handleExpand(e) {
    const domEl = e.target;
    domEl.style.display = "none";
  }

  return (
    <aside className="user-panel scrollable-aside">
      <h2 className="grid-title">La démocratie</h2>
      <div className="grid-div">
        <section className="grid-section-stratagems">
          <Stratagems onButtonChange={handleActif} />
        </section>
        <section className="grid-section-details">
          <h3>Détail du stratagème</h3>
          {/* <article className="menu-article">
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
                <div className="menu-description" style={{ display: isDescriptionVisible ? 'block' : 'none' }}>
                  <p>Name : {selection.get("name")}</p>
                  <p>Scope : {selection.get("scope")}</p>
                  <p>Damage : {selection.get("damage")}</p>
                </div>
              </div>
            )}
          </article> */}
          <button className="menu-btn" onClick={handleAdd}>
            Add
          </button>
          <button className="menu-btn" onClick={handleDelete}>
            Delete
          </button>
          <h3>Stratagèmes sélectionnés</h3>
          {stratagemsSelected.map((stratagem) => (
            <article key={stratagem.key} className="menu-article">
              <div className="menu-container">
                <aside className="menu-aside">
                  <img
                    src={`/images/stratagems/DEFENSIVE_${
                      stratagem.key + 1
                    }.png`}
                    alt={stratagem.name}
                    className="menu-image"
                  />
                </aside>
                <div className="menu-description">
                  <p>Name : {stratagem.name}</p>
                  <p>Scope : {stratagem.scope}</p>
                  <p>Damage : {stratagem.damage}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </aside>
  );
};

export default UserPanel;
