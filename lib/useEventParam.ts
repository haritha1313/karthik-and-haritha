"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { EventType } from "@/components/ui/EventToggle";

export function useEventParam(): [EventType, (next: EventType) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramEvent = searchParams.get("event");
  const event: EventType = paramEvent === "reception" ? "reception" : "wedding";

  // We actually don't need local state for this, it is perfectly derived from searchParams.
  // Using an optimistic router.replace state update instead.

  const setEvent = (newEvent: EventType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("event", newEvent);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return [event, setEvent];
}
