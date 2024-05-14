import { Sheet, SheetContent } from "./ui/sheet";
import HamburguerMenuItem from "./hamburguer-menu-item";

const HamburguerMenu = () => {

    return ( 
        <Sheet open>
            <SheetContent className="flex flex-col items-start">    
                <HamburguerMenuItem
                    title="Projetos"
                    items={
                        [
                            "Apresentação Pessoal",
                            "Layout Responsivo",
                            "Formulário de Contato",
                            "Galeria de Imagens",
                        ]
                    }
                />

                <HamburguerMenuItem
                    title="Social"
                    items={
                        [
                            "LinkedIn",
                            "GitHub",
                            "Behance",
                        ]
                    }
                />

                <HamburguerMenuItem
                    title="Certificações"
                    items={
                        [
                            "Formação FullStack JS",
                            "Imersão Frontend",
                            "Imersão MultiCloud",
                            "Figma",
                            "Photoshop",
                        ]
                    }
                />
            </SheetContent>
        </Sheet>
     );
}
 
export default HamburguerMenu;