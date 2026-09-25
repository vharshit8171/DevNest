"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";
import Toggle from "../ui/Toggle";
import Button from "../ui/Button";
import Image from "next/image";
import {
  ArrowRight,
  AtSign,
  MapPin,
  User,
  UsersRound,
  XCircle,
} from "lucide-react";

interface BasicInfoFormProps {
  onNext: () => void;
}

function GoogleIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function BasicInfoForm({ onNext }: BasicInfoFormProps) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [openToWork, setOpenToWork] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-3 border-b border-border">
        <div className="flex gap-4">
          <div className="w-11 h-11 rounded-md gradient-accent border border-primary/15 flex items-center justify-center shrink-0">
            <UsersRound size={22} strokeWidth={1.6} className="text-white" />
          </div>

          <div>
            <h2 className="text-[22px] font-semibold text-foreground">
              Basic Information
            </h2>

            <p className="text-[13.5px] font-semibold text-muted-foreground">
              Tell us about yourself
            </p>
          </div>
        </div>

        <div className="bg-[#111827] border border-primary/15 rounded-md px-4 py-2.5 flex items-center gap-2 w-fit">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <GoogleIcon size={26} />
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[13.5px] font-medium text-gray-300 dark:text-foreground leading-none">
              Signed in with Google
            </span>

            <span className="text-[12.5px] text-gray-300 dark:text-muted-foreground">
              harshit.verma@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-start">
        <div className="relative">
          <div className="w-22 h-22 rounded-full overflow-hidden bg-muted border-2 border-border">
            <Image
              src="/images/avatars/avatar-4.jpg"
              alt="Profile"
              width={88}
              height={88}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-0.5 -right-0.5 w-7 h-7 bg-background rounded-full flex items-center justify-center border-2 border-border shadow-lg">
            <GoogleIcon size={17} />
          </div>
        </div>

        <div className="flex flex-col gap-0.5 pt-1">
          <h3 className="text-[18px] font-semibold text-foreground">
            Harshit Verma
          </h3>

          <p className="text-[13.5px] font-semibold text-muted-foreground leading-5 max-w-90">
            This is your Google profile. To change your photo, update it from
            your Google account.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          icon={<User size={19} strokeWidth={1.5} />}
        />

        <Input
          label="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          icon={<AtSign size={19} strokeWidth={1.5} />}
        />
      </div>

      <Textarea
        label="Bio"
        required
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Tell us about yourself"
        maxLength={160}
        currentLength={bio.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          label="Role / Title"
          required
          value={role}
          onChange={setRole}
          options={[
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "UI/UX Designer",
            "DevOps Engineer",
            "Product Manager",
          ]}
        />

        <Input
          label="Location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          icon={<MapPin size={19} strokeWidth={1.5} />}
          rightElement={
            location ? (
              <button
                type="button"
                onClick={() => setLocation("")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear location"
              >
                <XCircle size={18} strokeWidth={1.5} />
              </button>
            ) : null
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Experience Level"
          required
          value={experience}
          onChange={setExperience}
          options={[
            "0 - 1 Years",
            "1 - 2 Years",
            "2 - 3 Years",
            "3 - 5 Years",
            "5+ Years",
          ]}
        />

        <div className="flex flex-col gap-2">
          <label className="text-[13.5px] font-medium text-foreground">
            Open to Opportunities
          </label>

          <div className="h-11 font-semibold flex items-center">
            <Toggle
              checked={openToWork}
              onChange={setOpenToWork}
              label="Let others know you're open to work"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-5 mt-0.5 border-t border-border">
        <Button
          onClick={onNext}
          className="min-w-35 cursor-pointer"
          icon={<ArrowRight size={20} strokeWidth={1.8} />}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
