
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Demo = () => {
  const { id } = useParams();
  const [selectedDevice, setSelectedDevice] = useState("desktop");

  const demoData = {
    "1": {
      name: "Sistema para Barbearia",
      description: "Veja como funciona o sistema completo de gestão para barbearias",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        "Agendamento online em tempo real",
        "Gestão completa de clientes",
        "Controle de estoque automatizado",
        "Relatórios financeiros detalhados"
      ]
    }
  };

  const demo = demoData[id as keyof typeof demoData];

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Demo não encontrada</h1>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  const deviceStyles = {
    desktop: "w-full h-96",
    tablet: "w-3/4 h-80 mx-auto",
    mobile: "w-1/2 h-72 mx-auto"
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Button variant="ghost" onClick={() => window.history.back()} className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar aos Sistemas
              </Button>
              
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  <Play className="mr-2 h-4 w-4" />
                  Demonstração Interativa
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  {demo.name}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {demo.description}
                </p>
              </div>

              {/* Device Selection */}
              <div className="flex justify-center gap-4 mb-8">
                <Button
                  variant={selectedDevice === "desktop" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDevice("desktop")}
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  Desktop
                </Button>
                <Button
                  variant={selectedDevice === "tablet" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDevice("tablet")}
                >
                  <Tablet className="mr-2 h-4 w-4" />
                  Tablet
                </Button>
                <Button
                  variant={selectedDevice === "mobile" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDevice("mobile")}
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile
                </Button>
              </div>

              {/* Demo Video */}
              <Card className="mb-12">
                <CardContent className="p-6">
                  <div className={`${deviceStyles[selectedDevice as keyof typeof deviceStyles]} transition-all duration-300`}>
                    <iframe
                      src={demo.videoUrl}
                      title="Demo do Sistema"
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Features Demo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Principais Funcionalidades
                  </h3>
                  <div className="space-y-4">
                    {demo.features.map((feature, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                              {index + 1}
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Próximos Passos
                  </h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Gostou do que viu?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Implemente este sistema no seu negócio hoje mesmo!
                      </p>
                      <div className="flex flex-col gap-3">
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                          Quero este Sistema
                        </Button>
                        <Button variant="outline">
                          Falar com Consultor
                        </Button>
                        <Button variant="ghost">
                          Agendar Reunião
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;
