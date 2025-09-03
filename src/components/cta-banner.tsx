import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 px-4 bg-advance-primary text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Unlock potential, foster growth
            </h2>
            <p className="text-lg text-white/90 text-pretty">
              Embark on a transformative journey with us as we guide you to
              unlock your inherent potential, paving the way for empowered
              success and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="ghost"
                className="text-white border-white hover:bg-white hover:text-advance-primary"
              >
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
              <Button className="bg-advance-secondary hover:bg-advance-secondary/90 text-black">
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-white/10 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-white/20 mx-auto"></div>
                <p className="text-white/70">Team Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
