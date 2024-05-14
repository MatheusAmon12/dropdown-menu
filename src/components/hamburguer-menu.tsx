import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MenuItem from "./menu-item";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const HamburguerMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleToggleMenu = (index: number) => {
        setOpenMenuIndex((prevIndex) => prevIndex === index ? null : index);
    }

    return ( 
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent className="flex flex-col items-start">    
                    <MenuItem
                        title="Projetos"
                        items={
                            [
                                "Apresentação Pessoal",
                                "Layout Responsivo",
                                "Formulário de Contato",
                                "Galeria de Imagens",
                            ]
                        }
                        isOpen={openMenuIndex === 0}
                        handleToggleMenu={() => handleToggleMenu(0)}
                    />

                    <MenuItem
                        title="Social"
                        items={
                            [
                                "LinkedIn",
                                "GitHub",
                                "Behance",
                            ]
                        }
                        isOpen={openMenuIndex === 1}
                        handleToggleMenu={() => handleToggleMenu(1)}
                    />

                    <MenuItem
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
                        isOpen={openMenuIndex === 2}
                        handleToggleMenu={() => handleToggleMenu(2)}
                    />
                </SheetContent>
            </Sheet>
        </div>
     );
}
 
export default HamburguerMenu;