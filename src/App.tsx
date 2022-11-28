import { Header } from "./components/Header";
import { NewTodo } from "./components/NewTodo";

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <NewTodo />
    </div>
  )
}