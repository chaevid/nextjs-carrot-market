import { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <div className="space-y-4 py-10 px-4">
      <div className="mx-auto flex flex-col items-center space-y-4">
        <div className="aspect-square w-24 rounded-full bg-slate-300" />

        <label
          htmlFor="picture"
          className="flex cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700
          focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Change Photo
          <input
            id="picture"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-500">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="w-full appearance-none rounded-md border border-gray-300 px-4 py-3 placeholder-gray-300 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          placeholder="chaevid@gmail.com"
          required
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-gray-500">
          Phone Number
        </label>
        <div className="flex items-center">
          <span className="rounded-l-md border border-r-0 border-gray-300 px-2 py-3 text-gray-500">
            +82
          </span>
          <input
            id="input"
            className="w-full appearance-none rounded-md rounded-l-none border border-gray-300 px-4 py-3 placeholder-gray-300 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            type="tel"
            placeholder="010-0000-0000"
            required
          />
        </div>
      </div>

      <button
        className="w-full rounded-md border border-transparent bg-orange-500 px-4 py-3 font-medium text-white shadow-sm 
          hover:bg-orange-600
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;
