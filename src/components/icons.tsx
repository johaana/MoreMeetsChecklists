import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s5.333-8 10-8 10 8 10 8-5.333 8-10 8-10-8-10-8Z" />
      <path d="m12 14-1-1 3-3 3 3-1 1" />
      <path d="M12 14v-4" />
    </svg>
  );
}
