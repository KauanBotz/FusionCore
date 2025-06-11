
import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, Rocket, HeadphonesIcon } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Escolha seu Sistema",
      description: "Navegue pelos nossos sistemas prontos e escolha o que melhor se adapta ao seu negócio.",
      icon: <Search className="h-12 w-12 text-accent" />
    },
    {
      step: "02", 
      title: "Personalização",
      description: "Nosso time personaliza o sistema com suas cores, logo e configurações específicas.",
      icon: <Settings className="h-12 w-12 text-accent" />
    },
    {
      step: "03",
      title: "Implementação",
      description: "Em até 24h seu sistema está no ar, com treinamento completo para sua equipe.",
      icon: <Rocket className="h-12 w-12 text-accent" />
    },
    {
      step: "04",
      title: "Suporte Contínuo",
      description: "Suporte técnico especializado, atualizações gratuitas e melhorias constantes.",
      icon: <HeadphonesIcon className="h-12 w-12 text-accent" />
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Funciona
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e rápido para colocar seu sistema em funcionamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <CardContent className="pt-8 pb-8">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
