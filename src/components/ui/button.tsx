import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full font-sans text-sm font-semibold tracking-[0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-out disabled:pointer-events-none disabled:opacity-55 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-pine text-cream shadow-[0_10px_30px_-14px_rgba(11,43,35,0.85)] hover:-translate-y-0.5 hover:bg-pine-soft hover:shadow-[0_18px_38px_-16px_rgba(11,43,35,0.7)]",
        clay: "bg-clay text-cream shadow-[0_10px_30px_-14px_rgba(163,79,47,0.8)] hover:-translate-y-0.5 hover:bg-clay-dark",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-pine hover:bg-pine hover:text-cream",
        light:
          "border border-cream/25 bg-cream/10 text-cream backdrop-blur-md hover:-translate-y-0.5 hover:bg-cream hover:text-pine",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
        link: "rounded-none bg-transparent p-0 text-ink underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[0.95rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
