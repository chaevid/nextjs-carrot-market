// UI Design from https://dribbble.com/shots/15996385-Ecommerce-elements/attachments/7835152?mode=media

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center gap-10 bg-slate-300 px-4 py-10 ">
      {/* #1 Select Item */}
      <div className="w-96 rounded-3xl bg-white px-8 py-6 shadow-xl">
        <div className="mb-4 text-2xl font-bold">Select Item</div>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-bold">$19</span>
        </div>
        <div className=" flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-bold">$80</span>
        </div>
        <div className="my-4 border border-dashed"></div>
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">$99</span>
        </div>
        <div className="mx-auto mt-6 w-2/3 rounded-xl bg-blue-500 p-3 text-center text-white">
          Checkout
        </div>
      </div>
      {/* #2 Profile */}
      <div className="w-96 rounded-3xl bg-blue-500 shadow-xl">
        <div className="flex justify-between px-8 py-6">
          <span className="text-2xl font-bold text-white">Profile</span>
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="m-auto h-8 w-8 stroke-white hover:stroke-cyan-700">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 ">
          <div className="relative -top-20 m-auto flex h-24 w-24 rounded-full bg-blue-300 text-center align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="m-auto block h-12 w-12">
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="relative -top-10 -mt-16 flex items-end justify-between ">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="text-lg font-medium">340</span>
            </div>

            <div className="flex flex-col items-center ">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="text-lg font-medium">$2,310</span>
            </div>
          </div>

          <div className=" -mt-6 flex flex-col items-center">
            <span className="text-xl font-medium">Tony Molly</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      {/* #3 Categories */}
      <div className="w-96 rounded-3xl bg-white p-8 shadow-xl"></div>
      {/* #4 Add to cart */}
      <div className="w-96 rounded-3xl bg-white p-8 shadow-xl"></div>
    </div>
  );
}
