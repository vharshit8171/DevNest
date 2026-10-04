"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/home/Navbar";
import Form from "@/components/manage-profile/Form";
import LinksForm from "@/components/manage-profile/LinksForm";
import ReviewForm from "@/components/manage-profile/ReviewForm";
import LeftSidebar from "@/components/manage-profile/LeftSideBar";
import TopProgress from "@/components/manage-profile/TopProgress";
import AboutYouForm from "@/components/manage-profile/AboutYouForm";
import SkillsInterestsForm from "@/components/manage-profile/SkillsInsterestsForm";

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
      <Navbar variant="app" showAvatar />

      <main className="mx-auto max-w-300 px-4 py-6 sm:px-6 lg:px-16 lg:py-6">
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
