# Dropdown Menu

O objetivo desse projeto foi desenvolver um dropdown menu. A minha solução consistuiu em construir um header que simula o topo de um site contendo diferentes itens nesse componente. O projeto foi desenvolvido utilizando as tecnologias [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) e o [Shadcn](https://ui.shadcn.com/). 

## Observações iniciais

Os botões são apenas figurativos, ou seja, não possuem função estabelecida. Pois o intuito é apenas apresentá-los como um dropdown menu ao clicar.

## Como rodar na minha máquina?

- Clone o repositório no seu computador: `git clone https://github.com/MatheusAmon12/dropdown-menu`
- Execute `npm intall`
- Rode `npm run dev`
- Seu `package.json` deve estar parecido com este:
  ```json
  {
    "dependencies": {
      "@radix-ui/react-dialog": "^1.0.5",
      "@radix-ui/react-slot": "^1.0.2",
      "class-variance-authority": "^0.7.0",
      "clsx": "^2.1.1",
      "lucide-react": "^0.378.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "tailwind-merge": "^2.3.0",
      "tailwindcss-animate": "^1.0.7"
    },
    "devDependencies": {
      "@types/node": "^20.12.12",
      "@types/react": "^18.2.66",
      "@types/react-dom": "^18.2.22",
      "@typescript-eslint/eslint-plugin": "^7.2.0",
      "@typescript-eslint/parser": "^7.2.0",
      "@vitejs/plugin-react": "^4.2.1",
      "autoprefixer": "^10.4.19",
      "eslint": "^8.57.0",
      "eslint-plugin-react-hooks": "^4.6.0",
      "eslint-plugin-react-refresh": "^0.4.6",
      "postcss": "^8.4.38",
      "tailwindcss": "^3.4.3",
      "typescript": "^5.2.2",
      "vite": "^5.2.0"
    }
  }

  ```
- Finalizado!

## Estrutura do projeto

- `public`: arquivos de imagens
- `src`: reúne as peças necessárias para compor o layout do projeto
  - `components`: reúne os componentes do projeto
    - `ui`: omponentes provenientes do Shadcn
    - `hamburguer-menu.tsx`: renderiza o menu hamburguer e gerencia seu estado de abertura. Esse componente só é exibido em telas menores que 1024px. Vide a lógica responsável:
    <br/><br/>
      ```js
      const [windowSize, setWindowSize] = useState(window.innerWidth);
      useEffect(() => {
          const handleResize = () => setWindowSize(window.innerWidth);

          window.addEventListener('resize', handleResize);

          return () => window.removeEventListener('resize', handleResize);
      }, []);
      ```
    <br/><br/>
    - `header.tsx`: renderiza os componentes `<Menu />` e `<HamburguerMenu />` que compõem o heder do projeto
    - `menu-items.tsx`: renderiza os itens do menu dinamicamente. Recebe como props o `title` (é o valor de cada item do menu), `items` (uma lista de subitens que são renderizados nas `<li>`), `isOpen` (contralador do estado do dropdown), `handleToggleMenu` (função que altera o estado do dropdown). Essas props são do tipo:
    <br/><br/>
      ```js
      title: string;
      items: string[];
      isOpen: boolean;
      handleToggleMenu: () => void;
      ```
    <br/><br/>
    - `menu.tsx`: renderiza os itens do menu
  - `lib`: bibliotecas e métodos auxiliares
    - `utils`: métodos auxiliares do Shadcn
  - `App.tsx`: renderiza o `Header`e define o background do projeto
  - `index.css`: estilos globais
  - `main.tsx`: arquivo root

## Como me colocar dentro do projeto?

A partir do diretório `src/App.tsx` você terá acesso ao componente `Header` que renderiza todo conteúdo do dropdown menu. A partir dele você tem acesso aos demais componentes.