export default function Contact() {
    return (
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
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
          <textarea
            placeholder="Your Message"
            className="border p-2 w-full rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }