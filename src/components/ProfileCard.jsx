import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const ProfileCard = ({
  name,
  role,
  github,
  linkedin,
  facebook,
  instagram,
  imageUrl,
}) => {
  return (
    <div className="xs:w-80 sm:w-96 flex flex-col justify-center p-6 shadow-xl rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
      <img
        src={imageUrl}
        alt=""
        className="w-32 h-32 mx-auto rounded-full aspect-square"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl font-[inter] text-black dark:text-white">
            {name}
          </h2>
          <p className="px-5 text-xs sm:text-base text-gray-600 font-[inter]">
            {role}
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          {github && (
            <a
              rel="noopener noreferrer"
              href={github}
              aria-label="GitHub"
              className="p-2 rounded-md text-gray-800 hover:dark:text-violet-600"
            >
              <FaGithub size={20} />
            </a>
          )}
          {linkedin && (
            <a
              rel="noopener noreferrer"
              href={linkedin}
              aria-label="LinkedIn"
              className="p-2 rounded-md text-gray-800 hover:dark:text-violet-600"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {facebook && (
            <a
              rel="noopener noreferrer"
              href={facebook}
              aria-label="Facebook"
              className="p-2 rounded-md text-gray-800 hover:dark:text-violet-600"
            >
              <FaFacebook size={20} />
            </a>
          )}
          {instagram && (
            <a
              rel="noopener noreferrer"
              href={instagram}
              aria-label="Instagram"
              className="p-2 rounded-md text-gray-800 hover:dark:text-violet-600"
            >
              <FaInstagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
