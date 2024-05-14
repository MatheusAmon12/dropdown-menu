import Menu from "./menu";

const Header = () => {
    return ( 
        <header className="flex items-center justify-between px-10 pt-6">
            <h1 className="text-lg lg:text-2xl font-bold">Dropdown Menu</h1>
            <Menu />
        </header>
     );
}
 
export default Header;