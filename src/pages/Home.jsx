import { MainImage } from '../components/MainImage';

export const Home = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold underline">Home</h1>
      <div className="text-cyan-600 text-2xl">
        <MainImage />
      </div>
    </div>
  );
};
