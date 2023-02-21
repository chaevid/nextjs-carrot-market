import Link from 'next/link';

interface FloatingButton {
  href: string;
  children: React.ReactNode;
}

export default function FloatingButton({ href, children }: FloatingButton) {
  return (
    <Link href={href}>
      <div className="flex flex-row-reverse">
        <button className="fixed bottom-24 mx-4 aspect-square max-w-3xl rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-all hover:bg-orange-500 lg:mx-6">
          {children}
        </button>
      </div>
    </Link>
  );
}
