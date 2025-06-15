import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { scrollToTop } from "@/utils/scrollToTop"; // Importe scrollToTop

const PurchaseStatusPage = ({ status }: { status: 'success' | 'failure' | 'pending' }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('order_id');

  useEffect(() => {
    scrollToTop(); // Rola para o topo ao carregar a página
    // Aqui você pode adicionar lógica para buscar o status final da ordem no seu backend
    // usando o orderId, se necessário, para exibir detalhes mais específicos.
    // Ex: fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`)
  }, [orderId]);

  let title = "";
  let message = "";
  let icon = null;
  let iconColor = "";

  if (status === 'success') {
    title = "Pagamento Aprovado!";
    message = `Seu pagamento foi processado com sucesso. O sistema foi ativado! (Ordem #${orderId})`;
    icon = <CheckCircle className="w-10 h-10" />;
    iconColor = "text-green-600";
  } else if (status === 'failure') {
    title = "Pagamento Recusado!";
    message = `Seu pagamento não pôde ser processado. Tente novamente ou entre em contato. (Ordem #${orderId})`;
    icon = <XCircle className="w-10 h-10" />;
    iconColor = "text-red-600";
  } else { // pending
    title = "Pagamento Pendente!";
    message = `Seu pagamento está aguardando aprovação. Entraremos em contato em breve. (Ordem #${orderId})`;
    icon = <Clock className="w-10 h-10" />;
    iconColor = "text-yellow-600";
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-8 flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="w-full max-w-md mx-auto px-4">
          <Card className="text-center p-6">
            <CardHeader className="justify-center items-center">
              <div className={`p-3 rounded-full bg-current ${iconColor}/10`}>
                {icon}
              </div>
              <CardTitle className={`text-3xl font-bold mt-4 ${iconColor}`}>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6">{message}</p>
              <Link to="/">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Voltar ao Início
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PurchaseStatusPage;