
const Card = () => {
  return (
    <div
      className="p-4  border-red-700">
      <p className="text-lg font-bold text-white mb-4">
        More reasons to join
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-gray-700 p-4 rounded h-80 w-64 bg-[#1E162B] relative">
          <h3 className="text-lg font-bold text-white">Enjoy on your TV</h3>
          <p className="text-white">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
          <div className="text-white text-5xl absolute bottom-4 right-4">
            📺
          </div>
        </div>

        <div className="border border-gray-700 p-4 rounded h-80 w-64 bg-[#1E162B] relative">
          <h3 className="text-lg font-bold text-white">
            Download your shows to watch offline
          </h3>
          <p className="text-white">
            Save your favourites easily and always have something to watch.
          </p>
          <div className="text-white text-5xl absolute bottom-4 right-4">
            📥
          </div>
        </div>

        <div className="border border-gray-700 p-4 rounded h-80 w-64 bg-[#1E162B] relative">
          <h3 className="text-lg font-bold text-white">Watch on Your Laptop</h3>
          <p className="text-white">
            Stream unlimited movies and TV shows directly on your laptop,
            anytime, anywhere.
          </p>
          <div className="text-white text-5xl absolute bottom-4 right-4">
            💻
          </div>
        </div>

        <div className="border border-gray-700 p-4 rounded h-80 w-64 bg-[#1E162B] relative">
          <h3 className="text-lg font-bold text-white">
            Create profiles for kids
          </h3>
          <p className="text-white">
            Send kids on adventures with their favourite characters in a space
            made just for them -- free with your membership.
          </p>
          <div className="text-white text-5xl absolute bottom-4 right-4">
            👶
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
