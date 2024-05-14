import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Menu = () => {
    return ( 
        <menu className="hidden">
            <ul className="flex items-center">
                <li>
                    <Button variant="ghost" className="gap-2 text-lg">
                        Projetos
                        <ChevronDown size={14} />
                    </Button>
                </li>
                <li>
                    <Button variant="ghost" className="gap-2 text-lg">
                        Social
                        <ChevronDown size={14} />
                    </Button>
                </li>
                <li>
                    <Button variant="ghost" className="gap-2 text-lg">
                        Certificações
                        <ChevronDown size={14} />
                    </Button>
                </li>
            </ul>
        </menu>
     );
}
 
export default Menu;