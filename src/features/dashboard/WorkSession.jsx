export default function WorkSession() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
      <h3 className="font-semibold text-slate-800 mb-4">
        Work Session
      </h3>

      <p className="text-3xl font-bold mb-6">
        02:15:34
      </p>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        End Session
      </button>
    </div>
  );
}
