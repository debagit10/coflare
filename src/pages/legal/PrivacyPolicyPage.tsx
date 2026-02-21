import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate tracking-wide">
                    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Welcome to Co-flare. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our
                        website and app and tell you about your privacy rights.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        When you use our services to report environmental incidents, we may collect:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Identity Data (such as username or email address)</li>
                        <li>Location Data (such as precise or approximate GPS coordinates when reporting an incident)</li>
                        <li>Media Data (photos and videos you upload)</li>
                        <li>Usage Data (information about how you use our application)</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Data</h2>
                    <p>We will only use your personal data for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>To verify and process environmental incident reports you submit.</li>
                        <li>To alert local authorities and nearby residents of immediate hazards.</li>
                        <li>To improve our predictive machine learning models regarding climate risks.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being
                        accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
