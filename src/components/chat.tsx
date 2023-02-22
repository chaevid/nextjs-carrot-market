import Link from 'next/link';

interface ChatProps {
  id: number;
  avatarUrl?: string;
  nickname: string;
  message: string;
}
export default function Chat({ id, avatarUrl, nickname, message }: ChatProps) {
  return (
    <Link href={`/chats/${id}`}>
      <div className="flex cursor-pointer items-center space-x-4 px-4 py-4">
        <div className="aspect-square w-12 rounded-full bg-slate-300" />
        <div>
          <p className="text-sm font-medium text-gray-700">{nickname}</p>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
      </div>
    </Link>
  );
}
