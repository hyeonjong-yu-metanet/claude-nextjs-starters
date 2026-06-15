import { BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/common/page-header"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="분석"
        description="트래픽 및 사용자 행동 데이터를 확인합니다."
      />

      <Card>
        <CardHeader>
          <BarChart3 className="size-8 text-muted-foreground mb-2" />
          <CardTitle>분석 대시보드 준비 중</CardTitle>
          <CardDescription>
            이 페이지에 차트, 지표, 리포트 등 분석 기능을 구현할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            예: 방문자 추이 차트, 페이지별 트래픽, 전환율 등
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
