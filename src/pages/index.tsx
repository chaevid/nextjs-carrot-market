export default function Home() {
  return (
    <div className="grid gap-10 bg-slate-300 px-4 py-10">
      <div className="rounded-3xl bg-white p-10 shadow-xl ">
        <div className="mb-4 text-3xl font-bold">Select Item</div>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-bold">$19</span>
        </div>
        <div className=" flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-bold">$80</span>
        </div>
        <div className="my-2 border border-dashed "></div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-bold">$99</span>
        </div>
        <div className="mx-auto mt-4 w-1/2 rounded-xl bg-blue-600 p-4 text-center text-white">
          Checkout
        </div>
      </div>
      <div className="rounded-3xl bg-white p-10 shadow-xl"></div>
      <div className="rounded-3xl bg-white p-10 shadow-xl"></div>
      <div className="rounded-3xl bg-white p-10 shadow-xl"></div>
    </div>
  );
}
