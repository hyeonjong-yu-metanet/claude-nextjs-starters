import Link from "next/link"

// 인증 레이아웃 쉘
// 라우트 그룹 (auth) — URL에는 영향 없음
// 헤더/푸터 없이 중앙 정렬된 단순 구조
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20 px-4">
      {/* 로고 */}
      <Link
        href="/"
        className="mb-8 font-bold text-xl tracking-tight hover:text-primary transition-colors"
      >
        Next.js 스타터킷
      </Link>

      {/* 폼 영역 */}
      {children}

      {/* 푸터 */}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        이용하면{" "}
        <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
          이용약관
        </Link>
        {" "}및{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          개인정보처리방침
        </Link>
        에 동의한 것으로 간주됩니다.
      </p>
    </div>
  )
}
