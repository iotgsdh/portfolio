import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

export default function WorkDetail({ id }: { id: number }) {
  const project = PROJECTS[id - 1];

  return (
    <div className="grid gap-y-8">
      <h1 className="font-space-grotesk">{project.name}</h1>
      <div className="border-border border lg:w-[75dvh]">
        <Image
          src={project.src}
          alt={project.alt}
          width={project.width}
          height={project.height}
          loading="eager"
        />
      </div>
      <div className="grid gap-2">
        <div>
          <Link
            href={project.demo}
            className="underline underline-offset-[0.25em]"
          >
            {project.demo}
          </Link>
        </div>
        <div>
          <Link
            href={project.github}
            className="underline underline-offset-[0.25em]"
          >
            {project.github}
          </Link>
        </div>
      </div>
    </div>
  );
}
