import { useRouter } from 'next/router';

interface HeaderProps {
  title?: string;
  canGoBack?: boolean;
}
export default function Header({ title, canGoBack }: HeaderProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return (
    <div className="fixed flex h-16 w-full max-w-3xl items-center justify-center border-b bg-white font-medium">
      {canGoBack ? (
        <button
          className="absolute left-4"
          onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      ) : null}
      {title ? <span>{title}</span> : null}
    </div>
  );
}
