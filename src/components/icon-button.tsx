import Link from 'next/link';

interface IconButton {
  href: string;
  width: string;
  label?: string;
  children: React.ReactNode;
}

export default function IconButton({
  href,
  width,
  label,
  children,
}: IconButton) {
  return (
    <Link href={href}>
      <div className={`flex flex-col items-center space-y-2 py-2 ${width}`}>
        <div
          className={`flex aspect-square w-12 cursor-pointer items-center justify-center rounded-full bg-orange-500 text-white ${width} 
          hover:bg-orange-600`}>
          {children}
        </div>
        {label ? (
          <span className="text-center text-sm font-medium text-gray-700">
            {label}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
