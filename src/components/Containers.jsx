import { Container } from "@mui/material"
import HeaderWrapper from "./header/HeaderWrapper"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
import BoardPage from "./BoardPage"
import ChatPage from "./ChatPage"
import { Routes, Route } from "react-router-dom"

export default function Containers() {
  return (
    <Container>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Container>
  )
}
