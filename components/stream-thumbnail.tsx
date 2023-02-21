import { classNameJoin } from 'lib/utils';

interface StreamThumbnailProps {
  id: number;
  largeTitle?: boolan;
  title: string;
}

export default function StreamThumbnail({
  id,
  largeTitle = false,
  title,
}: StreamThumbnailProps) {
  return (
    <div
      key={id}
      className="px-4 pt-4">
      <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm"></div>
      <h3
        className={classNameJoin(
          'my-4 items-start text-start text-gray-700',
          largeTitle ? 'pb-2 text-2xl font-medium' : 'text-lg'
        )}>
        {title}
      </h3>
    </div>
  );
}

// <div className="aspect-video  rounded-md bg-slate-300 shadow-sm"></div>
// <h3 className="mt-4 items-start text-2xl font-medium text-gray-700">
//   Let&apos;s Try Potatoes!
// </h3>
