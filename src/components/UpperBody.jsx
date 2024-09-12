import NetflixImg from "./NetflixImg";
import Language from "./Language";
import Signup from "./Signup";
import bg from "../assets/netflix.jpg";

const UpperBody = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 flex justify-between items-center p-4">
        <NetflixImg />
        <div className="flex gap-4">
          <Language />
          <Signup />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-2">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-lg mb-4">Starts at ₹149. Cancel anytime.</p>
        <button className="bg-red-600 text-white px-6 py-3 rounded text-xl font-bold">
          Restart Your Membership
        </button>
      </div>
    </div>
  );
};

export default UpperBody;
