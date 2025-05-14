import api from "@/service/api/client";
import { useState } from "react";
import logo from "@/assets/logo.svg";


interface LoginProps {
  onLogin: (email: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) return;
    if (!password.trim()) return;

    try {
      const response = await api.post("/login", { email, password });

      if (response.data.token) {
        onLogin(response.data.user);
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userName", response.data.user.name);
      } else {
        setError("Nome inválido ou usuário não encontrado.");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor.");
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/3 bg-zinc-800 text-white flex items-center justify-center">
        <img src={logo} className="w-2/3 h-auto" alt="HealthPets Logo" />
      </div>

      <div className="w-1/2 flex items-center justify-center bg-zinc-700">
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <h1 className="text-3xl font-bold text-green-600 text-center">
            Bem-vindo ao HealthPets
          </h1>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Entrar
          </button>

          <p className="text-center text-sm text-gray-500">
            Não tem uma conta?{" "}
            <a href="/register" className="text-green-500 hover:underline">
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
