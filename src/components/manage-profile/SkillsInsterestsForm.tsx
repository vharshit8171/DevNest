"use client";

import { useState } from "react";
import {
  Code2,
  X,
  Image as ImageIcon,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";

interface SkillsInterestsFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SkillsInterestsForm({
  onNext,
  onBack,
}: SkillsInterestsFormProps) {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const [interests, setInterests] = useState<string[]>([]);
  const [interestInput, setInterestInput] = useState("");

  const [images, setImages] = useState<string[]>([]);

  const addSkill = (value: string) => {
    const trimmed = value.trim();

    if (
      trimmed &&
      !skills.some((skill) => skill.toLowerCase() === trimmed.toLowerCase()) &&
      skills.length < 20
    ) {
      setSkills((prev) => [...prev, trimmed]);
    }

    setSkillInput("");
  };

  const addInterest = (value: string) => {
    const trimmed = value.trim();

    if (
      trimmed &&
      !interests.some(
        (interest) => interest.toLowerCase() === trimmed.toLowerCase(),
      ) &&
      interests.length < 20
    ) {
      setInterests((prev) => [...prev, trimmed]);
    }

    setInterestInput("");
  };

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((item) => item !== skill));
  };

  const removeInterest = (interest: string) => {
    setInterests((prev) => prev.filter((item) => item !== interest));
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 border-b border-border pb-5">
        <div className="gradient-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
          <Code2 size={22} className="font-semibold text-white" />
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-foreground">
            Skills & Interests
          </h2>

          <p className="text-[13.5px] font-semibold text-muted-foreground">
            Add your skills and topics you&apos;re interested in
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-1 text-[14.5px] font-medium text-foreground">
          Skills <span className="text-red-500">*</span>
        </label>
        <p className="-mt-2.5 text-[12.5px] text-muted-foreground">
          Add the technologies and tools you work with
        </p>

        <div className="group flex min-h-12 w-full flex-wrap items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 transition-colors focus-within:border-primary/50">
          {skills.map((skill) => (
            <span
              key={skill}
              className="devnest-tag flex items-center gap-2 rounded-lg px-3 py-1.5 text-[13px] text-foreground"
            >
              {skill}

              <button
                type="button"
                onClick={() => removeSkill(skill)}
                aria-label={`Remove ${skill}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X size={14} />
              </button>
            </span>
          ))}

          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addSkill(skillInput);
              }
            }}
            placeholder={
              skills.length === 0
                ? "Type a skill and press Enter"
                : "Add another skill..."
            }
            className="min-w-35 flex-1 bg-transparent text-[14px] text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[12px] text-muted-foreground">
            Press Enter to add more skills
          </span>

          <span className="text-[12px] text-muted-foreground">
            {skills.length}/20 skills added
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[14.5px] font-medium text-foreground">
          Interests
        </label>

        <p className="-mt-2.5 text-[12.5px] text-muted-foreground">
          What topics or areas interest you?
        </p>

        <div className="group flex min-h-12 w-full flex-wrap items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 transition-colors focus-within:border-primary/50">
          {interests.map((interest) => (
            <span
              key={interest}
              className="devnest-tag flex items-center gap-2 rounded-lg px-3 py-1.5 text-[13px] text-foreground"
            >
              {interest}

              <button
                type="button"
                onClick={() => removeInterest(interest)}
                aria-label={`Remove ${interest}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X size={14} />
              </button>
            </span>
          ))}

          <input
            type="text"
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addInterest(interestInput);
              }
            }}
            placeholder={
              interests.length === 0
                ? "Type an interest and press Enter"
                : "Add another interest..."
            }
            className="min-w-35 flex-1 bg-transparent text-[14px] text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[12px] text-muted-foreground">
            Press Enter to add more interests
          </span>

          <span className="text-[12px] text-muted-foreground">
            {interests.length}/20 interests added
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-[14.5px] font-medium text-foreground">
          Images
        </label>

        <p className="-mt-2.5 text-[12.5px] text-muted-foreground">
          Add images that represent you or your work (projects, setups, events,
          etc.)
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.length < 5 && (
            <button
              type="button"
              className="flex aspect-4/3 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-muted/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <ImageIcon size={20} className="text-muted-foreground" />
              </div>

              <span className="text-[13px] font-medium text-foreground">
                Add Image
              </span>

              <span className="text-center text-[11px] leading-3.5 text-muted-foreground">
                PNG, JPG or WEBP
                <br />
                Max 5MB
              </span>
            </button>
          )}

          {images.map((img, idx) => (
            <div
              key={img}
              className="group relative aspect-4/3 overflow-hidden rounded-xl border border-border bg-background"
            >
              <Image
                src={img}
                alt={`Profile image ${idx + 1}`}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

              <button
                type="button"
                onClick={() => removeImage(idx)}
                aria-label={`Remove image ${idx + 1}`}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[12px] text-muted-foreground">
            You can add up to 5 images
          </span>

          <span className="text-[12px] text-muted-foreground">
            {images.length}/5 images added
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5 px-5 py-4 shadow-[0_0_30px_rgba(99,102,241,0.08)]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#6366f1]/10 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-10 left-1/3 h-20 w-24 rounded-full bg-[#8b5cf6]/8 blur-2xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#facc15]/20 bg-[#facc15]/10 shadow-[0_0_16px_rgba(250,204,21,0.08)]">
            <Lightbulb
              size={17}
              strokeWidth={1.8}
              className="text-[#f7c707]"
              aria-hidden="true"
            />
          </div>

          <p className="text-[13px] leading-5 text-gray-800/85 dark:text-muted-foreground">
            <span className="font-semibold text-foreground">Tip:</span> Great
            images help your profile stand out and build more meaningful
            connections!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-border">
        <button
          type="button"
          onClick={onBack}
          className="h-11 px-6 rounded-md bg-gray-100 dark:bg-card border border-border flex items-center gap-2 text-[14px] font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
        >
          <ArrowLeft size={17} strokeWidth={1.8} />
          Back
        </button>

        <Button
          onClick={onNext}
          className="min-w-35 cursor-pointer"
          icon={<ArrowRight size={18} strokeWidth={1.8} />}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
