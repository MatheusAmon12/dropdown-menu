import { useState } from "react";
import MenuItem from "./menu-item";

const Menu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleToggleMenu = (index: number) => {
        setOpenMenuIndex((prevIndex) => prevIndex === index ? null : index);
    }

    return ( 
        <menu className="hidden lg:flex lg:text-white">
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
        </menu>
     );
}
 
export default Menu;