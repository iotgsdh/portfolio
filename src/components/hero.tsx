import { SITE } from "@/constants/site";

const firstName = "Yuri".split("");
const lastName = "Toriyama".split("");

const BASE_DELAY = 0.08;

export default function Hero() {
  return (
    <div className="p-4">
      <h1 className="hidden">{SITE.name}</h1>
      <div className="text-primary font-space-grotesk relative -z-10 mb-8 text-6xl/tight md:text-8xl/tight lg:text-[10rem] xl:text-[14rem] 2xl:text-[18rem]">
        {/* first name */}
        <div className="flex overflow-hidden">
          {firstName.map((char, i) => (
            <span
              key={`first-${i}`}
              style={{
                animationDelay: `${i * BASE_DELAY}s`,
              }}
              className="animate-fade-up"
            >
              {char}
            </span>
          ))}
        </div>
        {/* last name */}
        <div className="flex overflow-hidden">
          {lastName.map((char, i) => (
            <span
              key={`last-${i}`}
              style={{
                animationDelay: `${(firstName.length + i) * BASE_DELAY}s`,
              }}
              className="animate-fade-up inline-block"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <p>Frontend Developer</p>
      <p>
        2 years of professional experience with WordPress.
        <br />
        Currently studying modern frontend development using React, TypeScript,
        and Next.js.
      </p>
    </div>
  );
}
