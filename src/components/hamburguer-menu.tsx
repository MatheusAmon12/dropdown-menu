import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent } from "./ui/sheet";

const HamburguerMenu = () => {
    return ( 
        <Sheet open>
            <SheetContent className="flex flex-col items-start">     
                <Button variant="ghost" className="gap-2 text-lg">
                    Projetos
                    <ChevronDown size={14} />
                </Button>
            
                <Button variant="ghost" className="gap-2 text-lg">
                    Social
                    <ChevronDown size={14} />
                </Button>
            
            
                <Button variant="ghost" className="gap-2 text-lg">
                    Certificações
                    <ChevronDown size={14} />
                </Button>
            </SheetContent>
        </Sheet>
     );
}
 
export default HamburguerMenu;