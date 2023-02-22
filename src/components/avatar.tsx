interface AvatarProps {
  width?: number;
  avatarUrl?: string;
}
export default function Avatar({ width = 24, avatarUrl }: AvatarProps) {
  return (
    <div className={`aspect-square w-${width} rounded-full bg-slate-300`} />
  );
}
