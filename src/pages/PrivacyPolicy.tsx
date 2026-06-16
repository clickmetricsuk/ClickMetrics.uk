import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
  return (
    <div className="bg-jet-950 min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-2 text-silver-400 hover:text-silver-100 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-invert prose-silver max-w-none">
          <h1 className="font-display text-4xl font-bold text-silver-100 mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-silver-300 leading-relaxed">
            <p>
              This Privacy Policy governs the manner in which Click Metrics Ltd collects, uses, maintains and discloses information collected from users (each, a "User") of the http://www.clickmetrics.uk website ("Site"). This privacy policy applies to the Site and all products and services offered by Click Metrics Ltd.
            </p>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">Personal identification information</h2>
              <p>
                We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number.
              </p>
              <p>
                Users may, however, visit our Site anonymously.
              </p>
              <p>
                We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">Non-personal identification information</h2>
              <p>
                We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">Web browser cookies</h2>
              <p>
                Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">How we use collected information</h2>
              <p>Click Metrics Ltd collects and uses Users personal information for the following purposes:</p>

              <div className="space-y-3 ml-4">
                <div>
                  <h3 className="font-semibold text-silver-100">To improve customer service</h3>
                  <p>Your information helps us to more effectively respond to your customer service requests and support needs.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-silver-100">To improve our Site</h3>
                  <p>We continually strive to improve our website offerings based on the information and feedback we receive from you.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-silver-100">To administer a content, promotion, survey or other Site feature</h3>
                  <p>To send Users information they agreed to receive about topics we think will be of interest to them.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-silver-100">To send periodic emails</h3>
                  <p>
                    The email address Users provide for order processing, will only be used to send them information and updates pertaining to their order. It may also be used to respond to their inquiries, and/or other requests or questions. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">How we protect your information</h2>
              <p>
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">Third party websites</h2>
              <p>
                Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">Changes to this privacy policy</h2>
              <p>
                Click Metrics Ltd has the discretion to update this privacy policy at any time. When we do, revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">Your acceptance of these terms</h2>
              <p>
                By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-silver-100 mt-8">Contacting us</h2>
              <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
              <div className="ml-4 space-y-1">
                <p className="font-semibold text-silver-100">Click Metrics Ltd</p>
                <p>
                  <a href="http://www.clickmetrics.uk" className="text-silver-400 hover:text-silver-100 transition-colors">
                    http://www.clickmetrics.uk
                  </a>
                </p>
                <p>077385 30261</p>
                <p>
                  <a href="mailto:michael@clickmetrics.uk" className="text-silver-400 hover:text-silver-100 transition-colors">
                    michael@clickmetrics.uk
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
