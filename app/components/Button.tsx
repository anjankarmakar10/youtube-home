import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-gray-100"],
      ghost: ["hover:bg-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: ["rounded-full", "w-10", "h-10", "flex", "items-center", "p-2.5"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({ variant, size, ...props }: ButtonProps) => {
  return <button {...props} className={buttonStyles({ variant, size })} />;
};

export default Button;