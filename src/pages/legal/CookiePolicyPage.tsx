import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate tracking-wide">
                    <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
                    <p className="text-muted-foreground mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        This Cookie Policy explains how EcoWatch utilizes cookies and similar technologies to recognize you
                        when you visit our platform.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">1. What are cookies?</h2>
                    <p>
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                        Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
                        as well as to provide reporting information.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">2. Why do we use cookies?</h2>
                    <p>
                        We use essential cookies to maintain your session (keeping you logged in) and to remember your regional
                        preferences on the live map. We also use analytics cookies to understand how our application is being used
                        so we can improve its performance.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">3. How can I control cookies?</h2>
                    <p>
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights
                        by setting your preferences in your web browser controls. Note that restricting cookies may impact the
                        functionality of the EcoWatch platform.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
