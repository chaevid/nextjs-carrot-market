// UI Design from https://dribbble.com/shots/15996385-Ecommerce-elements/attachments/7835152?mode=media

import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center gap-10 bg-slate-300 px-4 py-10">
      {/* #1 Select Item */}
      <div className="flex w-96 flex-col rounded-3xl bg-white p-6 shadow-xl ">
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
        <button
          className="mx-auto mt-6 w-2/3 rounded-xl bg-blue-500 p-3 text-center text-white 
        hover:bg-teal-500 hover:text-black
        focus:bg-red-500 focus:text-black
         active:bg-yellow-500">
          Checkout
        </button>
      </div>
      {/* #2 Profile */}
      <div className="group w-96 rounded-3xl bg-blue-500 shadow-xl">
        <div className="flex justify-between p-6">
          <span className="text-2xl font-bold text-white">Profile</span>
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="m-auto h-8 w-8 stroke-white hover:stroke-cyan-700 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-6 ">
          <div className="relative -top-20 m-auto flex h-24 w-24 rounded-full bg-blue-300 text-center align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" m-auto block h-12 w-12 text-white transition-colors group-hover:text-black">
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="relative -top-12 -mt-12 flex items-end justify-between ">
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
      {/* #3 Chair - Add to cart */}
      <div className="w-96 rounded-3xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <span>
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </span>
          <span className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-arws-gold">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">4.9</span>
            </div>
            <button
              type="button"
              className="h-10 w-10 rounded-lg bg-white shadow-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="currentColor"
                className="m-auto h-6 w-6 text-pink-500">
                <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1Z" />
              </svg>
            </button>
          </span>
        </div>
        <div className="my-4 h-80 bg-slate-300"></div>
        <div className="my-4 flex flex-col">
          <span className="text-xl  font-medium">Swoon Lounge</span>
          <span className="text-sm text-gray-500">Chair</span>
          <div>
            <div className="mt-2 flex  items-center justify-between ">
              <div className="ml-1 flex space-x-4 ">
                <button className="h-4 w-4 rounded-full bg-emerald-500 ring-emerald-400 ring-offset-4 transition-all focus:ring-2"></button>
                <button className="h-4 w-4 rounded-full bg-green-400 ring-green-300 ring-offset-4 transition-all focus:ring-2"></button>
                <button className="h-4 w-4 rounded-full bg-indigo-900 ring-indigo-800 ring-offset-4 transition-all focus:ring-2"></button>
              </div>
              <div className="flex items-center space-x-6">
                <button className="aspect-square w-8 rounded-md bg-blue-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-auto h-4 w-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
                <span className="text-2xl font-bold">1</span>
                <button className="aspect-square w-8 rounded-md bg-blue-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-auto h-4 w-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between ">
          <span className="my-auto text-3xl font-bold">$450</span>
          <button className="rounded-xl bg-blue-500 px-12 py-4 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
