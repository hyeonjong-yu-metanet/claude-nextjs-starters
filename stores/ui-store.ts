import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UiStore {
  sidebarOpen: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

// UI 전역 상태 스토어
// persist 미들웨어로 사이드바 상태를 localStorage에 유지
export const useUiStore = create<UiStore>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
    }),
    { name: "ui-store" }
  )
)
