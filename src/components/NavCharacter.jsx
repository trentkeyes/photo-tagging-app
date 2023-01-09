export const NavCharacter = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center text-white bg-tarantino-bg bg-opacity-60 rounded p-1  shadow-md">
      <div className="w-16">
        <img src={img} alt="" />
      </div>
      <h4 className="text-center font-bold text-large ">{name}</h4>
    </div>
  );
};
