import { classNameJoin } from 'lib/utils';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <>
      <div className="fixed top-4 flex w-full items-center justify-center border-b bg-white py-4 text-lg font-medium">
        {title ? <span>{title}</span> : 'NULL'}
      </div>
      <div className={classNameJoin('pt-16', hasTabBar ? 'pb-16' : '')}>
        {children}
      </div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex w-full justify-between border-t bg-slate-200 pb-10 pt-3 text-gray-800">
          <span>Home</span>
          <span>My Local</span>
          <span>Live</span>
          <span>Chats</span>
          <span>My Karrot</span>
        </nav>
      ) : null}
    </>
  );
}
