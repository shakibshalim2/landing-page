import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
