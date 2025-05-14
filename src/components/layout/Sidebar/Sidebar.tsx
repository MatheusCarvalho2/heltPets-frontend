import { Cat, LayoutDashboard, Settings, LogOut, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import type { Page } from "@/types/Page";

interface SidebarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onLogout: () => void;
  PetName: string;
}

export default function Sidebar({
  onNavigate,
  currentPage,
  onLogout,
  PetName,
}: SidebarProps) {
  return (
    <aside className="w-64 h-screen flex flex-col justify-between bg-zinc-900 border-r border-zinc-800 p-4">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="text-xl font-bold text-white">HealthPets</h1>
        </div>

        <div className="flex items-center gap-2 mb-4 text-zinc-300">
          <Cat />
          <span className="font-medium">{PetName}</span>
        </div>

        <hr className="border-zinc-700 mb-4" />

        <nav className="flex flex-col gap-2">
          <Button
            variant={currentPage === "dashboard" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => onNavigate("dashboard")}
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </Button>
          <Button
            variant={currentPage === "food" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => onNavigate("food")}
          >
            <Utensils className="mr-2 h-5 w-5" />
            Alimentação
          </Button>
        </nav>
      </div>

      <div className="flex flex-col gap-2">
        <Button
          variant={currentPage === "settings" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => onNavigate("settings")}
        >
          <Settings className="mr-2 h-5 w-5" />
          Configurações
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-red-400 hover:text-red-500"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sair
        </Button>
      </div>
    </aside>
  );
}
