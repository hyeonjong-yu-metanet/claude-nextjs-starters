import { TrendingUp, Users, DollarSign, Activity, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PageHeader } from "@/components/common/page-header"

// 통계 카드 데이터
const stats = [
  {
    label: "총 방문자",
    value: "12,430",
    change: "+12.5%",
    icon: TrendingUp,
    positive: true,
  },
  {
    label: "신규 사용자",
    value: "1,284",
    change: "+8.2%",
    icon: Users,
    positive: true,
  },
  {
    label: "월 매출",
    value: "₩4,230,000",
    change: "+3.1%",
    icon: DollarSign,
    positive: true,
  },
  {
    label: "활성 세션",
    value: "342",
    change: "-2.4%",
    icon: Activity,
    positive: false,
  },
] as const

// 최근 주문 예시 데이터
const recentOrders = [
  { id: "#1001", customer: "김민준", status: "완료", amount: "₩82,000" },
  { id: "#1002", customer: "이서연", status: "처리중", amount: "₩45,000" },
  { id: "#1003", customer: "박지호", status: "완료", amount: "₩130,000" },
  { id: "#1004", customer: "최수아", status: "취소", amount: "₩28,000" },
  { id: "#1005", customer: "정도윤", status: "처리중", amount: "₩67,000" },
]

// 주문 상태에 따른 Badge variant
const statusVariant = (status: string) => {
  if (status === "완료") return "default" as const
  if (status === "처리중") return "secondary" as const
  return "destructive" as const
}

// 대시보드 예시 페이지
// PageHeader + 통계 카드 + 주문 테이블 패턴 시연
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="대시보드"
        description="전체 현황을 한눈에 확인하세요."
        actions={
          <Button size="sm">
            <Plus className="mr-2 size-3.5" />
            새 항목 추가
          </Button>
        }
      />

      {/* 통계 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs mt-1 ${stat.positive ? "text-green-600 dark:text-green-400" : "text-destructive"}`}
                >
                  {stat.change} 전월 대비
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 최근 주문 테이블 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 주문</CardTitle>
          <CardDescription>최근 5건의 주문 현황입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>주문번호</TableHead>
                <TableHead>고객명</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-sm">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {order.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
