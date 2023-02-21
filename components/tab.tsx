import { classNameJoin } from 'lib/utils';

interface TabProps {
  label: string;
  isSelected?: boolean;
  onClick: () => void;
}
export default function Tab({ label, isSelected = false, onClick }: TabProps) {
  return (
    <button
      className={classNameJoin(
        'border-b-2 p-4 font-medium',
        isSelected === true
          ? ' border-orange-500  text-orange-500 '
          : 'border-transparent text-gray-500'
      )}
      onClick={onClick}>
      {label}
    </button>
  );
}
