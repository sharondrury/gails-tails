const ContactUs = () => {
  return (
    <>
      <section className="py-10 px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have a question or want to book a walk? Drop us a message and we
            will get back to you as soon as possible.
          </p>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-sm" htmlFor="contact-name">
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Jane Smith"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F38299]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-sm" htmlFor="contact-email">
                Email address
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="jane@example.com"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F38299]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-sm" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell us about your dog and what you need..."
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F38299] resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#F38299] hover:bg-[#fab0b9] font-bold px-6 py-3 rounded-3xl self-start transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactUs
