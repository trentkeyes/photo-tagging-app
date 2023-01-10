export const CloseBtn = ({ close }) => {
  return (
    <button
      onClick={close}
      className="mx-auto block px-6 py-2.5 bg-red text-white font-medium text-xs uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      Close
    </button>
  );
};
