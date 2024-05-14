import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MenuItem from "./menu-item";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

const HamburguerMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleToggleMenu = (index: number) => {
        setOpenMenuIndex((prevIndex) => prevIndex === index ? null : index);
    }

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return ( 
        <>
            {
                windowSize < 1024 && (
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <MenuIcon color="white" className="h-6 w-6" />
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
                )
            }
        </>
     );
}
 
export default HamburguerMenu;