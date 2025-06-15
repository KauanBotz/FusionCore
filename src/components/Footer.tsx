
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/Footer.png" 
              alt="FusionCore" 
              className="h-6 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Transformamos negócios com sistemas prontos e personalizados. 
              Soluções completas para pequenas e médias empresas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Sistemas */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Sistemas</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/sistema/1" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sistema para Conservadora
                </a>
              </li>
              <li>
                <a href="/sistema/2" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sistema Financeiro
                </a>
              </li>
              <li>
                <a href="/sistemas" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Ver Todos os Sistemas
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/sobre" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="/contato" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span className="text-primary-foreground/80">(31) 98288-6064</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:contato@fusioncore.com.br" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  contato@fusioncore.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Belo Horizonte, MG
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2025 FusionCore. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
