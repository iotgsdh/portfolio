const skills: [string, string[]][] = [
  [
    "Frontend",
    [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "GSAP",
    ],
  ],
  ["Backend", ["Java", "PHP", "Supabase"]],
  ["CMS", ["WordPress", "microCMS"]],
  ["Tools", ["Git", "GitHub"]],
  ["Other", ["Figma"]],
];

export default function SkillList() {
  return (
    <ul className="grid list-disc grid-cols-2 gap-4 ps-[1em] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {skills.map((category, i) => (
        <li key={i}>
          <span>{category[0]}</span>
          <ul>
            {category[1].map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
