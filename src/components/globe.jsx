import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "leetcode",
  "socketdotio",
  "intellijidea",
  "python",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "mongodb",
  "express",
  "nextdotjs",
  "pycharm",
  "flask",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "tailwindcss",
  "githubactions",
  "linux",
  "kubernetes",
  "c",
  "cplusplus",
  "redux"
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
