
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const Trial = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    system: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const systems = [
    { id: "conservadora", name: "Sistema para Conservadora" },
    { id: "financeiro", name: "Sistema Financeiro" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas.",
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20 pb-8 flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted">
          <div className="w-full max-w-md mx-auto px-4">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">Solicitação Enviada!</CardTitle>
                <p className="text-muted-foreground">
                  Recebemos sua solicitação de trial. Nossa equipe entrará em contato em até 24 horas.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Voltar ao Início
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Link to="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Button>
              </Link>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Solicitar Trial Gratuito
              </h1>
              <p className="text-xl text-muted-foreground">
                Teste nossos sistemas por 14 dias gratuitamente
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Informações para Trial</CardTitle>
                <p className="text-muted-foreground">
                  Preencha os dados abaixo e nossa equipe entrará em contato para configurar seu trial
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Nome da Empresa *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Nome da sua empresa"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="system">Sistema de Interesse *</Label>
                    <Select onValueChange={(value) => handleInputChange("system", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o sistema" />
                      </SelectTrigger>
                      <SelectContent>
                        {systems.map((system) => (
                          <SelectItem key={system.id} value={system.id}>
                            {system.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem Adicional</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Conte-nos mais sobre suas necessidades..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">O que está incluído no trial:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 7 dias de acesso completo ao sistema</li>
                      <li>• Suporte técnico durante o período</li>
                      <li>• Treinamento básico da equipe</li>
                      <li>• Configuração inicial personalizada</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Solicitar Trial Gratuito
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trial;
