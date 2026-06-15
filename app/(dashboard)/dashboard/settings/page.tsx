import { Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/common/page-header"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="설정"
        description="서비스 및 계정 설정을 관리합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <Settings className="size-6 text-muted-foreground mb-2" />
            <CardTitle className="text-base">일반 설정</CardTitle>
            <CardDescription>
              서비스 기본 설정을 변경합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">준비 중입니다.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Settings className="size-6 text-muted-foreground mb-2" />
            <CardTitle className="text-base">계정 설정</CardTitle>
            <CardDescription>
              프로필 및 보안 설정을 변경합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">준비 중입니다.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
