import Link from 'next/link';

interface FloatingButton {
  href: string;
  children: React.ReactNode;
}

export default function FloatingButton({ href, children }: FloatingButton) {
  return (
    <Link href={href}>
      <button className="fixed bottom-24 right-6 rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500">
        {children}
      </button>
    </Link>
  );
}
