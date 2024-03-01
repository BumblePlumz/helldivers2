import { useState } from "react";
import StratagemsButtonImage from "./StratagemsButtonImage";
import PropTypes from 'prop-types';

const Stratagems = ({ onButtonChange }) => {
  const [activeAction, setActiveAction] = useState(-1);

  // Tableau d'URLs d'images
  const stratagemsDefense = Array.from(
    { length: 11 },
    (_, index) => `/images/stratagems/DEFENSIVE_${index + 1}.png`
  );
  const stratagemsOffense = Array.from(
    { length: 18 },
    (_, index) => `/images/stratagems/OFFENSIVE_${index + 1}.png`
  );
  const stratagemsSupply = Array.from(
    { length: 18 },
    (_, index) => `/images/stratagems/SUPPLY_${index + 1}.png`
  );
  const stratagemsSupport = Array.from(
    { length: 10 },
    (_, index) => `/images/stratagems/SUPPORT_${index + 1}.png`
  );

  const handleClick = (type, index) => {
    setActiveAction(`${type}-${index}`);
    onButtonChange(`${type}-${index}`);
  };

  return (
    <>
      <h3>Defense</h3>
      <menu className="grid-container">
        {stratagemsDefense.map((image, index) => (
          <StratagemsButtonImage
            key={`def-${index}`}
            type="def"
            index={index}
            image={image}
            handleClick={handleClick}
            activeButton={activeAction}
          />
        ))}
      </menu>
      <h3>Offense</h3>
      <menu className="grid-container">
        {stratagemsOffense.map((image, index) => (
          <StratagemsButtonImage
            key={`off-${index}`}
            type="off"
            index={index}
            image={image}
            handleClick={handleClick}
            activeButton={activeAction}
          />
        ))}
      </menu>
      <h3>Supply</h3>
      <div className="grid-container">
        {stratagemsSupply.map((image, index) => (
          <StratagemsButtonImage
            key={`supply-${index}`}
            type="supply"
            index={index}
            image={image}
            handleClick={handleClick}
            activeButton={activeAction}
          />
        ))}
      </div>
      <h3>Support</h3>
      <menu className="grid-container">
        {stratagemsSupport.map((image, index) => (
          <StratagemsButtonImage
            key={`support-${index}`}
            type="support"
            index={index}
            image={image}
            handleClick={handleClick}
            activeButton={activeAction}
          />
        ))}
      </menu>
    </>
  );
};

Stratagems.protoType = {
  onButtonChange: PropTypes.func.isRequired,
};

export default Stratagems;
