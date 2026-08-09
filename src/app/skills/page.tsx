import SkillList from "@/components/skill-list";

export default function Skills() {
  return (
    <main className="flex grow flex-col justify-center">
      <section className="p-4">
        <h1 className="font-space-grotesk text-primary mb-4 text-base">
          Skills
        </h1>
        <SkillList />
      </section>
    </main>
  );
}
