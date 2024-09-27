"use client";

import { theater } from "./page";

interface ButtonProps {
  onClick(...args: any[]): void | Promise<void>;
  className?: string;
  children: React.ReactNode;
  theater: theater
}

export default function Button({ onClick, className, children, theater }: ButtonProps) { 
  // {$$typeof: Symbol.for("react.server.reference"), $$id: 'createNoteAction'}
  return <button className={className} onClick={() => onClick(theater)}>{children}</button>
}