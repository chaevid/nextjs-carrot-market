import { classNameJoin } from '@/lib/client/utils';

interface MessageProps {
  reversed?: boolean;
  avatarUrl?: string;
  message: string;
}
export default function Message({
  reversed,
  avatarUrl,
  message,
}: MessageProps) {
  return (
    <div
      className={classNameJoin(
        'flex items-center',
        reversed ? 'flex-row-reverse space-x-reverse' : 'space-x-3'
      )}>
      {reversed ? null : (
        <div className="aspect-square w-8 rounded-full bg-slate-400" />
      )}
      <div
        className={classNameJoin(
          'rounded-md py-2 px-4 text-sm',
          reversed ? 'bg-orange-500 text-gray-50' : 'bg-slate-200 text-gray-700'
        )}>
        <p>{message}</p>
      </div>
    </div>
  );
}
