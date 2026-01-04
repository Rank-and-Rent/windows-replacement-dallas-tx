import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
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
                  Terms of Service
                </h1>
                <p className="text-gray-600 font-medium">Last Updated: January 3, 2026</p>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
                  <p>
                    This website provides information about window and door installation services in Dallas, TX. We provide educational resources and project consultation to help property owners make informed decisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">No Direct Installation Services</h2>
                  <p>
                    We provide consultation and project planning services. Installation work is performed by qualified professionals with appropriate expertise and certifications.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                  <p>When using our service, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate information about your project</li>
                    <li>Obtain multiple quotes for comparison</li>
                    <li>Check references and credentials independently</li>
                    <li>Verify all contractor qualifications and insurance</li>
                    <li>Ensure all necessary permits are obtained</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Content Only</h2>
                  <p>
                    Information provided on this website is educational in nature. It is not engineering advice, legal advice, or construction advice. Consult with qualified professionals for specific project guidance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">No Warranties or Guarantees</h2>
                  <p>
                    We make no warranties or guarantees about the work performed by independent contractors. Any warranties or guarantees related to installation work are provided solely by the contractor and manufacturer.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Coordination</h2>
                  <p>
                    We connect property owners with qualified contractors for consultation and project coordination. We do not perform installation work ourselves and are not responsible for the quality or timeliness of work performed by independent contractors.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p>If you have questions about these terms, please contact us at:</p>
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