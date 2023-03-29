import { getTimeSinceCreation } from '@/lib/client/utils';
import Avatar from './avatar';

interface LocalQuestionDetailProps {
  id: number;
  user: string;
  location: string;
  question: string;
  createdTime: Date;
  interested: number;
  comments: number;
  views: number;
}
export default function LocalQuestionDetail({
  user,
  location,
  question,
  createdTime,
  interested,
  comments,
  views,
}: LocalQuestionDetailProps) {
  return (
    <div className="my-4 flex cursor-pointer flex-col items-start">
      <span className="mx-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
        동네질문
      </span>
      <div className="mt-4 mb-2 flex w-full items-center space-x-3 px-4 text-base text-gray-700 md:text-xl">
        <Avatar width={12}></Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">{user}</span>
          <span className="text-xs font-normal text-gray-500">
            Verifed in {location} • {getTimeSinceCreation(createdTime)}
          </span>
        </div>
      </div>
      <div className="my-2 px-4 text-base text-gray-700 md:text-xl ">
        <span className="pr-2 font-bold text-orange-500">Q.</span>
        {question}
      </div>
      <div className="flex w-full items-center justify-between px-4 py-4 text-xs font-medium text-gray-500">
        <span> {views === 1 ? `${views} view` : `${views} views`}</span>
      </div>
      <div className="flex w-full space-x-8 border-t px-4 pt-4 text-sm text-gray-700">
        <span className="flex items-center space-x-2">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>궁금해요 {interested}</span>
        </span>
        <span className="flex items-center space-x-2">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          <span>답변 {comments}</span>
        </span>
      </div>
    </div>
  );
}
