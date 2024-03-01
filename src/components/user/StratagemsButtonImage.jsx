const StratagemsButtonImage = ({ type, index, image, handleClick, activeButton }) => {
    // console.log(`${type}-${activeButton}`);
    const isActive = activeButton === `${type}-${index}`;
  return (
    <button
      onClick={() => {handleClick(type, index);}}
      className={`grid-item ${isActive ? 'active' : ''}`}
    >
      <img
        className="grid-img"
        src={image}
        alt={`${type}-${index + 1}`}
      />
    </button>
  );
};

export default StratagemsButtonImage;
