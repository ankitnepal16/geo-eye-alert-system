
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl translate-y-1/2"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4 max-w-[42rem]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              AI-Powered Environmental 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Anomaly Detection</span>
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px] mx-auto">
              GeoScopeAI uses advanced machine learning to detect wildfires, floods, illegal deforestation, 
              and land degradation from satellite and drone imagery.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Learn More
            </Button>
          </div>
          
          <div className="w-full max-w-4xl mx-auto relative mt-8 md:mt-16">
            {/* Hero image with anomaly markers */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed" 
                alt="Satellite view of landscape" 
                className="w-full h-auto object-cover"
              />
              
              {/* Anomaly markers */}
              <div className="absolute top-1/4 left-1/3 w-6 h-6 md:w-8 md:h-8">
                <div className="absolute w-full h-full rounded-full bg-fire-600/80 animate-ping" 
                  style={{ animationDuration: '3s' }}></div>
                <div className="absolute w-full h-full rounded-full border-2 border-fire-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-fire-600"></div>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 w-6 h-6 md:w-8 md:h-8">
                <div className="absolute w-full h-full rounded-full bg-water-600/80 animate-ping" 
                  style={{ animationDuration: '4s' }}></div>
                <div className="absolute w-full h-full rounded-full border-2 border-water-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-water-600"></div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/2 w-6 h-6 md:w-8 md:h-8">
                <div className="absolute w-full h-full rounded-full bg-forest-600/80 animate-ping" 
                  style={{ animationDuration: '3.5s' }}></div>
                <div className="absolute w-full h-full rounded-full border-2 border-forest-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-forest-600"></div>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent"></div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium mb-2">
                  <span className="w-2 h-2 rounded-full bg-fire-600 animate-pulse-warning"></span>
                  <span>Active Detection in Progress</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-fire-600 rounded-full"></div>
              <span>Wildfire Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-water-600 rounded-full"></div>
              <span>Flood Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-forest-600 rounded-full"></div>
              <span>Deforestation Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-earth-600 rounded-full"></div>
              <span>Land Degradation Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
