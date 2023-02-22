import { Children } from 'react';

interface TabBarProps {
  length: 2 | 3;
  children: React.ReactNode;
}

export default function TabBar({ length, children }: TabBarProps) {
  return (
    <div className={`mt-2 grid w-full grid-cols-${length} border-b`}>
      {children}
    </div>
  );
}
