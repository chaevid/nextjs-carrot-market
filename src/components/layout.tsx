import Link from 'next/link';
import { classNameJoin } from '@/lib/client/utils';
import { useRouter } from 'next/router';
import BottomNavigation from './bottom-navigation';
import Header from './header';
// import BottomNavigation from './bottom-navigation';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasBtmNav?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasBtmNav,
  children,
}: LayoutProps) {
  return (
    <>
      <Header
        title={title}
        canGoBack={canGoBack}></Header>

      <div className={classNameJoin('pt-16', hasBtmNav ? 'pb-16' : '')}>
        {children}
      </div>

      {hasBtmNav ? <BottomNavigation></BottomNavigation> : null}
    </>
  );
}
