
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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
            <a href="#como-funciona" className="text-foreground hover:text-accent transition-colors">
              Como Funciona
            </a>
            <a href="#precos" className="text-foreground hover:text-accent transition-colors">
              Preços
            </a>
            <Link to="/sobre" className="text-foreground hover:text-accent transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-foreground hover:text-accent transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/sistemas">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Ver Sistemas
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/sistemas" className="text-foreground hover:text-accent transition-colors">
                Sistemas
              </Link>
              <a href="#como-funciona" className="text-foreground hover:text-accent transition-colors">
                Como Funciona
              </a>
              <a href="#precos" className="text-foreground hover:text-accent transition-colors">
                Preços
              </a>
              <Link to="/sobre" className="text-foreground hover:text-accent transition-colors">
                Sobre
              </Link>
              <Link to="/contato" className="text-foreground hover:text-accent transition-colors">
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="ghost" className="w-full">Entrar</Button>
                </Link>
                <Link to="/sistemas">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Ver Sistemas
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
