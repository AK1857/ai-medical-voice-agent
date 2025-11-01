
const SuggestedDoctors = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Suggested Doctor</h2>
      <div className="flex items-center space-x-4">
        <img
          src="/doctor-avatar.jpg"
          alt="Doctor Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-md font-medium">Dr. Jane Smith</h3>
          <p className="text-sm text-gray-600">Cardiologist</p>
          <p className="text-sm text-gray-600">5 years experience</p>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
}

export default SuggestedDoctors;