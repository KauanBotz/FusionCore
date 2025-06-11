
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import Header from "@/components/Header";

const Admin = () => {
  const [systems, setSystems] = useState([
    {
      id: 1,
      name: "Sistema para Barbearia",
      description: "Completo sistema de agendamento, controle de clientes, vendas e estoque para barbearias e salões.",
      price: 97,
      category: "beleza",
      status: "ativo"
    },
    {
      id: 2,
      name: "Sistema para Clínica",
      description: "Gestão completa de pacientes, prontuários eletrônicos, agendamentos e faturamento médico.",
      price: 147,
      category: "saude",
      status: "ativo"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingSystem, setEditingSystem] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredSystems = systems.filter(system =>
    system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    system.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (system: any) => {
    setEditingSystem(system);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (editingSystem.id) {
      // Update existing system
      setSystems(systems.map(s => s.id === editingSystem.id ? editingSystem : s));
    } else {
      // Add new system
      setSystems([...systems, { ...editingSystem, id: Date.now() }]);
    }
    setIsDialogOpen(false);
    setEditingSystem(null);
  };

  const handleDelete = (id: number) => {
    setSystems(systems.filter(s => s.id !== id));
  };

  const handleNewSystem = () => {
    setEditingSystem({
      name: "",
      description: "",
      price: 0,
      category: "",
      status: "ativo"
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Administração de Sistemas
              </h1>
              <p className="text-xl text-muted-foreground">
                Gerencie todos os sistemas disponíveis na plataforma
              </p>
            </div>

            {/* Search and Actions */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar sistemas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={handleNewSystem} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Plus className="mr-2 h-4 w-4" />
                Novo Sistema
              </Button>
            </div>

            {/* Systems Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSystems.map((system) => (
                <Card key={system.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{system.name}</CardTitle>
                      <Badge variant={system.status === "ativo" ? "default" : "secondary"}>
                        {system.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {system.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-accent">R$ {system.price}</div>
                        <div className="text-xs text-muted-foreground">/mês</div>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {system.category}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(system)}
                        className="flex-1"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(system.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredSystems.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Nenhum sistema encontrado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar sua busca ou crie um novo sistema.
                </p>
                <Button onClick={handleNewSystem} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Primeiro Sistema
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Edit/Create Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingSystem?.id ? "Editar Sistema" : "Novo Sistema"}
              </DialogTitle>
            </DialogHeader>
            
            {editingSystem && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Sistema</Label>
                  <Input
                    id="name"
                    value={editingSystem.name}
                    onChange={(e) => setEditingSystem({...editingSystem, name: e.target.value})}
                    placeholder="Ex: Sistema para Barbearia"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Input
                    id="description"
                    value={editingSystem.description}
                    onChange={(e) => setEditingSystem({...editingSystem, description: e.target.value})}
                    placeholder="Descrição completa do sistema..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Preço (R$/mês)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={editingSystem.price}
                      onChange={(e) => setEditingSystem({...editingSystem, price: Number(e.target.value)})}
                      placeholder="97"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Input
                      id="category"
                      value={editingSystem.category}
                      onChange={(e) => setEditingSystem({...editingSystem, category: e.target.value})}
                      placeholder="beleza, saude, varejo..."
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSave} className="bg-accent text-accent-foreground hover:bg-accent/90">
                    {editingSystem.id ? "Salvar Alterações" : "Criar Sistema"}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Admin;
