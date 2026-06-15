import { FileText, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/common/page-header"

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="게시물"
        description="콘텐츠 게시물을 관리합니다."
        actions={
          <Button size="sm">
            <Plus className="mr-2 size-3.5" />
            게시물 작성
          </Button>
        }
      />

      <Card>
        <CardHeader>
          <FileText className="size-8 text-muted-foreground mb-2" />
          <CardTitle>게시물 관리 준비 중</CardTitle>
          <CardDescription>
            이 페이지에 게시물 목록, 작성, 편집 기능을 구현할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            예: 게시물 테이블, 카테고리 필터, 에디터 연동 등
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
