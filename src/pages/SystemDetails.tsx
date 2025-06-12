
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Star, Users, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const SystemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dados dos sistemas (em uma aplicação real, viria de uma API)
  const systems = {
    "1": {
      name: "Sistema para Barbearia",
      price: "R$ 97/mês",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
      description: "Sistema completo de gestão para barbearias e salões de beleza. Controle total do seu negócio em uma única plataforma web.",
      features: [
        "Agendamento online com confirmação automática",
        "Gestão completa de clientes e histórico",
        "Controle de estoque de produtos",
        "Relatórios financeiros detalhados",
        "Sistema de fidelidade para clientes",
        "Integração com WhatsApp",
        "Aplicação web responsiva",
        "Painel administrativo completo"
      ],
      benefits: [
        "Aumento de 40% na eficiência do agendamento",
        "Redução de 60% no tempo de gestão",
        "Melhoria na experiência do cliente",
        "Controle financeiro automatizado"
      ],
      testimonials: [
        {
          name: "João Silva",
          business: "Barbearia Moderna",
          text: "Revolucionou meu negócio! Agora tenho controle total e meus clientes adoram o agendamento online."
        }
      ]
    },
    "2": {
      name: "Sistema Financeiro",
      price: "R$ 97/mês",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      description: "Sistema completo de controle financeiro empresarial. Gerencie todas as finanças da sua empresa em uma única plataforma web.",
      features: [
        "Fluxo de caixa em tempo real",
        "Relatórios financeiros avançados",
        "Integração bancária automática",
        "Demonstrativo de Resultado (DRE)",
        "Controle de contas a pagar e receber",
        "Dashboard executivo",
        "Aplicação web segura",
        "Backup automático dos dados"
      ],
      benefits: [
        "Controle total das finanças",
        "Economia de 50% no tempo de gestão",
        "Relatórios automáticos",
        "Segurança de dados garantida"
      ],
      testimonials: [
        {
          name: "Maria Santos",
          business: "Empresa ABC",
          text: "Transformou nossa gestão financeira! Agora temos controle total e relatórios automáticos."
        }
      ]
    }
  };

  const system = systems[id as keyof typeof systems];

  if (!system) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sistema não encontrado</h1>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Button variant="ghost" onClick={() => window.history.back()} className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar aos Sistemas
                </Button>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  {system.name}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {system.description}
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-3xl font-bold text-accent">{system.price}</div>
                  <Badge className="bg-accent text-accent-foreground">Aplicação Web</Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => navigate(`/comprar/${id}`)}>
                    Quero Este Sistema
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => navigate(`/trial`)}>
                    Agendar Demo
                  </Button>
                </div>
              </div>
              
              <div>
                <img 
                  src={system.image} 
                  alt={system.name}
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Funcionalidades Incluídas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Todas as ferramentas que você precisa para gerenciar seu negócio de forma eficiente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {system.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Benefícios para seu Negócio
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {system.benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Star className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-accent" />
                  <div className="text-4xl font-bold text-accent">200+</div>
                </div>
                <div className="text-primary-foreground/80">Empresas Atendidas</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-6 w-6 text-accent" />
                  <div className="text-4xl font-bold text-accent">24h</div>
                </div>
                <div className="text-primary-foreground/80">Implementação</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="h-6 w-6 text-accent" />
                  <div className="text-4xl font-bold text-accent">99.9%</div>
                </div>
                <div className="text-primary-foreground/80">Uptime Garantido</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Junte-se a centenas de empresas que já revolucionaram sua gestão com nossos sistemas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                Falar com Consultor
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SystemDetails;
