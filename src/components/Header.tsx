import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b border-border h-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/d90d82aa-c3d0-42d6-8603-a1869baa91d4.png" 
                alt="FusionCore" 
                className="h-8 w-auto dark:hidden"
              />
              <img 
                src="/lovable-uploads/4090844a-f7f9-4521-9a19-db12d82c6589.png" 
                alt="FusionCore" 
                className="h-8 w-auto hidden dark:block"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/sistemas" className="text-foreground hover:text-accent transition-colors">
              Sistemas
            </Link>
            <a href="/#como-funciona" className="text-foreground hover:text-accent transition-colors">
              Como Funciona
            </a>
            <a href="/#precos" className="text-foreground hover:text-accent transition-colors">
              Preços
            </a>
            <Link to="/sobre" className="text-foreground hover:text-accent transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-foreground hover:text-accent transition-colors">
              Contato
            </Link>
            {isAuthenticated && user?.type === 'admin' && (
              <Link to="/dashboard" className="text-foreground hover:text-accent transition-colors">
                Dashboard Admin
              </Link>
            )}
            {isAuthenticated && user?.type === 'client' && (
              <Link to="/client-dashboard" className="text-foreground hover:text-accent transition-colors">
                Meu Painel
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Olá, {user?.name}
                </span>
                <Button variant="ghost" onClick={handleLogout}>
                  Sair
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Entrar</Button>
                </Link>
                <Link to="/sistemas">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Ver Sistemas
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <Link to="/sistemas" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sistemas
              </Link>
              <a href="/#como-funciona" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Como Funciona
              </a>
              <a href="/#precos" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Preços
              </a>
              <Link to="/sobre" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
              <Link to="/contato" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
              {isAuthenticated && user?.type === 'admin' && (
                <Link to="/dashboard" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Dashboard Admin
                </Link>
              )}
              {isAuthenticated && user?.type === 'client' && (
                <Link to="/client-dashboard" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Meu Painel
                </Link>
              )}
              <div className="flex flex-col space-y-2 pt-4">
                {isAuthenticated ? (
                  <>
                    <span className="text-sm text-muted-foreground px-4">
                      Olá, {user?.name}
                    </span>
                    <Button variant="ghost" className="w-full" onClick={handleLogout}>
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full">Entrar</Button>
                    </Link>
                    <Link to="/sistemas" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Ver Sistemas
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
