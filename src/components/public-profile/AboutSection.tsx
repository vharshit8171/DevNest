"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import Link from "next/link";
import {
  profileInterests,
  profileLinks,
  profilePhotos,
  profileSkills,
} from "@/data/constants";
import type { ProfilePhoto } from "@/types/types";

type AboutSectionProps = {
  onSelectPhoto: (photo: ProfilePhoto) => void;
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/70 bg-gray-100 px-4 py-1.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary dark:bg-[#1a1a23] sm:px-6.5">
      {children}
    </span>
  );
}

export function AboutSection({ onSelectPhoto }: AboutSectionProps) {
  return (
    <>
      <section className="mx-4 mt-1.5 rounded-md border border-border bg-card dark:bg-[#12121a] p-4 shadow-sm sm:mx-6 sm:p-5 lg:mx-18 lg:p-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          About
        </h2>

        <p className="mt-1 text-sm font-semibold leading-6 text-muted-foreground sm:text-base">
          Full Stack Developer passionate about building scalable web
          applications and solving real-world problems.
        </p>

        <div className="mt-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Skills
          </h2>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {profileSkills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Interests
          </h2>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {profileInterests.map((interest) => (
              <Pill key={interest}>{interest}</Pill>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Social Links
          </h2>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {profileLinks.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                href={""}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <Icon className="size-4" /> {label}{" "}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-2.5 px-4 pb-7 sm:mx-4 sm:px-6 lg:px-7 lg:mx-12">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Photos
        </h2>

        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          {profilePhotos.map((photo) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => onSelectPhoto(photo)}
              className="group relative aspect-[1.7] overflow-hidden rounded-md border border-border bg-muted text-left transition-all duration-300 hover:border-primary/30 hover:shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Open ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="eager"
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 text-primary-foreground opacity-0 transition-all duration-300 group-hover:bg-foreground/25 group-hover:opacity-100">
                <span className="flex size-10 items-center justify-center rounded-full bg-card/90 text-primary shadow-lg">
                  <Expand className="size-5" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
