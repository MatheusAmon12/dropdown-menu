import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HamburguerMenuItemProps {
    title: string,
    items: string[]
}

const HamburguerMenuItem = ({ title, items }: HamburguerMenuItemProps) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return ( 
        <section>
            <Button variant="ghost" className="gap-2 text-lg" onClick={handleToggleMenu}>
                {title}
                <ChevronDown size={14} />
            </Button>
            {
                openMenu && (
                    <ul className={`relative top-0 left-2`}>
                        {
                            items.map((item) => (
                                <li>
                                    <Button variant="ghost">{item}</Button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }       
        </section>
     );
}
 
export default HamburguerMenuItem;