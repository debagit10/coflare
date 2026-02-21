import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="prose prose-lg dark:prose-invert max-w-none"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            About EcoWatch
                        </h1>

                        <div className="bg-card rounded-2xl p-8 shadow-sm border mb-12">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                EcoWatch was founded on the principle that community empowerment is the most effective approach to addressing localized environmental issues. By creating a decentralized network of vigilant citizens, we aim to bridge the gap between people on the ground and the authorities capable of implementing broader changes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                                <p className="text-muted-foreground text-sm">
                                    We believe in keeping our data open and accessible. An informed public is a powerful force for change and accountability.
                                </p>
                            </div>
                            <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                                <p className="text-muted-foreground text-sm">
                                    Our platform connects citizens with NGOs, researchers, and government agencies to create actionable solutions.
                                </p>
                            </div>
                            <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                                <h3 className="text-xl font-semibold mb-3">Resilience</h3>
                                <p className="text-muted-foreground text-sm">
                                    By tracking hazards such as floods and pollution, communities can prepare better and recover faster from recurring issues.
                                </p>
                            </div>
                            <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                                <h3 className="text-xl font-semibold mb-3">Action</h3>
                                <p className="text-muted-foreground text-sm">
                                    Reporting is just the first step. Our end goal is tangible policy change and immediate operational response to reported hazards.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-4">Join Us In Protecting Our Home</h2>
                            <p className="text-muted-foreground mb-6">
                                Whether you are an individual wanting to report a local hazard, or an organization looking to partner with us, there's a place for you in the EcoWatch movement.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
