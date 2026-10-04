"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { ArrowLeft, ArrowRight, Lightbulb, UserRound } from "lucide-react";

interface AboutYouFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function AboutYouForm({ onNext, onBack }: AboutYouFormProps) {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [headline, setHeadline] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 pb-3 border-b border-border">
        <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0">
          <UserRound size={20} strokeWidth={1.6} className="text-white" />
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-foreground">
            About You
          </h2>

          <p className="text-[13.5px] font-semibold text-muted-foreground">
            Tell us more about your background and experience
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.75">
        <label className="text-[13.5px] font-medium text-foreground flex items-center gap-1">
          Role / Title <span className="text-red-500">*</span>
        </label>

        <p className="text-[12.5px] text-muted-foreground -mt-1 mb-1">
          Your current role or what best describes you
        </p>

        <Select
          value={role}
          onChange={setRole}
          options={[
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "UI/UX Designer",
            "DevOps Engineer",
            "Product Manager",
            "Data Scientist",
          ]}
        />
      </div>

      <Input
        label="Location"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
      />

      <div className="flex flex-col gap-2">
        <label className="text-[13.5px] font-medium text-foreground flex items-center gap-1">
          Experience Level <span className="text-red-500">*</span>
        </label>

        <p className="text-[12.5px] font-semibold text-muted-foreground -mt-1 mb-1">
          Your overall experience in development
        </p>

        <Select
          value={experience}
          onChange={setExperience}
          options={[
            "0 – 1 Years",
            "1 – 2 Years",
            "2 – 3 Years",
            "3 – 5 Years",
            "5+ Years",
            "10+ Years",
          ]}
        />
      </div>

      <Input
        label="Headline"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        placeholder="e.g. Building scalable web apps | React | Node.js"
        maxLength={80}
      />

      <Textarea
        label="About You"
        required
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Tell us about yourself..."
        maxLength={300}
        currentLength={about.length}
      />

      <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-card px-5 py-4 shadow-[0_0_30px_rgba(99,102,241,0.08)]">
        <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#6366f1]/10 blur-2xl" />

        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#8b5cf6]/10 blur-2xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-cyan-400/25 bg-linear-to-br from-[#06B6D4] to-[#3B82F6] shadow-[0_0_18px_rgba(6,182,212,0.25)] dark:border-[#818cf8]/25 dark:from-[#6366f1] dark:to-[#8b5cf6] dark:shadow-[0_0_18px_rgba(99,102,241,0.3)]">
            <Lightbulb
              size={18}
              strokeWidth={1.8}
              className="text-white"
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
