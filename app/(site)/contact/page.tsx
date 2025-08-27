import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-gray-300">1234 Music Street</p>
                  <p className="text-gray-300">Philadelphia, PA 19123</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-300">(215) 555-0123</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-300">hello@seraphi.org</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <p className="text-gray-300">By appointment only</p>
                  <p className="text-gray-300">Events available 7 days a week</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Services</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  Music Studio Sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  Event Venue Bookings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  Sound Therapy Appointments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  Superfood Elixir Orders
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  Consultation Bookings
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
