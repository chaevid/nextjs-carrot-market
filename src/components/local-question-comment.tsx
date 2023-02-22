import { getTimeSinceCreation } from '@/lib/utils';
import Avatar from './avatar';

interface LocalQuestionCommentProps {
  id: number;
  user: string;
  location: string;
  createdTime: Date;
  comment: string;
}
export default function LocalQuestionComment({
  id,
  user,
  location,
  createdTime,
  comment,
}: LocalQuestionCommentProps) {
  return (
    <div
      key={id}
      className="mt-4 flex items-start space-x-3 px-4">
      <Avatar width={10}></Avatar>

      <div>
        <span className="block text-sm font-medium text-gray-700">{user}</span>
        <span className="block text-xs text-gray-500 ">
          {location} • {getTimeSinceCreation(createdTime)}
        </span>
        <p className="mt-2 text-gray-700">{comment}</p>
      </div>
    </div>
  );
}
