import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  const [researchOpen, setResearchOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  const handleComingSoon = (e: React.MouseEvent, feature: string) => {
    e.preventDefault();
    toast.info(`${feature} is coming soon!`);
  };

  const submitForm = (e: React.FormEvent, type: 'research' | 'partnership') => {
    e.preventDefault();
    toast.success(`Thank you! Your ${type} inquiry has been received.`);
    if (type === 'research') setResearchOpen(false);
    if (type === 'partnership') setPartnerOpen(false);
  };

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Co-flare Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sidebar-foreground/70 text-sm mb-6 max-w-xs">
              Community-powered environmental monitoring for a safer, more resilient future.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-sidebar-accent flex items-center justify-center hover:bg-sidebar-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <Link to="/map" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Live Map
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="/docs" onClick={(e) => handleComingSoon(e, 'Documentation')} className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api" onClick={(e) => handleComingSoon(e, 'API Access')} className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  API Access
                </a>
              </li>
              <li>
                <a href="/data" onClick={(e) => handleComingSoon(e, 'Data Downloads')} className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Data Downloads
                </a>
              </li>
              <li>
                <Dialog open={researchOpen} onOpenChange={setResearchOpen}>
                  <DialogTrigger className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors text-left w-full h-auto p-0 bg-transparent border-0 font-normal">
                    Research
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Research Inquiry</DialogTitle>
                      <DialogDescription>
                        Partner with us for academic or institutional research using Co-flare data.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => submitForm(e, 'research')} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="inst-name">Institution Name</Label>
                        <Input id="inst-name" required placeholder="University or NGO" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="res-email">Email Address</Label>
                        <Input id="res-email" type="email" required placeholder="contact@institution.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="res-topic">Research Topic</Label>
                        <Input id="res-topic" required placeholder="e.g. Flood patterns in coastal areas" />
                      </div>
                      <Button type="submit" className="w-full">Submit Inquiry</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Dialog open={partnerOpen} onOpenChange={setPartnerOpen}>
                  <DialogTrigger className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors text-left w-full h-auto p-0 bg-transparent border-0 font-normal">
                    Partnerships
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Partner with Co-flare</DialogTitle>
                      <DialogDescription>
                        Join forces with us to build resilient communities and scale environmental monitoring.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => submitForm(e, 'partnership')} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="org-name">Organization Name</Label>
                        <Input id="org-name" required placeholder="Your Organization" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="part-email">Work Email</Label>
                        <Input id="part-email" type="email" required placeholder="you@organization.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="part-type">Partnership Type</Label>
                        <Input id="part-type" required placeholder="e.g. Technology, Funding, Operations" />
                      </div>
                      <Button type="submit" className="w-full">Request Partnership</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <a href="/press" onClick={(e) => handleComingSoon(e, 'Press Kit')} className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/data-policy" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Data Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-sidebar-foreground/70 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sidebar-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sidebar-foreground/60">
            © 2025 Co-flare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-sidebar-foreground/60">
              Built for Africa 🌍
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
