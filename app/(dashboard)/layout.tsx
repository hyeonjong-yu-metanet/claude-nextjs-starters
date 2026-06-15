import { Sidebar } from "@/components/layout/sidebar"
import { DashboardHeader } from "@/components/layout/dashboard-header"

// 대시보드 레이아웃 쉘
// 라우트 그룹 (dashboard) — URL에는 영향 없음
// RootLayout의 Header/Footer를 대체하는 독립 레이아웃
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-muted/20 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
