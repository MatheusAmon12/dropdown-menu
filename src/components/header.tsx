import HamburguerMenu from "./hamburguer-menu";
import Menu from "./menu";

const Header = () => {
    return ( 
        <header className="flex items-center justify-between px-16 pt-6">
            <h1 className="text-lg lg:text-2xl font-bold text-white">Dropdown Menu</h1>
            <Menu />
            <HamburguerMenu />   
        </header>
     );
}
 
export default Header;