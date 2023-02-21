interface InputMessageProps {
  onClick?: () => void;
}

export default function InputMessage({ onClick }: InputMessageProps) {
  return (
    <div className="fixed inset-x-0 bottom-4 mx-auto w-full max-w-screen-md px-4">
      <div className="relative flex items-center ">
        <input
          type="text"
          className="w-full rounded-full border-gray-300 py-3 pr-16
          shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <div className="absolute right-3 flex">
          <button
            onClick={onClick}
            className="flex aspect-square h-8 items-center justify-center rounded-full bg-orange-500 text-white
          hover:bg-orange-600
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
