import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | ENAI',
  description: 'Privacy Policy for ENAI AI-powered sales automation platform.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <img
                src="/enai-logo.png"
                alt="ENAI Logo"
                width={60}
                height={30}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">ENAI</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: September 23, 2025</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 prose prose-gray max-w-none">
          <div className="mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
              ← Back to Home
            </Link>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Important Information</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1. General Terms</h3>
            <p>At Enai LIMITED. ("Enai," "we," "us" or "our"), putting our users ("you" or "your") first means exceeding global privacy and data protection standards in order to keep important contacts and sensitive data and communications private, safe and secure. We set up our infrastructure, applications, and tools in a way that enables you to strengthen and leverage your important relationships when they matter the most, without having to worry about data security or privacy concerns.</p>
            <p>Our Privacy Promise: No one will access, read, or delete your emails. &gt;Enai connects to your email service to provide the core functionalities of our Services.&lt; When Enai connects to your email server, we pull only the minimum amount of information required for our service to function. &gt;For example, if you connect a Gmail account, we will request specific Google API scopes as detailed in Section 3.8.&lt; Our server only stores emails you have sent via Enai &gt;and, depending on the features you use, responses received to those emails&lt;, so we can detect replies and you can have access to them from the application. You own your data. Your personal data will be kept private according to this policy and to the greatest extent allowed by the law.</p>
            <p>Additional questions? Don't hesitate to send us an email at enai.ai2024@gmail.com. Enai is committed to maintaining the privacy and security of any of your personal information on the website or in our applications or information received in any other manner. This Privacy Policy ("Agreement" or "Policy") defines how Enai uses and protects any personal information that it collects and stores.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2. Revision of the Privacy Policy</h3>
            <p>Enai reserves the right to revise, modify or update this Policy at any time. Your continued use of the Services after any such revisions, modifications or updates constitutes your acceptance of any such change. If we make any material changes we will notify you by posting the revised Privacy Policy on our Website or conspicuously in the Services and, if you subscribe to our Subscription Service, providing notice through the in-app Notifications.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Use of our services</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1. Our customers use</h3>
            <p>You can use the Services to create communication campaigns in order to reach out to or nurture prospects with sales, marketing or customer success purposes. Enai does not control the content of campaigns (text, email or other communications templates) or the types of information that our customers may choose to collect or manage using the Services. That information belongs to you and is used, disclosed and protected by them according to their privacy policies and is not subject to this Privacy Policy.</p>
            <p>Enai processes our customers' information as they direct and in accordance with our agreements with our customers, and we store it on our service providers' servers, but we do not have control over its collection or management. Our agreements with your customers prohibit us from using that information, except as necessary to provide and improve the Services, as permitted by this Privacy Policy, and as required by law. &gt;Enai has no direct relationship with the individuals whose Personal Information our Customers process. Individuals have the right to access, correct, delete, or update Personal Information they have provided using the Services.&lt; You control and are responsible for correcting, deleting or updating the information they have collected from you using the Services. If requested to remove data we will respond within a reasonable timeframe.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2. "Sensitive Information"</h3>
            <p>This refers to credit or debit card numbers, personal financial account information, Social Security numbers, passport numbers, driver's license numbers or similar personal identifiers, racial or ethnic origin, physical or mental health condition or information, or other employment, financial or health information. Also, sensitive information includes credentials to Enai application services or email accounts (Google or other providers) that are connected to Enai application.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information We Collect</h2>
            <p>When you provide Enai with your Personal Information you consent to our providing your information to any third parties that are necessary to offer, support and improve the Services. Enai also collects Personal Information from you when you place an order including your name, physical address, email address. Enai only uses this data for the purpose of fulfilling orders or communicating with you and Enai's partners regarding the Services.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1. When You Visit our Website</h3>
            <p>You are free to explore our Website without providing any Personal Information about yourself. Enai collects your Personal Information when you register and open an account with Enai to help us operate and support the Services and to contact you in connection with your use of the Services. Also, we collect navigational Information.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2. "Personal Information"</h3>
            <p>This refers to any information that you voluntarily submit to us and that identifies you personally, including contact information, such as your name, e-mail address, company name, address, phone number, and other information about yourself or your business. Personal Information can also include information about any transactions, both free and paid, that you enter into on the Websites, and information about you that is available on the internet, such as from Facebook, LinkedIn, Twitter and Google, or publicly available information that we acquire from service providers.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3. "Navigational Information"</h3>
            <p>This refers to information about your computer and your visits to and use of the Services such as your IP address, geographical location, browser type, referral source, length of visit and pages viewed. We use this information for the above purposes and to monitor and analyze use of the Services, for the Services' technical administration, to increase our Services' functionality and user-friendliness, to verify users have the authorization needed for the Services to process their requests, and for &gt;internal&lt; advertising purposes. &gt;(We use navigational data to advertise Enai's Services to users of Enai.)&lt; For more details please see the "Navigation Information" section below.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.4. Payment Information</h3>
            <p>We collect and process payment information from you when you subscribe to the Service, including credit card numbers and billing information, using third party PCI-compliant service providers. Except for this, we do not collect Sensitive Information from you.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.5. Information About Children</h3>
            <p>The Websites and our Services are not intended for or targeted at children under 13, and we do not knowingly or intentionally collect information about children under 13. If you believe that we have collected information about a child under 13, please contact us at enai.ai2024@gmail.com, so that we may delete the information.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.6. Information You Provide</h3>
            <p>You may also provide us with information that you post to the Services. Your questions, answers, and other contributions on the Services, and metadata about them (such as when you posted them), are publicly viewable on the Services. This information may be found by search engines and be published elsewhere on the web in accordance with our Terms of Service and this Policy.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.7. Disclosure regarding information received from Google APIs</h3>
            <p>Enai.ai use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.8. Google User Data</h3>
            <p>If you choose to connect a Gmail account to Enai, we will ask you to grant Enai application permissions to access your Gmail account. These permissions are necessary to sustain the functionality of our Services, as intended and described in the Terms of Service.</p>
            <p>In particular, with the appropriate scopes, we will need to access your inbox folder to detect replies to emails that have been sent via Enai. Our servers only store emails that you have sent via Enai and any responses you have received to those emails so we can detect replies, classify them, and provide access to them in your Enai account. All data obtained via Gmail API is available in your Enai account. Also, we will store your authentication token and account email address. This data will be securely stored to be used by Enai to provide you with the Services (including but not limited to logging into your account, sending emails via the Enai platform, accessing emails you sent, and viewing replies you received to these emails).</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.9 No Use of Google User Data for AI/ML Training</h3>
            <p>Enai LIMITED does not use any user data obtained through Google Workspace APIs (including, but not limited to, Gmail data) to develop, improve, or train any generalized artificial intelligence (AI) and/or machine learning (ML) models.</p>
            <p>At Enai, we do not use data obtained from our customers (from their Google accounts) for advertising purposes; this includes personalized, re-targeted, and interest-based advertising. Our employees, contractors, and any human, in general, are not allowed to access your personal information, including the data obtained via Google API. We could access user data only after obtaining the user's affirmative agreement. We may need access to the user data to resolve a support issue, provide advice on service usage or provide any other help requested by the user. Also, we can access such information when/if necessary for a security investigation or comply with applicable laws. To obtain more information, please reach out to our Data Protection Officer (enai.ai2024@gmail.com).</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Use of Information We Collect</h2>
            <p>Under no circumstances will this data be voluntarily shared with any third parties; Enai could only provide this information to legal authorities upon their lawful request.&lt;</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1. Navigational data, cookies and web beacons</h3>
            <p>A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Enai uses cookies to identify and track visitors, and your website access preferences. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Enai Services. Web beacons are electronic images (also called "gifs") that may be used in the Enai Services or in emails that help us to deliver cookies, count visits, understand usage and campaign effectiveness and determine whether an email has been opened and acted upon. You can decline to show gifs or pictures in your email clients to avoid being tracked by email web beacons. Also we use Navigational Information to operate and improve the Services.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2. Use of Personal Information</h3>
            <p>In addition to the uses identified elsewhere in this Privacy Policy, we may use your Personal Information to: (a) improve your browsing experience by personalizing and improving the Services; (b) send information to you which we think may be of interest to you by post, email, or other means; (c) send you marketing communications relating to our business or the businesses of carefully-selected third parties which we think may be of interest to you, &gt;(These third parties are [List categories or specific companies if possible, e.g., "CRM software providers," "sales training companies"]. The marketing may include [Describe types of marketing, e.g., "new product announcements," "special offers"]. We may contact you up to [Frequency, e.g., "once a month"] with these communications.)&lt; and (d) provide other companies with aggregated and Non-Personal Information about our users — but this information will not be used to identify any individual user,</p>
            <p>We may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, we do not transfer your unique Personal Information to the third party. In addition, we may share data with trusted partners to contact you based on your request to receive such communications, help us perform statistical analysis, or provide customer support. Such third parties are prohibited from using your Personal Information except for these purposes, and they are required to maintain the confidentiality of your information. If you do not want us to share your personal information with these companies, contact us at enai.ai2024@gmail.com.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3. Customer Testimonials and Comments</h3>
            <p>We post customer testimonials and comments in our Services, which may contain Personal Information. We obtain each customer's consent via email prior to posting the customer's name and testimonial.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.4. Use of Credit Card Information</h3>
            <p>If you give us credit card information, we use it solely to check your financial qualifications and collect payment from you. We use a third-party service provider to manage credit card processing. This service provider is not permitted to store, retain, or use information you provide except for the sole purpose of credit card processing on our behalf.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.5. Service Providers</h3>
            <p>We employ other companies and people to provide services to the visitors and users of the Services and we may need to share your information with them to provide information, products or services to you. Examples may include removing repetitive or invalid information from prospect lists, analyzing data, providing marketing assistance, processing credit card payments, supplementing the information you provide us in order to provide you with better service, and providing customer service. In all cases where we share your information with such third parties, we explicitly require the agent to acknowledge and adhere to our privacy and customer data handling policies.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.6. Confidentiality and Security of personal information</h3>
            <p>We use a variety of security technologies and procedures to help protect your Personal Information from unauthorized access, use or disclosure. We secure the Personal Information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. All the Personal Information we have where Enai acts as a processor for a customer's data (e.g., use of the Enai Services) is encrypted via database encryption. All connections to our Website or Services are protected via the use of encrypted connections, such as the Secure Socket Layer (SSL) protocol. &gt;Enai also stores all access tokens, which authorize our use to interact with connected third-party accounts, in encrypted form. Enai does not store passwords for the external mail services accessed through our Service.&lt; Do not forget that your account in Enai service is protected by your account password and we urge you to take steps to keep your personal information safe by not disclosing your password and keep it long and complicated enough and by logging out of your account after each use. If you have any questions about the security of your Personal Information, you can contact us at dpo@enai.io.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.7. Social Media</h3>
            <p>Our Websites include Social Media Features, such as the Facebook Like button and Widgets, such as the Share This button or interactive mini-programs that run on our sites. These features may collect your IP address, which page you are visiting on our sites, and may set a cookie to enable the feature to function properly. Social Media Features and Widgets are either hosted by a third party or hosted directly on our Websites. This Privacy Policy does not apply to these features. Your interactions with these features are governed by the privacy policy and other policies of the companies providing them.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.8. External Websites</h3>
            <p>Our Websites provide links to other websites. We do not control and are not responsible for, the content or practices of these other websites. Our provision of such links does not constitute our endorsement of these other websites, their content, their owners, or their practices. This Privacy Policy does not apply to these other websites, which are subject to any privacy and other policies they may have.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.9. Retention of Personal Information</h3>
            <p>We retain Personal Information that you provide us as long as we consider it potentially useful in contacting you about the Service or our other services, or as needed to comply with our legal obligations, resolve disputes and enforce our agreements, and then we securely delete the information. If you provide information to our customers as part of their use of the Enai Service, our customers decide how long to retain the personal information they collect from you. If a customer terminates its use of the Service, then we &gt;will&lt; provide a customer with access to all information stored for the customer by the Service, including any Personal Information provided by you, for export by the customer according to our agreement with our customer. After termination, we &gt;will&lt;, unless legally prohibited, delete all customer information, including your Personal Information, from the Enai Service.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.10. International Transfer of Information</h3>
            <p>If you are located outside the United States, the information that we collect from you may be transferred to and stored and processed at, a destination in the United States. By submitting information, you agree to this transfer, storing or processing. We will take all steps necessary to ensure that your information is treated securely and in accordance with this Privacy Policy. All our employees and contractors related to working with personal data as part of their duties are signed agreements that cover Enai and their responsibility regarding the transfer of data to remote working locations other than the United States. This Privacy Policy shall apply even if we transfer Personal Information to other countries.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.11. Sharing with Third-party applications</h3>
            <p>Certain aspects of the Enai Service allow or require you to connect with third-party applications or services. In connection with your use of any such third-party applications or services, such third parties may receive information about you including your username and any Content you choose to use in connection with those applications and services, and such third parties may contact you directly as necessary. The Enai Service may automatically collect and upload certain data from such applications via direct integrations or proxy services. This Privacy Policy does not apply to your use of such third party applications and services, and we are not responsible for how those third parties collect, use and disclose your information and Content. We encourage you to review the privacy policies of those third parties before connecting to or using their applications or services to learn more about their information and privacy practices.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.12. Compelled Disclosure</h3>
            <p>Enai reserves the right to use or disclose your Personal Information if required by law or if we reasonably believe that use or disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud and security breaches, or comply with a law, court order, or legal process.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.13. Data retention</h3>
            <p>After Enai account cancellation all the data within this account &gt;will be deleted within 60 days&lt;. At the same time, personal data of customers could be retained longer as needed for providing a legal and financial trace of past operations up to the time required by &gt;US&lt; law.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.14. Enai Database</h3>
            <p>Enai gathers current and historic business contact data. The data collected about individuals on the Enai Database comprises: Name; Employer Company & Company Details; Office Location (Country & City); Business Telephone Number; Business Email Address; Job Title. We also hold data in respect of your employer company such as its name, size, industry, website and industry. In order to provide certain aspects of its services, Enai requires a business email address to be recorded against profiles in its database. Where Enai does not have the business email address of a profile, it may generate a business email address based on the email address structure understood to be implemented by the employer company. The majority of the personal data we collect about you comes from publicly available sources such as from business and employment-oriented social networks, recruitment websites and company websites. Information is also gathered from correspondence with you (by email or phone), from our clients, recruiters and other premium data providers. Enai does not seek to collect any non-business-related data such as date of birth, home address, personal email or telephone number and Enai does not collect sensitive personal data. Enai obtains the data for its Business Profiles in several ways, including: Our search technology scans the web and gathers publicly-available information. We license information from other companies. Our users and customers contribute information about themselves or other people and companies. Through market research surveys, phone interviews, and other research conducted by our in-house research team.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.15. Anti-Spam Policy</h3>
            <p>We at Enai committed to providing customers with tools and expertise to curate highly targeted and relevant communications via our platform. We monitor and prohibit the use of the Enai Service to send unsolicited commercial email in violation of applicable laws as stated in our Terms of service, and requires the inclusion in every email sent using the Service of an "opt-out" mechanism and other required information. We require all of our customers to agree to adhere to the Terms of Service Policy at all times, and any violations of the Terms of Service Policy by a customer can result in suspension or termination of the Enai Service. We also provide customers with the tools to manage their sending reputation and customer success team work closely to monitor all customer metrics and best-practices to ensure high quality and targeted campaigns.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.16. To Unsubscribe From Our Communications</h3>
            <p>You may unsubscribe from our marketing communications by clicking on the "unsubscribe" link located on the bottom of our emails, or by sending us an email at enai.ai2024@gmail.com.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.17. To Unsubscribe from Our Customers' Communications</h3>
            <p>Our customers are solely responsible for their own sales or marketing emails and other communications; We make sure that all emails sent using Enai service have proper unsubscribe mechanics. You can unsubscribe from our customers' communications by clicking on the "unsubscribe" link located on the bottom of their emails, responding to unsubscribe via email or by contacting them directly. Any questions about this Privacy Policy should be addressed to enai.ai2024@gmail.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
