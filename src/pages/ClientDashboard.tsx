
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  DollarSign, 
  ShoppingCart, 
  Calendar,
  Building,
  Package,
  Activity,
  LogOut
} from "lucide-react";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ClientDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Dados mockados específicos do cliente
  const clientData = {
    monthlyUsage: [
      { name: 'Jan', agendamentos: 120, faturamento: 4500 },
      { name: 'Fev', agendamentos: 150, faturamento: 5200 },
      { name: 'Mar', agendamentos: 180, faturamento: 6100 },
      { name: 'Abr', agendamentos: 200, faturamento: 7200 },
      { name: 'Mai', agendamentos: 190, faturamento: 6800 },
      { name: 'Jun', agendamentos: 220, faturamento: 8200 },
    ],
    recentActivity: [
      { id: 1, action: "Novo agendamento criado", time: "há 2 minutos", client: "Carlos Silva" },
      { id: 2, action: "Pagamento processado", time: "há 15 minutos", amount: "R$ 150" },
      { id: 3, action: "Cliente cancelou agendamento", time: "há 1 hora", client: "Ana Costa" },
      { id: 4, action: "Novo cliente cadastrado", time: "há 2 horas", client: "Pedro Santos" },
    ]
  };

  const metrics = {
    totalAgendamentos: 1247,
    faturamentoMensal: "R$ 8.200",
    clientesAtivos: 89,
    proximosAgendamentos: 23
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header do Dashboard */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Painel {user?.companyName}</h1>
              <p className="text-muted-foreground mt-2">
                Bem-vindo de volta, {user?.name}!
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="text-sm">
                <Building className="h-3 w-3 mr-1" />
                {user?.companyName}
              </Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Agendamentos</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.totalAgendamentos}</div>
                <p className="text-xs text-muted-foreground">
                  +12% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Faturamento Mensal</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.faturamentoMensal}</div>
                <p className="text-xs text-muted-foreground">
                  +8% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.clientesAtivos}</div>
                <p className="text-xs text-muted-foreground">
                  +5 novos este mês
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Próximos Agendamentos</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.proximosAgendamentos}</div>
                <p className="text-xs text-muted-foreground">
                  Para os próximos 7 dias
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Sistemas Contratados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Sistemas Contratados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user?.purchasedProducts?.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                          <Package className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{product}</p>
                          <p className="text-xs text-muted-foreground">Ativo desde Jan 2024</p>
                        </div>
                      </div>
                      <Badge variant="default">Ativo</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gráfico de Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Performance Mensal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={clientData.monthlyUsage}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="agendamentos" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Atividade Recente */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Atividade Recente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clientData.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.client && (
                      <Badge variant="outline">{activity.client}</Badge>
                    )}
                    {activity.amount && (
                      <Badge variant="secondary">{activity.amount}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
