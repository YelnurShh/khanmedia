// app/privacy/page.tsx

export const metadata = {
  title: "Privacy Policy | Keeper App",
  description: "Privacy Policy for Keeper App (Kazakhstan)",
};

const EFFECTIVE_DATE = "August 23, 2025";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10 leading-7">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy for Keeper App</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: {EFFECTIVE_DATE}</p>

      <p className="mb-6">
        <strong>Keeper App</strong> respects your privacy. This policy explains what data (if any) is collected and how it is used.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Data We Collect</h2>
        <p>
          Keeper App does not require user registration and does not collect personal information such as name or email. 
          All browsing history or scanned site results are stored locally on your device using Hive. We do not transfer this data to our servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Use of Third-Party Services</h2>
        <p>
          We use the following services solely to provide app functionality:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Groq API:</strong> Used for AI-based analysis of websites. Requests may be sent to Groq servers, but we do not attach any user-identifiable data.
          </li>
          <li>
            <strong>Google Translate API:</strong> Used to translate text within the app. Only the text you request to translate is sent to Google servers.
          </li>
        </ul>
        <p>Both services process data according to their own privacy policies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Data Security & Storage</h2>
        <p>
          All your data is stored locally on your device. We do not have access to it. If you delete the app or clear local storage, your data will be erased.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Children’s Privacy</h2>
        <p>
          The app does not specifically target children and does not knowingly collect personal data from children.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Changes to Policy</h2>
        <p>
          We may update this policy. The latest version will always be available in the app.
        </p>
      </section>

      <section id="contact" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
        <p>If you have any questions, contact us:</p>
        <ul className="list-disc pl-6">
          <li>
            Email: <a href="mailto:yelnurshakhar@gmail.com" className="underline">yelnurshakhar@gmail.com</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
