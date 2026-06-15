import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

// 공개 페이지 전용 레이아웃 - Header + main + Footer
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
