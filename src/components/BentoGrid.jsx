import { Button } from "@material-tailwind/react";
import { cn } from "../utils/cn";
import { FaGithub } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-14",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  tags
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 text-white bg-black border-white/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="overflow-hidden rounded-lg h-96"> 
        <img
          className="object-cover w-full h-full" 
          src={header}
          alt={title}
        />
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs">
          {description}
        </div>
        <div className="mt-1 flex flex-wrap gap-2 text-xs">
        {tags.map((tag,i) => (
          <p
            key={`${tag}-i`}
          >
            #{tag}
          </p>
        ))}
      </div>
      </div>
      <Button onClick={() => window.open(link, "_blank")} className="mb-3 mt-1 w-full flex items-center gap-2 justify-center">
            View on github
            <FaGithub  className="text-lg"/>
          </Button>

    </div>
  );
};
