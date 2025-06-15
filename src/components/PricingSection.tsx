
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Mensal",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para testar nossos sistemas",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Sistema completo escolhido",
        "Personalização básica",
        "Suporte por email",
        "Atualizações incluídas",
        "SSL gratuito",
        "Backup diário"
      ],
      cta: "Começar Agora",
      highlighted: false
    },
    {
      name: "Vitalício",
      price: "R$ 2.689",
      period: "pagamento único",
      description: "Melhor custo-benefício a longo prazo",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Tudo do plano mensal",
        "Personalização avançada",
        "Suporte prioritário",
        "Atualizações vitalícias",
        "Múltiplos domínios",
        "Consultoria de 2h incluída",
        "Treinamento avançado"
      ],
      cta: "Comprar Vitalício",
      highlighted: true,
      badge: "Mais Popular",
      savings: "Economia de R$ 2.000+ no primeiro ano"
    }
  ];

  return (
    <section id="precos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planos e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Preços
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta ao seu negócio. Todos incluem suporte e atualizações.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'border-2 border-accent ring-4 ring-accent/20 scale-105' 
                  : 'border-2 hover:border-accent/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-accent text-accent-foreground rounded-bl-lg rounded-tr-none px-4 py-2">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg ${plan.highlighted ? 'bg-accent text-accent-foreground' : 'bg-muted'}`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-sm text-accent font-medium mt-2">{plan.savings}</p>
                  )}
                </div>
                
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            💳 Aceitamos PIX, Cartão de Crédito e Boleto • 🔒 Pagamento 100% Seguro • 
            📞 Suporte Técnico Especializado
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
