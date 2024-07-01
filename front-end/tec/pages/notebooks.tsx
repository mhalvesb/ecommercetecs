import Image from "next/image";
import "../global.modules.css";
import styles from "./page.module.css";
import MyHeader from "../components/header/header";
import { Main, Sections } from "./styles/notebooks.styled";
export default function App() {
  return (
    <Main>
      <MyHeader/>
      <Sections>
        <aside>
          <ul>
            <li><h1>Categoria</h1></li>
            <li><span>2GB RAM</span></li>
            <li><span>4GB RAM</span></li>
            <li><span>8GB RAM</span></li>
            <li><span>16GB RAM</span></li>
          </ul>
          <ul>
            <li><h1>Marca</h1></li>
            <li><span>Apple</span></li>
            <li><span>Samsung</span></li>
            <li><span>Acer</span></li>
            <li><span>Asus</span></li>
          </ul>
          
          <ul>
            <li><h1>Avaliação</h1></li>
            <li><input type="radio" name="stars"/>5</li>
            <li><input type="radio" name="stars"/>4 e acima</li>
            <li><input type="radio" name="stars"/>3 e acima</li>
            <li><input type="radio" name="stars"/>2 e acima</li>
            <li><input type="radio" name="stars"/>1 e acima</li>
          </ul>
        </aside>
        <div>dawdawdawdawd</div>
      </Sections>
    </Main>
  );
}
