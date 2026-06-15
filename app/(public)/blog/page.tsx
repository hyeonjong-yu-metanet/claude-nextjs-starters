import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// 블로그 목록 예시 데이터
const posts = [
  {
    slug: "getting-started",
    title: "시작하기",
    description: "Next.js 스타터킷을 사용하여 프로젝트를 빠르게 시작하는 방법을 알아봅니다.",
    date: "2026-06-01",
  },
  {
    slug: "theming",
    title: "테마 커스터마이징",
    description: "oklch 기반 색상 시스템으로 다크/라이트 모드를 설정하는 방법을 설명합니다.",
    date: "2026-06-08",
  },
  {
    slug: "components",
    title: "컴포넌트 활용 가이드",
    description: "ShadCN UI 컴포넌트를 효과적으로 활용하는 패턴을 소개합니다.",
    date: "2026-06-15",
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">블로그</h1>
          <p className="text-lg text-muted-foreground">
            최신 업데이트와 개발 팁을 확인하세요.
          </p>
        </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:ring-1 hover:ring-primary/30 transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </div>
                  <time className="text-xs text-muted-foreground shrink-0">{post.date}</time>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
