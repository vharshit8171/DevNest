import { projects } from "@/data/constants";
import { ProjectCard } from "@/components/public-profile/ProjectCard";

export function ProjectsSection() {
  return (
    <section className="space-y-4 p-1 mt-1.5 pb-7 sm:mx-6 lg:mx-16">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
