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
                  sizes="(max-width: 767px) calc(100vw - 16px * 2), (max-width: 1023px) calc(50vw - 16px * 3), (max-width: 1279px) calc(33vw - 16px * 4), calc(25vw - 16px * 5)"
                  preload={true}
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
