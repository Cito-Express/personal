"use client";

import { ButtonWithLoader, SelectWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Map, MapPin } from "lucide-react";
import Image from "next/image";

export default function Location() {
  return (
    <AuthLayout
      title="Set your location"
      description="Please enter your location to get started with Cito Express"
    >
      <div className="space-y-4">
        <div className="bg-secondary p-4 rounded-2xl border border-line flex items-center justify-between">
          <p className="text-sm font-medium">Country</p>
          <div className="flex items-center gap-2">
            <Image src="/nigeria.svg" alt="nigeria" width={20} height={20} />
            <p className=" font-semibold">Nigeria</p>
          </div>
        </div>

        <form className="space-y-4">
          <SelectWithIcon
            icon={<Map size={20} />}
            label="Residential State"
            options={[]}
            defaultValue="Select your state"
            className="w-full"
          />
          <SelectWithIcon
            icon={<MapPin size={20} />}
            label="Residential City"
            options={[]}
            defaultValue="Select your city"
            className="w-full"
          />
          <ButtonWithLoader
            initialText="Continue"
            loadingText="Continuing..."
            loading={false}
            className="w-full btn-primary mt-6 h-10 rounded-lg"
          />
        </form>
      </div>
    </AuthLayout>
  );
}
