export const Character = ({ name, coords, handleClick }) => {
  return (
    <area
      shape="circle"
      coords={coords}
      alt=""
      href="#"
      onClick={handleClick}
      className="cursor-pointer"
      id={name}
    />
  );
};
