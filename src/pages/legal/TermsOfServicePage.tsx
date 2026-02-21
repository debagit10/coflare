import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate tracking-wide">
                    <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Please read these terms and conditions carefully before using the Co-flare platform.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our service, you agree to be bound by these Terms. If you disagree
                        with any part of the terms, then you may not access the service.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">2. User Content</h2>
                    <p>
                        Our Service allows you to post, link, store, share and otherwise make available certain information,
                        text, graphics, videos, or other material ("Content"). You are responsible for the Content that you
                        post to the Service, including its legality, reliability, and appropriateness.
                        By posting Content to the Service, you grant us the right and license to use, modify, publicly perform,
                        publicly display, reproduce, and distribute such Content on and through the Service.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">3. Community Guidelines</h2>
                    <p>
                        When submitting environmental reports, you agree not to submit false, misleading, or abusive
                        reports. Intentional misuse of the reporting tools may result in account termination.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>
                        Co-flare relies on community-reported data. We do not guarantee the accuracy, completeness,
                        or speed of incident reports. Always rely on official emergency broadcast systems for critical
                        life-saving information.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
