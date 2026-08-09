import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <main className="flex grow flex-col justify-center">
      <section className="p-4">
        <h1 className="font-space-grotesk text-primary mb-4 text-base">
          Works
        </h1>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <Link
                href={`/works/${project.id}`}
                className="border-border block border transition-[filter] duration-(--duration) hover:brightness-50"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading="eager"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
