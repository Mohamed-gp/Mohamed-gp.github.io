import { FaGithub, FaLink } from "react-icons/fa6";
import Image from "next/image";

interface ProjectModelProps {
  setIsProjectModelOpen: any;
  githubLink: string;
  productionLink: string;
  heroImage: string;
  title: string;
  description: string;
  features: string[];
  thereIsAdmin: boolean;
}

const ProjectModel = ({
  setIsProjectModelOpen,
  githubLink,
  productionLink,
  heroImage,
  description,
  title,
  features,
  thereIsAdmin,
}: ProjectModelProps) => {
  const data = {
    title: title,
    description: description,
  };
  return (
    <div
      className=" w-screen text-center h-screen flex justify-center items-center fixed bg-black/60 z-50 left-0 top-0 "
      onClick={() => setIsProjectModelOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-10 flex flex-col text-black overflow-auto px-12 bg-white py-6 rounded-lg border border-[#e5e7eb] min-w-[400px] mx-12 h-[634px]"
      >
        <div
          className="flex my-6 justify-center items-center mx-auto overflow-clip max-w-[1000px] max-h-[500px] 
        "
        >
          <Image
            src={heroImage}
            alt="test"
            width={1000}
            className=""
            height={800}
          />
        </div>
        <p className="text-center font-bold">{data.title}</p>
        <p className="leading-relaxed">{data.description}</p>
        <p className="font-bold my-4">Features</p>

        <ul className="list-disc">
          {features.map((feature, index) => (
            <li key={index} className="font-bold text-left ">
              {feature}
            </li>
          ))}
        </ul>
        <p className="font-bold">Demo Accounts</p>
        {thereIsAdmin && (
          <>
            <p className=" font-bold text-center">admin </p>
            <p className="text-left ">
              <span className="font-bold">email :</span> admin@admin.com
            </p>
            <p className="text-left ">
              <span className="font-bold">password :</span> admin@admin.com
            </p>
          </>
        )}
        <p className=" font-bold text-center">user</p>
        <p className="text-left ">
          <span className="font-bold">email :</span> user@demo.com
        </p>
        <p className="text-left ">
          <span className="font-bold">password :</span> user@demo.com
        </p>
        <div className="flex items-center my-6 dark:text-black w-[100%] gap-1">
          <a
            href={githubLink}
            target="_blank"
            className="flex cursor-pointer items-center justify-center gap-1 px-3  bg-black/80 text-white rounded-full w-[50%] py-2"
          >
            <FaGithub />
            <p className="text-[11px] font-semibold">Code</p>
          </a>
          <a
            href={productionLink}
            target="_blank"
            className="flex cursor-pointer items-center justify-center gap-1 px-3 py-2 bg-[#0080ff] text-white rounded-full w-[50%]"
          >
            <FaLink />
            <p className="text-[11px] font-semibold">Live</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectModel;
