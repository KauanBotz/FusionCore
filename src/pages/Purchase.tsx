// src/pages/Purchase.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Check, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/sonner";

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [paymentMethod, setPaymentMethod] = useState("credit"); // Manter para UI
  const [isLoading, setIsLoading] = useState(false);

  const systemData = {
    "1": {
      name: "Sistema para Conservadora",
      description: "Sistema completo de gestão para conservadoras",
      image: "/public/lovable-uploads/",
      monthlyPrice: 197,
      yearlyPrice: 970,
      features: [
        "Gestão de escalas",
        "Gestão de faltas",
        "Controle de funcionários",
        "Controle de condomínios",
        "Controle de salários",
        "Suporte 24/7"
      ]
    },
    "2": {
      name: "Sistema Financeiro",
      description: "Sistema completo de controle financeiro",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      monthlyPrice: 87,
      yearlyPrice: 870,
      features: [
        "Fluxo de caixa",
        "Relatórios avançados",
        "Integração bancária",
        "DRE automático",
        "Aplicação web",
        "Suporte 24/7"
      ]
    }
  };

  const system = systemData[id as keyof typeof systemData];

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

  const currentPrice = selectedPlan === "monthly" ? system.monthlyPrice : system.yearlyPrice;
  const yearlyDiscount = Math.round(((system.monthlyPrice * 12) - system.yearlyPrice) / (system.monthlyPrice * 12) * 100);

  const handlePurchase = async () => {
    if (!isAuthenticated || !user) {
      toast.error("Você precisa estar logado para realizar uma compra.");
      navigate("/login");
      return;
    }

    setIsLoading(true);

    try {
      // Ajuste a URL para o seu backend
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/create-payment-preference`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          productId: id,
          amount: currentPrice,
          planType: selectedPlan,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.init_point; // Redireciona para o Checkout Pro
      } else {
        toast.error(data.message || "Erro ao iniciar o pagamento.");
      }
    } catch (error) {
      console.error("Erro na requisição de pagamento:", error);
      toast.error("Erro de conexão ao iniciar o pagamento.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-8">
        <section className="py-8 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Button variant="ghost" onClick={() => window.history.back()} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Sistemas
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Resumo do Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={system.image}
                        alt={system.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{system.name}</h3>
                        <p className="text-muted-foreground">{system.description}</p>
                        <Badge variant="secondary" className="mt-1">Aplicação Web</Badge>
                      </div>
                    </div>

                    {/* Plan Selection */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Escolha seu plano:</Label>
                      <div className="grid grid-cols-1 gap-3">
                        <div
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedPlan === "monthly" ? "border-accent bg-accent/5" : "border-border"
                          }`}
                          onClick={() => setSelectedPlan("monthly")}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold">Plano Mensal</div>
                              <div className="text-muted-foreground">R$ {system.monthlyPrice}/mês</div>
                            </div>
                            <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center">
                              {selectedPlan === "monthly" && <div className="w-2 h-2 bg-accent rounded-full" />}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`p-4 border rounded-lg cursor-pointer transition-all relative ${
                            selectedPlan === "yearly" ? "border-accent bg-accent/5" : "border-border"
                          }`}
                          onClick={() => setSelectedPlan("yearly")}
                        >
                          <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                            -{yearlyDiscount}%
                          </Badge>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold">Plano Anual</div>
                              <div className="text-muted-foreground">R$ {system.yearlyPrice}/ano</div>
                              <div className="text-xs text-accent">Economize R$ {(system.monthlyPrice * 12) - system.yearlyPrice}</div>
                            </div>
                            <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center">
                              {selectedPlan === "yearly" && <div className="w-2 h-2 bg-accent rounded-full" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Incluído no plano:</Label>
                      <div className="space-y-2">
                        {system.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-accent" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price Summary */}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Total:</span>
                        <span className="text-accent">R$ {currentPrice}</span>
                      </div>
                      {selectedPlan === "yearly" && (
                        <div className="text-sm text-muted-foreground">
                          Equivale a R$ {Math.round(currentPrice / 12)}/mês
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Informações de Pagamento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Método de pagamento:</Label>
                      <div className="grid grid-cols-1 gap-3">
                        <div
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            paymentMethod === "credit" ? "border-accent bg-accent/5" : "border-border"
                          }`}
                          onClick={() => setPaymentMethod("credit")}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <CreditCard className="h-5 w-5" />
                              <span>Cartão de Crédito</span>
                            </div>
                            <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center">
                              {paymentMethod === "credit" && <div className="w-2 h-2 bg-accent rounded-full" />}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            paymentMethod === "pix" ? "border-accent bg-accent/5" : "border-border"
                          }`}
                          onClick={() => setPaymentMethod("pix")}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 bg-accent rounded flex items-center justify-center text-accent-foreground text-xs font-bold">
                                PIX
                              </div>
                              <span>PIX (Desconto de 5%)</span>
                            </div>
                            <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center">
                              {paymentMethod === "pix" && <div className="w-2 h-2 bg-accent rounded-full" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Formulário de Cartão (mantido apenas para UI, a lógica de pagamento real será via MP Checkout Pro) */}
                    {paymentMethod === "credit" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Nome</Label>
                            <Input id="firstName" placeholder="João" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Sobrenome</Label>
                            <Input id="lastName" placeholder="Silva" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Número do cartão</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Validade</Label>
                            <Input id="expiry" placeholder="MM/AA" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Security Badges */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>Pagamento seguro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Ativação imediata</span>
                      </div>
                    </div>

                    {/* Purchase Button */}
                    <Button
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
                      onClick={handlePurchase}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processando..." : `Finalizar Compra - R$ ${paymentMethod === "pix" ? Math.round(currentPrice * 0.95) : currentPrice}`}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao finalizar a compra, você concorda com nossos{" "}
                      <a href="#" className="text-accent hover:underline">Termos de Uso</a> e{" "}
                      <a href="#" className="text-accent hover:underline">Política de Privacidade</a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Purchase;