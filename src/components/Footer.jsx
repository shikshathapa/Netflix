import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="p-4 bg-stone-950 text-white">
      <div className="flex items-center justify-start mb-6">
        <button className="flex items-center bg-red-600 text-white py-2 px-4 rounded">
          Restart your membership
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>

      <div className="mb-6">
        <p className="text-lg">Questions? Call 000-800-919-1649</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <p className="text-white-400 hover:underline cursor-pointer">FAQ</p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Investor Relations
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Privacy
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Speed Test
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-white-400 hover:underline cursor-pointer">
            Help Centre
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">Jobs</p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Cookie Preference
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Legal Notices
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-white-400 hover:underline cursor-pointer">
            Account
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Ways to Watch
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Corporate Information
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Only on Netflix
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-white-400 hover:underline cursor-pointer">
            Media Centre
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Terms of Use
          </p>
          <p className="text-white-400 hover:underline cursor-pointer">
            Contact Us
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm">Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;
