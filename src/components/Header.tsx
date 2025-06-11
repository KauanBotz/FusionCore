
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
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
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sistemas" className="text-foreground hover:text-accent transition-colors">
              Sistemas
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-accent transition-colors">
              Como Funciona
            </a>
            <a href="#precos" className="text-foreground hover:text-accent transition-colors">
              Preços
            </a>
            <a href="#contato" className="text-foreground hover:text-accent transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Entrar</Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Começar Agora
            </Button>
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
              <a href="#sistemas" className="text-foreground hover:text-accent transition-colors">
                Sistemas
              </a>
              <a href="#como-funciona" className="text-foreground hover:text-accent transition-colors">
                Como Funciona
              </a>
              <a href="#precos" className="text-foreground hover:text-accent transition-colors">
                Preços
              </a>
              <a href="#contato" className="text-foreground hover:text-accent transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Entrar</Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
