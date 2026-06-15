import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Terminal, Palette, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

const guides = [
  {
    icon: Terminal,
    title: "설치 및 설정",
    description: "프로젝트를 클론하고 의존성을 설치하여 개발 서버를 시작하는 방법입니다.",
    href: "#installation",
  },
  {
    icon: Palette,
    title: "테마 설정",
    description: "다크/라이트 모드와 색상 시스템을 프로젝트에 맞게 커스터마이징합니다.",
    href: "#theming",
  },
  {
    icon: Layers,
    title: "컴포넌트",
    description: "ShadCN UI 컴포넌트 목록과 사용 예시를 확인합니다.",
    href: "#components",
  },
]

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">문서</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Next.js 스타터킷을 빠르게 시작하고 프로젝트에 맞게 확장하는 방법을 안내합니다.
          </p>
          <Button asChild>
            <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
              Next.js 공식 문서
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guides.map((guide) => {
            const Icon = guide.icon
            return (
              <Card key={guide.title} className="hover:ring-1 hover:ring-primary/30 transition-all">
                <CardHeader>
                  <Icon className="size-6 text-primary mb-2" />
                  <CardTitle className="text-base">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{guide.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
