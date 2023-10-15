import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage";
import Login from "./components/login";
import Quiz from "./components/quizes.js";
import QuizPage from "./components/quizSelect.js";
import ScoresPage from "./components/scores";
import { PrivateRoute } from "./privateroute";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="quiz/:Id" element={<Quiz />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="scores" element={<ScoresPage />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
