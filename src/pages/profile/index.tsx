import IconButton from 'components/icon-button';
import Layout from 'components/layout';
import Review from 'components/review';
import type { NextPage } from 'next';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max + 1);
}

const Profile: NextPage = () => {
  return (
    <Layout
      title="My Carrot"
      hasBtmNav>
      <div className="space-y-4 divide-y py-4">
        {/* Profile */}
        <div className="flex items-center space-x-4 px-4">
          <div className="aspect-square w-16 rounded-full bg-slate-300" />
          <div className="flex flex-col">
            <span className="font-medium text-gray-900">Steve Jebs</span>
            <span className="text-sm text-gray-700">Edit profile &rarr;</span>
          </div>
        </div>
        {/* Sold & Purchases & Favorites */}
        <div className="flex items-center justify-around px-4 pt-4">
          <IconButton
            href="/profile/sold"
            width="w-12"
            label={`Sold`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>
          </IconButton>
          <IconButton
            href="/profile/purchases"
            width="w-12"
            label={`Purchases`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </IconButton>
          <IconButton
            href="/profile/favorites"
            width="w-12"
            label={`Favorites`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </IconButton>
        </div>
        {/* Reviews */}
        <div className="space-y-4 divide-y px-4">
          {[...Array(5)].map((_, i) => (
            <Review
              id={i}
              key={i}
              nickname={`User ${i}`}
              stars={getRandomInt(5)}
              content={`Content ${i} - Normally, both your asses would be dead as fucking fried chicken, 
            but you happen to pull this shit while I'm in a transitional
            period so I don't wanna kill you, I wanna help you. `}></Review>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
