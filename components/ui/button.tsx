import React, { ReactElement, isValidElement, cloneElement } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** outline style instead of solid */
  variant?: "outline";
  /** if true, we’ll “slot” our styles onto the single child element (e.g. an <a>) */
  asChild?: boolean;
  /** extra classes */
  className?: string;
}

export function Button({
  children,
  variant,
  asChild = false,
  className = "",
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded-lg font-medium";
  const style =
    variant === "outline"
      ? "border border-primary text-primary"
      : "bg-primary text-white";
  const classes = `${base} ${style} ${className}`.trim();

  if (asChild && isValidElement(children)) {
    // cast to a ReactElement with any props so TS knows className is OK
    const child = children as ReactElement<any, any>;
    return cloneElement(child, {
      ...props,
      className: [classes, child.props.className].filter(Boolean).join(" "),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
