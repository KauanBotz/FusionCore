
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Scissors, Stethoscope, ShoppingBag, Users, Calendar, CreditCard, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Systems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const systems = [
    {
      id: 1,
      name: "Sistema para Barbearia",
      description: "Completo sistema de agendamento, controle de clientes, vendas e estoque para barbearias e salões.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop",
      icon: <Scissors className="h-8 w-8 text-accent" />,
      features: ["Agendamento Online", "Controle de Estoque", "Relatórios", "App Mobile"],
      badge: "Mais Popular",
      price: "R$ 97/mês",
      category: "beleza"
    },
    {
      id: 2,
      name: "Sistema para Clínica",
      description: "Gestão completa de pacientes, prontuários eletrônicos, agendamentos e faturamento médico.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      icon: <Stethoscope className="h-8 w-8 text-accent" />,
      features: ["Prontuário Eletrônico", "Agenda Médica", "Faturamento", "Telemedicina"],
      badge: "Novo",
      price: "R$ 147/mês",
      category: "saude"
    },
    {
      id: 3,
      name: "Sistema para Loja",
      description: "E-commerce completo com controle de estoque, vendas online e offline, relatórios detalhados.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      icon: <ShoppingBag className="h-8 w-8 text-accent" />,
      features: ["E-commerce", "PDV", "Estoque", "Marketplace"],
      badge: "",
      price: "R$ 127/mês",
      category: "varejo"
    },
    {
      id: 4,
      name: "Sistema para Academia",
      description: "Gestão de alunos, planos, pagamentos, controle de acesso e aplicativo para treinos.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      icon: <Users className="h-8 w-8 text-accent" />,
      features: ["Controle de Acesso", "Planos", "App Treinos", "Biometria"],
      badge: "",
      price: "R$ 117/mês",
      category: "fitness"
    },
    {
      id: 5,
      name: "Sistema para Restaurante",
      description: "Gestão completa de pedidos, delivery, cardápio digital, controle de mesas e cozinha.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      icon: <Calendar className="h-8 w-8 text-accent" />,
      features: ["Cardápio Digital", "Delivery", "Mesa Digital", "Cozinha"],
      badge: "",
      price: "R$ 137/mês",
      category: "alimentacao"
    },
    {
      id: 6,
      name: "Sistema Financeiro",
      description: "Controle financeiro completo para empresas, fluxo de caixa, relatórios e integração bancária.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      features: ["Fluxo de Caixa", "Relatórios", "Integração Bancária", "DRE"],
      badge: "",
      price: "R$ 87/mês",
      category: "financeiro"
    }
  ];

  const categories = [
    { id: "todos", name: "Todos os Sistemas" },
    { id: "beleza", name: "Beleza & Estética" },
    { id: "saude", name: "Saúde" },
    { id: "varejo", name: "Varejo" },
    { id: "fitness", name: "Fitness" },
    { id: "alimentacao", name: "Alimentação" },
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
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
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
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Link to={`/comprar/${system.id}`} className="w-full">
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
