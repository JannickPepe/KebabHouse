export default function Booking() {
    return (
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Book a Table</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full rounded-md"
          />
          <input
            type="datetime-local"
            placeholder="Date and Time"
            className="border p-2 w-full rounded-md"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    );
  }