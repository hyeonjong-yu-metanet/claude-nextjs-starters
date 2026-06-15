"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { PanelLeft, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { useUiStore } from "@/stores/ui-store"

// 대시보드 전용 헤더
// 사이드바 토글 버튼 + 알림 + 사용자 메뉴 포함
export function DashboardHeader() {
  const { toggleSidebar } = useUiStore()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-2 border-b bg-background/95 backdrop-blur-sm px-4">
      {/* 사이드바 토글 */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        aria-label="사이드바 토글"
      >
        <PanelLeft className="size-4" />
      </Button>

      {/* 우측 컨트롤 */}
      <div className="ml-auto flex items-center gap-2">
        {/* 알림 버튼 */}
        <Button variant="ghost" size="icon" aria-label="알림">
          <Bell className="size-4" />
        </Button>

        <ThemeToggle />

        {/* 사용자 드롭다운 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative size-8 rounded-full"
              aria-label="사용자 메뉴"
            >
              <Avatar className="size-8">
                <AvatarFallback className="text-xs">유저</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">사용자</span>
                <span className="text-xs text-muted-foreground">
                  user@example.com
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">프로필</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">설정</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => router.push("/login")}
            >
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
