import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

const footerLinks = {
  Company: ["About Us", "Careers", "News & Updates", "Contact"],
  Services: [
    "Digital Experience & Design",
    "Enterprise Business Solutions",
    "Emerging Technologies",
    "Content & Digital Marketing",
    "Technology Advisory",
    "Cybersecurity & Risk Management",
  ],
  Solution: [
    "Smart Mobility & Logistics",
    "AI-Powered Security & Recognition",
    "Hospitality & Customer Experience",
    "Enterprise Workforce & Client Solutions",
    "Healthcare & Life SciencesD",
    "Education & EdTech",
    "Financial & Banking Solutions",
    "Geospatial & Location Intelligence",
  ],
};

export function NewsletterFooter() {
  return (
    <footer
      className="bg-background border-t border-border"
      style={{
        backgroundImage: "url('src/assets/banner-7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-balance text-white">
                Join our newsletter to keep up to date with us!
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <div className="relative flex-1">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter your email"
                  className="pl-10"
                  type="email"
                />
              </div>
              <Button className="bg-advance-secondary hover:bg-advance-secondary/90 text-black px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Footer Links */}
      <div className="py-16 px-4 color bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-advance-primary">
                Advance IOT Technical Solutions LLC-SPC
              </div>
              <p className="text-muted-foreground text-pretty">
                Transforming businesses with innovative IoT solutions and expert
                consulting services.
              </p>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-semibold text-foreground">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-advance-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Copyright */}
      <div className="py-6 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Advance IOT Technical Solutions LLC-SPC. All rights
              reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-advance-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-advance-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-advance-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
