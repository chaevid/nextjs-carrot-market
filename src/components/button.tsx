interface ButtonProps {
  text: string;
}
export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="w-full rounded-md border border-transparent bg-orange-500 px-4 py-3 font-medium text-white shadow-sm 
    hover:bg-orange-600
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
      {text}
    </button>
  );
}
