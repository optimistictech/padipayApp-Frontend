import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';
const PrivacyPolicyPage = () => {
  return (
    <div className='primaryFont'>
      <Navbar />

      <div className='p-10 mx-auto text-justify mb-8'>
        <h1 className='font-bold text-5xl text-left text-blue-900 pt-20 pb-10'>
          Privacy Policy
        </h1>
        <p className=''>Last modified: Aug 31, 2023.</p>
        <h3 className=' mt-10 font-bold text-2xl'>Introduction</h3>
        <p className=''>
          PadiPay is a peer-to-peer lending application by PadiPay Technology
          Limited (“PadiPay”) that connects verified borrowers to verified
          lenders with the goals of receiving a loan and funding a loan
          respectively. PadiPay will enable borrowers to obtain loans directly
          from lenders, cutting out middlemen and reducing the risk of default.
          This Privacy Policy (together with our Terms of Use) explains what
          information we collect, how we collect, share, use and protect your
          personal information when you visit or use the Application, our
          website, and other services offered by PadiPay. Please read this
          Policy carefully to understand how we collect, use and store your
          personal data. By continuing to use our Application, visit our
          website, or accessing any of our services, you consent to our usage of
          your personal information as described in this Policy. Unless
          otherwise defined, terms used in this Privacy Policy have the same
          meanings as in our Terms of use.
        </p>
        <ol>
          <li className=' font-bold mt-5'>Information Collection And Use</li>
          <p className=''>
            We collect several types of information for various purposes to
            provide and improve our Service to you. Your information is sent to
            our servers at https://api.PadiPay.com which is secure. All
            information supplied by you as defined under the Terms of Use is
            covered by the provisions of the laws of Nigeria and other extant
            laws and regulations regarding the use and management of personal
            data.
          </p>
          <li className=' font-bold mt-5'>
            Type Of Data Collected Personal Data
          </li>
          <p className=''>
            While using our Service, we will ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (“Personal Data”). Personally identifiable information
            that we collect includes, but is not limited to, email address, BVN,
            phone number, date of birth, personal identification documents,
            personal financial statements, third parties (e.g. banks,
            clearinghouses, payment service providers, credit bureaus, etc.),
            interaction and communication with our staff, and any communication
            with PadiPay. We also collect your phone contact for purposes of
            allowing you to reference your contact list from our App.
          </p>
          <li className=' font-bold mt-5'>Permissions</li>
          <p className=''>
            We ask for your permissions to collect following data that will help
            us in making decisions on your eligibility for loans:
          </p>
          <ul>
            <li className=' font-bold mt-5'>Contact</li>
            <p className=''>
              We collect your phone book contacts which includes your phone
              contact names, phone numbers, contact added date to augment your
              credit profile, additionally, this can allow you to choose your
              references in the loan application or share our app invitation to
              your friends easily. Specifically this is required for our Bail Me
              product and you will not need to give this permission if you are
              not using BailMe on the App.Your contact data on our platform is
              highly protected.
            </p>
          </ul>
          <ul>
            <li className=' font-bold mt-5'>Device</li>
            <p className=''>
              Collect and monitor specific information about your device
              including your device name, model, region and language settings,
              device identification code, device hardware and software
              information, status, usage habits, unique device identifiers like
              IMEI and serial number to uniquely identify the device and ensure
              that unauthorized devices are not to act on your behalf to prevent
              frauds. Your device data on our platform is highly protected.
            </p>
          </ul>
          <ul>
            <li className=' font-bold mt-5'>Location</li>
            <p className=''>
              Collect and monitor information about the location of your device
              for customer risk assessment and scoring. Your location data on
              our platform is highly protected.
            </p>
          </ul>
          <ul>
            <li className=' font-bold mt-5'>Selfie Image</li>
            <p className=''>
              We collect your Selfie image through your phone camera but we do
              not access your photos. The selfie image captured on our app is
              compared with photo from your identity card or Bank Verification
              Number to determine that you are same person. Your selfie image
              data on our platform is highly protected.
            </p>
          </ul>
          <li className=' font-bold mt-5'>Cookies And Usage Data</li>
          <p className=''>
            Usage Data: When you access the Application or our services by or
            through a mobile device, we may collect certain information
            automatically, including, but not limited to, the type of mobile
            device you use, your mobile device unique ID, the IP address of your
            mobile device, your mobile operating system, the type of mobile
            internet browser you use, unique device identifiers and other
            diagnostic data (“Usage Data”).
          </p>
          <li className=' font-bold mt-5'>Use Of Data</li>
          <p className=''>
            We will use your collected data for various purposes including:
          </p>
          <ul>
            <li className=' mt-5'>
              Establishing your identity and assessing your eligibility for our
              products and services.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>Updating and enhancing our records.</li>
          </ul>
          <ul>
            <li className=' mt-5'>Customer relationship management.</li>
          </ul>
          <ul>
            <li className=' mt-5'>Risk identification and management.</li>
          </ul>
          <ul>
            <li className=' mt-5'>
              Investigation and prevention of illegal and fraudulent activity.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              Conducting and improving our business and improving customer
              service experience.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              Complying with legal obligations and assisting law enforcement
              agencies.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              Identifying and informing you about other products and services
              that we think may be of interest to you, and changes to the
              Application and Service.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              To allow you to participate in interactive features of the
              Application or our Services when you choose to do so.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              To monitor the usage of the Application and Services.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              To detect, prevent, and address technical issues.
            </li>
          </ul>
          <li className=' font-bold mt-5'>Transfer Of Data</li>
          <p className=''>
            Your information, including Personal Data, may be transferred to and
            maintained on computers located outside of your state, province,
            country or other governmental jurisdiction where the data protection
            laws may differ than those from your jurisdiction. If you are
            located outside Nigeria and choose to provide information to us,
            please note that we transfer the data, including Personal Data, to
            Nigeria and process it there. Your consent to this Privacy Policy
            followed by your submission of such information represents your
            agreement to that transfer. We will take all steps reasonably
            necessary to ensure that your data is treated securely and in
            accordance with this Privacy Policy and no transfer of your Personal
            Data will take place to an organization or a country unless there
            are adequate controls in place including the security of your data
            and other personal information.
          </p>
          <li className=' font-bold mt-5'>Disclosure of Data</li>
          <p className=''>
            We may disclose your Personal Data in the good faith belief that
            such action is necessary:
          </p>
          <ul>
            <li className=' mt-5'>To comply with a legal obligation.</li>
          </ul>
          <ul>
            <li className=' mt-5'>
              To protect and defend our rights or property.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              To prevent or investigate possible wrongdoing in connection with
              the Service.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>
              To protect the personal safety of users of our Services or the
              public.
            </li>
          </ul>
          <ul>
            <li className=' mt-5'>To protect against legal liability.</li>
          </ul>
          <p className=''>
            To the extent that it is necessary and permitted by law, we may
            reveal or share your information with the following people:
          </p>
          <ul>
            <li className=' mt-5'>Our employees.</li>
            <li className=' mt-5'>
              Our subsidiaries, affiliates, and strategic partners .
            </li>
            <li className=' mt-5'>
              Financial services providers including other banks, clearing
              houses, credit bureaus, payment service providers, etc.
            </li>
            <li className=' mt-5'>
              Courts, regulators, government agencies, law enforcement agencies,
              etc.
            </li>
          </ul>
          <li className=' font-bold mt-5'>Security Of Data</li>
          <p className=''>
            The security of your data is important to us but remember that no
            method of transmission over the Internet, or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security. PadiPay takes the safeguarding of your
            personal information very seriously. We maintain physical,
            electronic and procedural safeguards that comply with applicable
            laws and regulations to ensure the security of your information,
            prevention of unauthorized access and use, accidental or unlawful
            alteration and destruction; and other unlawful or unauthorized forms
            of processing.
          </p>
          <p className=''>
            We regularly update our security protocols and processes to meet
            industry standards. If you have been provided a password to grant
            you access to the Application or specific areas on our website, you
            are responsible for keeping this password confidential. You must not
            share your password or other authentication details with anyone,
            PadiPay will not be responsible for any losses you may incur if you
            disclose your password and/or authentication details. We will store
            and retain your data for as long as is necessary for the purpose(s)
            that it was collected. Storage of your data is also determined by
            legal, regulatory, administrative or operational requirements.
          </p>
          <li className=' mt-5 font-bold'>Service Providers</li>
          <p className=''>
            We may employ third party companies and individuals to facilitate
            our Service (“Service Providers”), to provide the Service on our
            behalf, to perform Service-related services or to assist us in
            analyzing how our Service is used. These third parties have access
            to your Personal Data only to perform these tasks on our behalf and
            are obligated not to disclose or use it for any other purpose.
          </p>
          <li className=' mt-5 font-bold'>Links to Other Sites</li>
          <p className=''>
            Our Services may contain links to other sites that are not operated
            by us. If you click on a third-party link, you will be directed to
            that third party’s site. We strongly advise you to review the
            privacy policy of every site you visit. We have no control over and
            assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
          </p>
          <li className=' mt-5 font-bold'>Children’s Privacy</li>
          <p className=''>
            Our Services does not address anyone under the age of 18
            (“Children”). We do not knowingly collect personally identifiable
            information from anyone under the age of 18. If you are a parent or
            guardian and you are aware that your children have provided us with
            personal data, please contact us. If we become aware that we have
            collected personal data from children without verification of
            parental consent, we take steps to remove that information from our
            servers.
          </p>
          <li className=' mt-5 font-bold'>Your Data Privacy Rights</li>
          <ol>
            <li className=' mt-5'>
              Right to Rectification: You can modify or change their email,
              password, PIN, and profile picture via your profile.
            </li>
            <li className=' mt-5'>
              Right of Access, Right to Erasure, Right to Restrict Processing:
              You can request access or erasure of their personal information,
              as well as request restrictions on further processing of their
              personal information by contacting us at support@PadiPay.com.
              Please allow up to 30 days for requests to be processed. We
              reserve the right to charge a reasonable fee to process excessive
              or repeat requests.
            </li>
            <li className=' mt-5'>
              Right to Withdraw Consent: You can stop receiving our promotional
              emails by following the unsubscribe instructions included in every
              email we send, or by adjusting your Marketing Preferences in your
              profile. You also have choices with respect to cookies, as
              described above. By modifying your browser preferences, you have
              the choice to accept all cookies, to be notified when a cookie is
              set, or to reject all cookies. If you choose to reject all cookies
              some parts of our Application and website may not work properly in
              your case.
            </li>
            <li className=' mt-5'>
              Right to lodge a complaint with a supervisory authority: Should
              you feel your data privacy rights are not being adequately
              protected by us, you have the right to lodge a formal complaint
              with the appropriate supervisory authority.
            </li>
          </ol>
          <li className=' mt-5 font-bold'>Changes to This Privacy Policy</li>
          <p className=''>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            We will let you know via email and/or a prominent notice on our
            Service, prior to the change becoming effective and update the
            “effective date” at the top of this Privacy Policy. You are advised
            to review this Privacy Policy periodically for any changes. Changes
            to this Privacy Policy are effective when they are posted on this
            page.
          </p>
          <li className=' mt-5 font-bold'>Contact Us</li>
          <p className=''>
            Contact us if you have questions regarding your data privacy rights
            or would like to submit a related data privacy right request, please
            email us at
            <strong>
              <em className='text-blue-900'>support@PadiPay.com.</em>
            </strong>
            Please allow up to 30 days for requests to be processed. The Company
            reserves the right to charge a reasonable fee to process excessive
            or repeat requests. Contact us if you have any questions about this
            Privacy Policy, please contact us:
            <strong>
              <em className='text-blue-900'>support@padipay.com.</em>
            </strong>
          </p>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
