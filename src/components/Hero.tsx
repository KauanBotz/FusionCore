
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              🚀 Sistemas prontos para usar
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Transforme seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Negócio
            </span>{" "}
            com Sistemas Inteligentes
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Sistemas completos e personalizados para barbearias, clínicas, lojas e muito mais. 
            Implementação em 24h com suporte total.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/sistemas">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Ver Sistemas Disponíveis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo/1">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">24h</div>
              <div className="text-muted-foreground">Implementação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
