import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 mb-4 block">Legal</span>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                  Privacy Policy
                </h1>
                <p className="text-gray-600 font-medium">Last Updated: January 3, 2026</p>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <p>When you contact us for window or door installation services in Dallas, TX, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Property information and project details</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p>We use the information you provide to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide consultation and project planning services</li>
                    <li>Coordinate consultations and estimates</li>
                    <li>Communicate about your project</li>
                    <li>Improve our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Qualified professionals for project consultation and estimates</li>
                    <li>Service providers who assist with our operations</li>
                    <li>As required by law or to protect our rights</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p>If you have questions about this privacy policy or your personal information, please contact us at:</p>
                  <div className="bg-gray-100 p-6 rounded-lg mt-4">
                    <p className="font-semibold">Phone: 214-949-8227</p>
                    <p className="font-semibold">Email: hello@windowreplacementdallastx.com</p>
                    <p className="mt-2">909 Hidden Ridge Dr #180<br />Irving, TX 75038</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}