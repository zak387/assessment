"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", size = "md", children, className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-sage text-white hover:bg-sage-dark shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]",
    secondary: "bg-beige text-brown hover:bg-green-light active:scale-[0.98]",
    outline: "border-2 border-sage text-sage hover:bg-green-light active:scale-[0.98]",
  };
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-8 py-4 text-base",
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
