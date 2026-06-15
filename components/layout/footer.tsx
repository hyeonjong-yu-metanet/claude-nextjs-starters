import Link from "next/link"
import { Separator } from "@/components/ui/separator"

// 서버 컴포넌트 - 클라이언트 상태 불필요
export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">Next.js 스타터킷</span>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              홈
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              소개
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              블로그
            </Link>
          </nav>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Next.js 스타터킷. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              이용약관
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
