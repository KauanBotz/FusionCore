import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  Eye,
  Download,
  Calendar,
  Settings,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import Header from "@/components/Header";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, Pie } from "recharts";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("30");

  // Dados mockados para demonstração
  const salesData = [
    { name: 'Jan', vendas: 4000, clientes: 240 },
    { name: 'Fev', vendas: 3000, clientes: 139 },
    { name: 'Mar', vendas: 2000, clientes: 980 },
    { name: 'Abr', vendas: 2780, clientes: 390 },
    { name: 'Mai', vendas: 1890, clientes: 480 },
    { name: 'Jun', vendas: 2390, clientes: 380 },
  ];

  const systemsData = [
    { name: 'Barbearia', value: 40, color: '#8884d8' },
    { name: 'Clínica', value: 30, color: '#82ca9d' },
    { name: 'Loja', value: 20, color: '#ffc658' },
    { name: 'Outros', value: 10, color: '#ff7300' },
  ];

  const recentCustomers = [
    { id: 1, name: "João Silva", email: "joao@email.com", system: "Barbearia", status: "ativo", value: "R$ 97" },
    { id: 2, name: "Maria Santos", email: "maria@email.com", system: "Clínica", status: "trial", value: "R$ 147" },
    { id: 3, name: "Pedro Costa", email: "pedro@email.com", system: "Loja", status: "ativo", value: "R$ 197" },
    { id: 4, name: "Ana Lima", email: "ana@email.com", system: "Barbearia", status: "cancelado", value: "R$ 97" },
  ];

  const metrics = {
    totalRevenue: "R$ 45.230",
    totalCustomers: 1234,
    activeSubscriptions: 892,
    growthRate: "+12.5%"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header do Dashboard */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard Empresarial</h1>
              <p className="text-muted-foreground mt-2">
                Visão geral completa do seu negócio
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2"
              >
                <option value="7">Últimos 7 dias</option>
                <option value="30">Últimos 30 dias</option>
                <option value="90">Últimos 90 dias</option>
                <option value="365">Último ano</option>
              </select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.totalRevenue}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{metrics.growthRate}</span> em relação ao mês anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.totalCustomers}</div>
                <p className="text-xs text-muted-foreground">
                  +180 novos este mês
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assinaturas Ativas</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.activeSubscriptions}</div>
                <p className="text-xs text-muted-foreground">
                  72% taxa de retenção
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Crescimento</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.growthRate}</div>
                <p className="text-xs text-muted-foreground">
                  Média mensal
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs do Dashboard */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full lg:w-[500px] grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="sales">Vendas</TabsTrigger>
              <TabsTrigger value="customers">Clientes</TabsTrigger>
              <TabsTrigger value="systems">Sistemas</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Gráfico de Vendas */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Vendas Mensais
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="vendas" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Distribuição de Sistemas */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5" />
                      Sistemas Mais Vendidos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsPieChart>
                        <Pie
                          data={systemsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {systemsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {systemsData.map((item) => (
                        <div key={item.name} className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm">{item.name}: {item.value}%</span>
                        </div>
                      ))}
                    </div>
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
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nova assinatura - Sistema Barbearia</p>
                        <p className="text-xs text-muted-foreground">João Silva - há 2 minutos</p>
                      </div>
                      <Badge variant="secondary">R$ 97</Badge>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Trial iniciado - Sistema Clínica</p>
                        <p className="text-xs text-muted-foreground">Maria Santos - há 15 minutos</p>
                      </div>
                      <Badge variant="outline">Trial</Badge>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Pagamento processado</p>
                        <p className="text-xs text-muted-foreground">Pedro Costa - há 1 hora</p>
                      </div>
                      <Badge variant="secondary">R$ 197</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Relatório de Vendas Detalhado</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="vendas" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clientes Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentCustomers.map((customer) => (
                      <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-sm text-muted-foreground">{customer.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline">{customer.system}</Badge>
                          <Badge 
                            variant={
                              customer.status === 'ativo' ? 'default' : 
                              customer.status === 'trial' ? 'secondary' : 
                              'destructive'
                            }
                          >
                            {customer.status}
                          </Badge>
                          <span className="font-medium">{customer.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="systems" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sistema Barbearia</CardTitle>
                    <Badge className="w-fit">Mais Popular</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Assinantes Ativos:</span>
                        <span className="font-medium">324</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Receita Mensal:</span>
                        <span className="font-medium">R$ 31.428</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Taxa Conversão:</span>
                        <span className="font-medium text-green-600">8.2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sistema Clínica</CardTitle>
                    <Badge variant="secondary" className="w-fit">Em Crescimento</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Assinantes Ativos:</span>
                        <span className="font-medium">189</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Receita Mensal:</span>
                        <span className="font-medium">R$ 27.783</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Taxa Conversão:</span>
                        <span className="font-medium text-green-600">12.1%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sistema Loja</CardTitle>
                    <Badge variant="outline" className="w-fit">Estável</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Assinantes Ativos:</span>
                        <span className="font-medium">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Receita Mensal:</span>
                        <span className="font-medium">R$ 30.732</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Taxa Conversão:</span>
                        <span className="font-medium text-yellow-600">6.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
