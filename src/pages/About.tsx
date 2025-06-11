
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Foco no Cliente",
      description: "Desenvolvemos soluções pensando sempre na experiência e sucesso dos nossos clientes."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Inovação",
      description: "Utilizamos as tecnologias mais modernas para criar sistemas eficientes e escaláveis."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Trabalho em Equipe",
      description: "Nossa equipe multidisciplinar trabalha em conjunto para entregar os melhores resultados."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Excelência",
      description: "Buscamos sempre a perfeição em cada detalhe dos nossos produtos e serviços."
    }
  ];

  const team = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "15 anos de experiência em desenvolvimento de software empresarial."
    },
    {
      name: "Ana Costa",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Especialista em arquitetura de sistemas e tecnologias cloud."
    },
    {
      name: "Pedro Santos",
      role: "Head de Produto",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Expert em UX/UI e experiência do usuário em sistemas empresariais."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-8">
                Sobre a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  FusionCore
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos uma empresa especializada em desenvolver sistemas prontos para empresas de todos os tamanhos. 
                Nossa missão é democratizar o acesso à tecnologia de qualidade, oferecendo soluções completas e 
                personalizáveis para diferentes segmentos de mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Transformar a gestão empresarial através de tecnologia acessível e eficiente. 
                  Acreditamos que toda empresa, independente do tamanho, merece ter acesso a 
                  sistemas de qualidade que otimizem seus processos e impulsionem seu crescimento.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desenvolvemos soluções que não apenas atendem às necessidades atuais dos nossos 
                  clientes, mas também se adaptam ao crescimento de seus negócios.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Nossa equipe trabalhando"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam nossa empresa e definem como trabalhamos todos os dias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-8">
                    <div className="mb-6 flex justify-center">
                      <div className="p-3 bg-accent/10 rounded-full">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nossa Equipe
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça as pessoas por trás dos sistemas que transformam empresas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-8">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Nossos Números
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-primary-foreground/80">Empresas Atendidas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-primary-foreground/80">Sistemas Disponíveis</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-primary-foreground/80">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">5</div>
                <div className="text-primary-foreground/80">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.
            </p>
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Falar Conosco
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
