"use client";

import { useState } from "react";
import {
  Link2,
  Globe,
  Plus,
  Trash2,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

interface LinkItem {
  id: string;
  type: string;
  label: string;
  url: string;
  visibility: string;
  icon: React.ReactNode;
  custom?: boolean;
}

interface LinksFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function LinksForm({ onNext, onBack }: LinksFormProps) {
  const [links, setLinks] = useState<LinkItem[]>([
    {
      id: "1",
      type: "portfolio",
      label: "Portfolio Website",
      url: "https://harshitverma.dev",
      visibility: "Public",
      icon: <Globe size={16} />,
    },
  ]);

  const updateLink = (id: string, field: keyof LinkItem, value: string) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, [field]: value } : link)),
    );
  };

  const removeLink = (id: string) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const addLink = () => {
    const newLink: LinkItem = {
      id: Date.now().toString(),
      type: "custom",
      label: "Custom link",
      url: "",
      visibility: "Public",
      icon: <Link2 size={16} />,
      custom: true,
    };

    setLinks((prev) => [...prev, newLink]);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 border-b border-border pb-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg gradient-accent">
          <Link2 size={22} className="text-white" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-foreground">Links</h2>
          <p className="mt-1 text-[13.5px] font-semibold text-muted-foreground">
            Add your social profiles and portfolio links
          </p>

          <p className="text-[12.5px] font-semibold text-muted-foreground">
            Help others connect with you across platforms.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <div
            key={link.id}
            className="relative rounded-md border border-border bg-background/60 p-2 transition-colors hover:border-primary/20"
          >
            <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-[190px_1fr_150px_auto] lg:items-end">
              <Input
                value={link.label}
                onChange={(e) => updateLink(link.id, "label", e.target.value)}
                placeholder="Label"
                icon={
                  <span className="text-muted-foreground">{link.icon}</span>
                }
              />

              <Input
                value={link.url}
                onChange={(e) => updateLink(link.id, "url", e.target.value)}
                placeholder="https://"
              />

              <Select
                value={link.visibility || "Public"}
                options={["Public", "Anyone"]}
                onChange={(value) => updateLink(link.id, "visibility", value)}
              />

              <button
                type="button"
                onClick={() => removeLink(link.id)}
                aria-label={`Remove ${link.label}`}
                className="flex h-11 w-full items-center justify-center rounded-md border border-red-500/10 bg-red-500/4 text-red-500/60 transition-colors hover:border-red-500/20 hover:bg-red-500/8 hover:text-red-500 lg:w-11 cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addLink}
        className="flex h-10 w-fit items-center gap-2 rounded-md border border-border bg-background px-4 text-[13px] font-semibold text-muted-foreground transition-colors hover:border-primary/25 hover:bg-muted hover:text-foreground cursor-pointer"
      >
        <Plus size={18} />
        Add another link
      </button>

      <div className="relative overflow-hidden rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5 px-5 py-4 shadow-[0_0_30px_rgba(99,102,241,0.08)]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#6366f1]/10 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-10 left-1/3 h-20 w-24 rounded-full bg-[#8b5cf6]/8 blur-2xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#facc15]/20 bg-[#facc15]/10 shadow-[0_0_16px_rgba(250,204,21,0.08)]">
            <Lightbulb
              size={18}
              strokeWidth={1.8}
              className="text-[#f5c506]"
              aria-hidden="true"
            />
          </div>

          <p className="text-[13px] leading-5 text-muted-foreground">
            <span className="font-semibold text-foreground">Tip:</span> Adding
            links helps others discover your work and build more meaningful
            connections.
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
