"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

// 다크/라이트 모드 토글 버튼
// resolvedTheme: system 테마일 때도 실제 적용값을 반환
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 하이드레이션 불일치 방지: 마운트 전에는 빈 버튼 렌더링
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled aria-hidden />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={resolvedTheme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}
