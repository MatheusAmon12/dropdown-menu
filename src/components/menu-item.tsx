import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface MenuItemProps {
    title: string,
    items: string[],
    isOpen: boolean,
    handleToggleMenu: () => void,

}

const MenuItem = ({ title, items, isOpen, handleToggleMenu }: MenuItemProps) => {
    return ( 
        <section className="lg:relative">
            <Button variant="ghost" className="gap-2 text-lg" onClick={handleToggleMenu}>
                {title}
                <ChevronDown size={14} />
            </Button>
            {
                isOpen && (
                    <ul className="relative lg:absolute lg:top-10 lg:bg-white lg:text-black lg:rounded-md left-auto">
                        {
                            items.map((item, index) => (
                                <li key={index}>
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
 
export default MenuItem;