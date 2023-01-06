import { useEffect, useState } from 'react';

export const Target = ({ userCoords }) => {
  //   //position coords
  //   const [classes, setClasses] = useState(
  //     'absolute border-blue top-[253px] left-[654px]'
  //   );
  //   // 654 253

  //   useEffect(() => {
  //     if (userCoords) {
  //       setClasses(
  //         `absolute border-blue top-[${userCoords.y}] left-[${userCoords.x}]`
  //       );
  //     }
  //   }, [classes]);
  const dogdick = userCoords ? userCoords.y : 0;

  const classes = `absolute top-[${userCoords.y}px] left-[${userCoords.x}px]`;

  console.log(classes);
  return (
    <div
      style={{
        position: 'absolute',
        top: `${userCoords.y - 20}px`,
        left: `${userCoords.x - 20}px`,
      }}
      className={'flex items-center'}
    >
      <div className="h-10 w-10 border-4 border-red rounded-full"></div>
      <div>Options</div>
    </div>
  );
};
