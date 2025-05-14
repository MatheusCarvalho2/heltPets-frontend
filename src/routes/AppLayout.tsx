import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { Dashboard } from "@/components/pages/Dashboard/Dashboard";
import { Food } from "@/components/pages/Food/Food";
import { Settings } from "@/components/pages/Settings/Settings";
import type { Page } from "@/types/Page";
import { useState } from "react";

export default function AppLayout() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "food":
        return <Food />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  function logout(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar
        PetName="Pet Name"
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        onLogout={logout}
      />
      <main className="flex-1 p-6">{renderPage()}</main>
    </div>
  );
}
