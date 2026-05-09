import type { PreorderState } from "@/types/state";

const preorderStates: PreorderState[] = [
  "open",
  "closing_soon",
  "closed",
  "waitlist",
  "demo_priority",
  "delayed",
];

export function isPreorderState(value: string): value is PreorderState {
  return preorderStates.includes(value as PreorderState);
}

export function isNonEmptyArray<T>(value: T[] | undefined | null): value is T[] {
  return Array.isArray(value) && value.length > 0;
}

export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}
