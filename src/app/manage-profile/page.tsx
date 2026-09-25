"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { ModeToggle } from "@/components/layout/ModeToggle";
import LeftSidebar from "@/components/manage-profile/LeftSideBar";
import TopProgress from "@/components/manage-profile/TopProgress";
import Form from "@/components/manage-profile/Form";
import AboutYouForm from "@/components/manage-profile/AboutYouForm";
import SkillsInterestsForm from "@/components/manage-profile/SkillsInsterestsForm";
import LinksForm from "@/components/manage-profile/LinksForm";
import ReviewForm from "@/components/manage-profile/ReviewForm";
import Link from "next/link";

export default function ProfileSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleComplete = () => {
    setCurrentStep(5);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 w-full bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="DevNest home"
            className="group inline-flex shrink-0 items-center cursor-pointer"
          >
            <Image
              src="/Logo.png"
              alt=""
              width={42}
              height={42}
              priority
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-18"
            />

            <span className="flex items-center text-[24px] font-semibold leading-none tracking-[-0.8px] sm:text-[30px]">
              <span className="text-foreground">Dev</span>
              <span className="text-gradient-accent">Nest</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ModeToggle />

            <button
              type="button"
              aria-label="Open profile menu"
              className="flex items-center gap-2"
            >
              <div className="h-10 w-10 overflow-hidden rounded-full border border-border">
                <Image
                  src="/images/avatars/avatar-4.jpg"
                  alt="Profile"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-300 px-4 py-6 sm:px-6 lg:px-16 lg:py-8">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-3.5">
          <LeftSidebar currentStep={currentStep} />

          <section className="w-full min-w-0 flex-1 rounded-lg border border-border bg-card p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:px-8 sm:py-4">
            <TopProgress currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 1 && <Form onNext={handleNext} />}

              {currentStep === 2 && (
                <AboutYouForm onNext={handleNext} onBack={handleBack} />
              )}

              {currentStep === 3 && (
                <SkillsInterestsForm onNext={handleNext} onBack={handleBack} />
              )}

              {currentStep === 4 && (
                <LinksForm onNext={handleNext} onBack={handleBack} />
              )}

              {currentStep === 5 && (
                <ReviewForm onBack={handleBack} onComplete={handleComplete} />
              )}
            </div>
          </section>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1 px-2 text-center text-[12.5px] font-semibold text-muted-foreground">
          <ShieldCheck
            size={20}
            strokeWidth={1.6}
            className="shrink-0 text-muted-foreground"
            aria-hidden="true"
          />

          <span>
            Your information is secure and will never be shared without your
            permission.
          </span>
        </div>
      </main>
    </div>
  );
}
