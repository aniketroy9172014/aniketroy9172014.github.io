// src/components/MernIcon.jsx
import MongoIcon from "@/assets/images/icons/mongodb.svg";
import ExpressIcon from "@/assets/images/icons/express.svg";
import ReactIcon from "@/assets/images/icons/react.svg";
import NodeIcon from "@/assets/images/icons/node.svg";

export const MernIcon = () => {
  const icons = [
    { name: "MongoDB", src: MongoIcon },
    { name: "Express", src: ExpressIcon },
    { name: "React", src: ReactIcon },
    { name: "Node", src: NodeIcon }
  ];

  return (
    <div className="flex items-center gap-4 py-2 px-4 bg-white/5 rounded-2xl border border-white/10 w-fit backdrop-blur-sm">
      {icons.map((icon) => (
        <div key={icon.name} className="group relative">
          <img
            src={icon.src}
            className={`h-6 w-6 object-contain transition-all duration-300 ${
              icon.name === "Express" ? "brightness-0 invert" : "" 
            } group-hover:scale-110`}
            alt={icon.name}
          />
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-gray-800 px-2 py-1 text-[10px] text-white transition-all group-hover:scale-100">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};