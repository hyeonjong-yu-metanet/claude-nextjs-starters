import { Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { PageHeader } from "@/components/common/page-header"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="사용자"
        description="등록된 사용자를 관리합니다."
        actions={
          <Button size="sm">
            <Plus className="mr-2 size-3.5" />
            사용자 추가
          </Button>
        }
      />

      <Card>
        <CardHeader>
          <Users className="size-8 text-muted-foreground mb-2" />
          <CardTitle>사용자 관리 준비 중</CardTitle>
          <CardDescription>
            이 페이지에 사용자 목록, 검색, 편집 기능을 구현할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            예: 사용자 테이블, 역할 관리, 초대 기능 등
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
