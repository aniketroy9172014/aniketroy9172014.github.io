import HeroImg from "@/assets/images/hero.jpg";
import { MernIcon } from "@/components/MernIcon";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Aniket Roy, a passionate Full-stack Developer 
                specializing in creating secure web solutions and 
                user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  As a Smart India Hackathon Finalist
                </span>
                , I'm dedicated to delivering scalable, user-centric solutions 
                that solve real-world problems.
              </p>
              <p className="text-white">
                My focus is on making web applications faster, more secure, and 
                highly reliable. Currently, I'm leveraging my expertise 
                in the MERN stack and Python automation to build seamless, 
                robust applications that empower businesses and users alike.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to 
                    contribute to the developer community with secure architecture 
                    and tools that deliver real value. From optimizing 
                    platform stability to engineering real-time messaging systems, 
                    I'm pushing the boundaries of full-stack development to 
                    deliver high-impact results.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Aniket Roy, Associate Software Engineer
                    </cite>
                    <div className="flex flex-col gap-2">
                       <span className="text-xs text-zinc-500 uppercase tracking-widest">Tech Stack</span>
                       <MernIcon />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
