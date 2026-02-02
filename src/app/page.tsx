export const runtime = 'edge';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-slate-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Lindisfarn FarmOS&nbsp;
          <code className="font-bold">v0.1</code>
        </p>
      </div>

      <div className="mt-10 w-full max-w-md grid gap-6">
        {/* Daily Log Widget */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-4 text-slate-800">📋 Daily Log</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Feed Added (lbs)</label>
              <input type="number" placeholder="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Mortality</label>
              <input type="number" placeholder="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 font-medium">Log Entry</button>
          </form>
        </div>

        {/* Bob Chat Widget */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-4 text-slate-800">💬 Talk to Bob</h2>
          <p className="text-xs text-slate-500 mb-2">Report bugs or ask for features.</p>
          <textarea className="w-full border rounded-md p-2 h-24 mb-2" placeholder="Hey Bob, the feed calculation is off..."></textarea>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-medium">Send to Bob</button>
        </div>
      </div>
    </main>
  );
}
