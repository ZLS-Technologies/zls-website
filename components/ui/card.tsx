import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & { className?: string };

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white p-6 rounded-2xl ${className}`}>{children}</div>;
}

export function CardHeader({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="mb-4">{children}</div>;
}

export function CardContent({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div>{children}</div>;
}
