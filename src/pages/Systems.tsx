
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Scissors, CreditCard, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Systems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const systems = [
    {
      id: 1,
      name: "Sistema para Conservadora",
      description: "Completo sistema de gestão para conservadoras.",
      image: "/lovable-uploads/imagem1.jpg",
      icon: <Scissors className="h-8 w-8 text-accent" />,
      features: ["Gestão de escalas", "Gestão de faltas", "Controle de funcionários", "Controle de condomínios", "Controle de salários", "Suporte 24/7"],
      badge: "Mais Popular",
      price: "R$ 197/mês",
      category: "Conservadora"
    },
    {
      id: 2,
      name: "Sistema Financeiro",
      description: "Controle financeiro completo para empresas, fluxo de caixa, relatórios e integração bancária.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      features: ["Fluxo de Caixa", "Relatórios", "Integração Bancária", "DRE"],
      badge: "Novo",
      price: "R$ 197/mês",
      category: "Financeiro"
    }
  ];

  const categories = [
    { id: "todos", name: "Todos os Sistemas" },
    { id: "conservadora", name: "Conservadora" },
    { id: "financeiro", name: "Financeiro" }
  ];

  const filteredSystems = systems.filter(system => {
    const matchesSearch = system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || system.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-8">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Sistemas Disponíveis
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Escolha o sistema perfeito para o seu negócio. Todos incluem suporte completo e atualizações gratuitas.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar sistemas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {filteredSystems.map((system) => (
                <Card 
                  key={system.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
                >
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img 
                        src={system.image} 
                        alt={system.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      {system.badge && (
                        <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                          {system.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      {system.icon}
                      <CardTitle className="text-xl">{system.name}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {system.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {system.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-accent mb-2">
                      {system.price}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-2">
                    <div className="flex gap-2 w-full">
                      <Link to={`/sistema/${system.id}`} className="flex-1">
                        <Button 
                          variant="outline"
                          className="w-full group-hover:scale-105 transition-transform"
                        >
                          Ver Detalhes
                        </Button>
                      </Link>
                      <Link to={`/demo/${system.id}`} className="flex-1">
                        <Button 
                          variant="ghost"
                          className="w-full group-hover:scale-105 transition-transform"
                        >
                          Ver Demo
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredSystems.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Nenhum sistema encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente ajustar seus filtros ou termo de busca.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Systems;
