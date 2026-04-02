import { Link, Route, Routes } from "react-router-dom"
import Todo from "./components/Todo"
import Cal from "./components/Cal"
import LoginForm from "./components/LoginForm"
import Item from "./components/Item"

function App() {
  return (
    <>
      <nav>
        <Link to='/'>할 일 목록</Link> | <Link to='/cal'>간단한 계산기</Link> | <Link to='/item'>아이템 선택</Link> | <Link to='/login'>로그인 폼</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/cal" element={<Cal />} />
          <Route path="/item" element={<Item />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App
