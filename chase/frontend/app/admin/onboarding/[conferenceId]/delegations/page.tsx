"use client";
import React from "react";

import { useI18nContext } from "@/i18n/i18n-react";
import { useBackend } from "@/contexts/backend";
import { useRouter } from "next/navigation";
import OnboardingSteps from "@/components/admin/onboarding/steps";
import ForwardBackButtons from "@/components/admin/onboarding/forward_back_bar";

export default function loginVorsitz({
  params,
}: {
  params: { conferenceId: string };
}) {
  const { LL } = useI18nContext();
  const backend = useBackend();
  const router = useRouter();

  return (
    <>
      <OnboardingSteps activeIndex={3} />

      
      
      <ForwardBackButtons
        backURL={`/admin/onboarding/${params.conferenceId}/committees`}
        forwardDisabled={false}
      />
    </>
  );
}
