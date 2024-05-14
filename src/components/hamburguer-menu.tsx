import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import HamburguerMenuItem from "./hamburguer-menu-item";
import { MenuIcon } from "lucide-react";

const HamburguerMenu = () => {
    return ( 
        <>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
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
        </>
     );
}
 
export default HamburguerMenu;