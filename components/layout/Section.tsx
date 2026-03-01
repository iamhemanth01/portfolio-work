"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  as?: "section" | "div";
  animate?: boolean;
}

export function Section({
  children,
  id,
  className,
  as: Component = "section",
  animate = true,
  ...props
}: SectionProps) {
  const content = (
    <Component
      id={id}
      className={cn(
        "py-5 md:py-8",
        id && "scroll-mt-20",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
