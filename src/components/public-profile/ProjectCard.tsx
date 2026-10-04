import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/20">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {project.status && (
          <span className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm border border-cyan-500/30 bg-cyan-300 dark:border-border/60 dark:bg-card/90 dark:text-card-foreground dark:shadow-none">
            {project.status}
          </span>
        )}
      </div>

      <div className="px-5 py-2.5">
        <div className="mb-1">
          <h3 className="text-md font-semibold tracking-tight text-card-foreground">
            {project.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-xs font-semibold leading-6 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-sm border border-cyan-500/25 bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-700 transition-colors hover:border-cyan-500/40 hover:bg-cyan-100 dark:border-border dark:bg-muted dark:text-muted-foreground dark:hover:border-primary/30 dark:hover:bg-muted dark:hover:text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-linear-to-r from-[#06B6D4] to-[#3B82F6] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md dark:border dark:border-border dark:bg-background dark:bg-none dark:text-foreground dark:shadow-none dark:hover:bg-muted"
            >
              GitHub
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-linear-to-r from-[#06B6D4] to-[#3B82F6] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md dark:from-[#6366F1] dark:to-[#8B5CF6] dark:shadow-none dark:hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}