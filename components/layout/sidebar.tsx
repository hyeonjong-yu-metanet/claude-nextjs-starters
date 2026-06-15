"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  ChevronLeft,
} from "lucide-react"
import { useMediaQuery } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useUiStore } from "@/stores/ui-store"
import { cn } from "@/lib/utils"

// 사이드바 네비게이션 항목 정의
const navItems = [
  { href: "/dashboard", label: "대시보드", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "분석", icon: BarChart3 },
  { href: "/dashboard/users", label: "사용자", icon: Users },
  { href: "/dashboard/posts", label: "게시물", icon: FileText },
  { href: "/dashboard/settings", label: "설정", icon: Settings },
] as const

// 접을 수 있는 대시보드 사이드바
// useMediaQuery(usehooks-ts): 모바일에서는 자동으로 닫힘
export function Sidebar() {
  const pathname = usePathname()
  const { sidebarOpen, toggleSidebar } = useUiStore()
  const isMobile = useMediaQuery("(max-width: 768px)")

  // 모바일에서는 사이드바 숨김
  if (isMobile) return null

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "relative flex flex-col border-r bg-background transition-all duration-300",
          sidebarOpen ? "w-56" : "w-14"
        )}
      >
        {/* 로고 영역 */}
        <div
          className={cn(
            "flex h-14 items-center border-b px-3",
            sidebarOpen ? "justify-between" : "justify-center"
          )}
        >
          {sidebarOpen && (
            <span className="font-bold text-sm truncate">스타터킷</span>
          )}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "사이드바 닫기" : "사이드바 열기"}
          >
            <ChevronLeft
              className={cn(
                "size-4 transition-transform duration-300",
                !sidebarOpen && "rotate-180"
              )}
            />
          </Button>
        </div>

        {/* 네비게이션 */}
        <ScrollArea className="flex-1">
          <nav className="flex flex-col gap-1 p-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              const linkContent = (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors",
                    "hover:bg-muted hover:text-foreground",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground",
                    !sidebarOpen && "justify-center px-2"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="size-4 shrink-0" />
                  {sidebarOpen && (
                    <span className="truncate">{item.label}</span>
                  )}
                </Link>
              )

              // 접힌 상태에서는 Tooltip으로 레이블 표시
              if (!sidebarOpen) {
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                    <TooltipContent side="right">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                )
              }

              return <div key={item.href}>{linkContent}</div>
            })}
          </nav>
        </ScrollArea>

        {/* 하단 영역 */}
        <div className="p-2">
          <Separator className="mb-2" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings"
                className={cn(
                  "flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground",
                  "hover:bg-muted hover:text-foreground transition-colors",
                  !sidebarOpen && "justify-center"
                )}
              >
                <Settings className="size-4 shrink-0" />
                {sidebarOpen && <span>설정</span>}
              </Link>
            </TooltipTrigger>
            {!sidebarOpen && (
              <TooltipContent side="right">설정</TooltipContent>
            )}
          </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  )
}
