"use client";

import { TrpcProvider } from "app/_trpc/trpc-provider";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import CacheProvider from "react-inlinesvg/provider";

import { mockSession } from "@calcom/prisma/mock-fixtures";
import { ToastProvider } from "@coss/ui/components/toast";

import { WebPushProvider } from "@calcom/web/modules/notifications/components/WebPushContext";
import { NotificationSoundHandler } from "@calcom/web/components/notification-sound-handler";

import useIsBookingPage from "@lib/hooks/useIsBookingPage";

import { GeoProvider } from "./GeoContext";

type ProvidersProps = {
  isEmbed: boolean;
  children: React.ReactNode;
  nonce: string | undefined;
  country: string;
};
export function Providers({ isEmbed, children, country }: ProvidersProps) {
  const isBookingPage = useIsBookingPage();

  // DB-less preview: seed the client session so useSession() returns the mock
  // user on the very first render (server + client), instead of "loading" on
  // SSR and the user on the client — which caused a hydration mismatch in the
  // sidebar user dropdown.
  const previewSession =
    process.env.NEXT_PUBLIC_MOCK_DB === "1" ? (mockSession as unknown as Session) : undefined;

  return (
    <GeoProvider country={country}>
      <SessionProvider session={previewSession}>
        <TrpcProvider>
          <ToastProvider position="bottom-center">
            {!isEmbed && !isBookingPage && <NotificationSoundHandler />}
            {/* @ts-expect-error FIXME remove this comment when upgrading typescript to v5 */}
            <CacheProvider>
              <WebPushProvider>{children}</WebPushProvider>
            </CacheProvider>
          </ToastProvider>
        </TrpcProvider>
      </SessionProvider>
    </GeoProvider>
  );
}
