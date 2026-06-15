import Link from "next/link"
import {
  Zap,
  Palette,
  Layers,
  Shield,
  Smartphone,
  FileText,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// 기능 카드 데이터 정의
const features = [
  {
    icon: Zap,
    title: "빠른 성능",
    description:
      "Next.js 16 + Turbopack으로 즉각적인 HMR과 최적화된 빌드를 경험하세요.",
  },
  {
    icon: Palette,
    title: "테마 시스템",
    description:
      "oklch 색상 시스템 기반의 다크/라이트 모드를 즉시 사용할 수 있습니다.",
  },
  {
    icon: Layers,
    title: "ShadCN UI v4",
    description:
      "radix-nova 스타일로 구성된 19개 컴포넌트가 이미 설치되어 있습니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description:
      "TypeScript strict 모드와 Zod 스키마로 런타임 오류를 사전에 차단합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description:
      "Tailwind CSS v4 mobile-first 레이아웃으로 모든 화면 크기에 대응합니다.",
  },
  {
    icon: FileText,
    title: "폼 관리",
    description:
      "React Hook Form + Zod 조합으로 복잡한 폼도 간결하게 구현할 수 있습니다.",
  },
] as const

// 기술 스택 배지 데이터
const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript 5",
  "Tailwind CSS v4",
  "ShadCN UI v4",
  "Radix UI",
  "React Hook Form",
  "Zod",
  "next-themes",
  "lucide-react",
  "Turbopack",
]

// 서버 컴포넌트 랜딩 페이지
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* 히어로 섹션 */}
      <section className="py-24 md:py-32 text-center">
        <Badge variant="secondary" className="mb-6">
          최신 버전 v0.1.0
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          프로덕션 준비 완료
          <br />
          <span className="text-muted-foreground">Next.js 스타터킷</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Next.js 16, React 19, Tailwind CSS v4, ShadCN UI v4로 구성된 모던 웹
          스타터킷입니다. 설정 없이 바로 개발을 시작하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/docs">
              시작하기
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 size-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* 기능 그리드 섹션 */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">주요 기능</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            빠른 개발 시작을 위한 모든 것이 준비되어 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="hover:ring-primary/30 transition-all"
              >
                <CardHeader>
                  <Icon className="size-8 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-16 mb-8">
        <div className="bg-muted/40 rounded-2xl px-8 py-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">기술 스택</h2>
          <p className="text-muted-foreground mb-8">
            검증된 최신 기술로 구성된 스택입니다.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-24 mb-8">
        <div className="bg-primary text-primary-foreground rounded-2xl px-8 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            지금 시작하세요
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
            이 스타터킷으로 프로젝트를 빠르게 시작하고 비즈니스 로직에
            집중하세요.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/docs">
              템플릿 사용하기
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
