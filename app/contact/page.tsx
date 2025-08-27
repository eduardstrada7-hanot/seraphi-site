export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl mb-8">Get in touch with the SERA PHI team.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-white/70">1234 Immersive Way<br />Philadelphia, PA 19123</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-white/70">(215) 555-0123</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/70">info@seraphi.org</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-white/70">
                  Monday - Friday: 10:00 AM - 8:00 PM<br />
                  Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: By appointment only
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-white/40"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-white/40"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-white/40">
                  <option>General Inquiry</option>
                  <option>Booking Question</option>
                  <option>Event Planning</option>
                  <option>Studio Session</option>
                  <option>Sound Therapy</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-white/40"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
