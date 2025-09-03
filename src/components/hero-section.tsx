import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Transform your business with{" "}
                <span className="text-advance-primary underline decoration-advance-secondary decoration-4">
                  smart IOT
                </span>{" "}
                solutions
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
                Fast, reliable and innovative - turn your business into a
                connected ecosystem and streamline your operations with
                cutting-edge IoT technology.
              </p>
            </div>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                placeholder="Enter work email"
                className="flex-1"
                type="email"
              />
              <Button className="bg-advance-primary hover:bg-advance-primary/90 text-white px-8">
                Get Started
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-advance-primary">
                  95.2%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client satisfaction rate
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-advance-primary">
                  ~500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects completed
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-advance-secondary text-advance-secondary"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9</span>
              <span className="text-muted-foreground">
                Average client rating
              </span>
            </div>
          </div>

          {/* Right Content - 3D Illustration Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-advance-primary/10 to-advance-secondary/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-advance-primary/20 mx-auto flex items-center justify-center">
                  <div className="w-16 h-16 bg-advance-primary"></div>
                </div>
                <p className="text-muted-foreground">IoT Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
