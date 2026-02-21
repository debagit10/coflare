import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function DataPolicyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate tracking-wide">
                    <h1 className="text-4xl font-bold mb-6">Data Policy</h1>
                    <p className="text-muted-foreground mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Co-flare's core mission revolves around the collection, analysis, and transparent distribution
                        of environmental data. This policy outlines how we handle the environmental data submitted.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">1. Open Data Principles</h2>
                    <p>
                        We believe environmental data should be freely accessible to researchers, governments, and citizens.
                        Anonymized incident reports (removing submitter identity) are made available through our Public Data
                        API and downloadable datasets.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">2. Data Ownership</h2>
                    <p>
                        While you retain ownership of the photos and videos you submit, you grant Co-flare a perpetual,
                        irrevocable license to utilize this data to improve environmental modeling and for public distribution.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Retention</h2>
                    <p>
                        We retain environmental incident data indefinitely for historical analysis and climate tracking purposes.
                        Personal identifying information linked to the reporting account can be deleted upon request, leaving
                        the environmental data anonymized.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
