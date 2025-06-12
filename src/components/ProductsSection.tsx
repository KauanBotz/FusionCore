
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Sistema para Barbearia",
      description: "Completo sistema de agendamento, controle de clientes, vendas e estoque para barbearias e salões.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop",
      icon: <Scissors className="h-8 w-8 text-accent" />,
      features: ["Agendamento Online", "Controle de Estoque", "Relatórios", "App Web"],
      badge: "Mais Popular",
      price: "R$ 97/mês"
    },
    {
      id: 2,
      name: "Sistema Financeiro",
      description: "Controle financeiro completo para empresas, fluxo de caixa, relatórios e integração bancária.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      features: ["Fluxo de Caixa", "Relatórios", "Integração Bancária", "DRE"],
      badge: "Novo",
      price: "R$ 87/mês"
    }
  ];

  return (
    <section id="sistemas" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sistemas Prontos para sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Empresa
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o sistema ideal para o seu negócio. Todos incluem suporte técnico, 
            atualizações gratuitas e customização completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  {product.icon}
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="text-2xl font-bold text-accent mb-2">
                  {product.price}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Link to={`/sistema/${product.id}`} className="flex-1">
                  <Button 
                    variant="outline"
                    className="w-full group-hover:scale-105 transition-transform"
                  >
                    Ver Detalhes
                  </Button>
                </Link>
                <Link to={`/comprar/${product.id}`} className="flex-1">
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group-hover:scale-105 transition-transform"
                  >
                    Quero esse Sistema
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
