import { getTimeSinceCreation } from '@/lib/utils';
import Link from 'next/link';

interface LocalQuestionProps {
  id: number;
  user: string;
  location: string;
  question: string;
  createdTime: Date;
  interested: number;
  replies: number;
}
export default function LocalQuestion({
  id,
  user,
  location,
  question,
  createdTime,
  interested,
  replies,
}: LocalQuestionProps) {
  return (
    <div className="last:pb-4">
      <Link href={`community/${id}`}>
        <div className="flex cursor-pointer flex-col items-start pt-4">
          <span className="mx-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
            동네질문
          </span>
          <div className="mt-4 mb-2 px-4 text-base text-gray-700 md:text-xl ">
            <span className="pr-2 font-bold text-orange-500">Q.</span>
            {question}
          </div>
          <div className="flex w-full items-center justify-between px-4 py-4 text-xs font-medium text-gray-500">
            <span>{location}</span>
            <span>{getTimeSinceCreation(createdTime)}</span>
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
              <span>답변 {replies}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
