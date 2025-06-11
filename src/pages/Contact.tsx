
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-8">
                Entre em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Contato
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Estamos aqui para ajudar você a encontrar a solução perfeita para seu negócio. 
                Entre em contato conosco e vamos conversar sobre suas necessidades.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                      <p className="text-muted-foreground">(11) 3333-4444</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">contato@fusioncore.com.br</p>
                      <p className="text-muted-foreground">vendas@fusioncore.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. Paulista, 1000 - Sala 1501<br />
                        São Paulo, SP - 01310-100<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 9h às 12h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg">Vendas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Quer conhecer nossos sistemas? Fale com nossa equipe de vendas.
                      </p>
                      <Button size="sm" className="w-full">
                        Falar com Vendas
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg">Suporte</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Precisa de ajuda técnica? Nossa equipe está pronta para ajudar.
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Suporte Técnico
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nome</Label>
                        <Input id="firstName" placeholder="Seu nome" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Sobrenome</Label>
                        <Input id="lastName" placeholder="Seu sobrenome" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" placeholder="(11) 99999-9999" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" placeholder="Nome da sua empresa" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Como podemos ajudar?" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua necessidade ou dúvida..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nossa Localização
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos localizados no coração de São Paulo, na Av. Paulista.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">
                [Mapa seria integrado aqui - Google Maps ou similar]
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Qual o tempo de implementação?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A implementação padrão leva até 24h após a confirmação do pagamento e envio das informações necessárias.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Posso personalizar o sistema?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim! Todos os sistemas incluem personalização com suas cores, logo e configurações específicas do seu negócio.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como funciona o suporte?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Oferecemos suporte técnico por email, chat e telefone. Clientes do plano vitalício têm suporte prioritário.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
