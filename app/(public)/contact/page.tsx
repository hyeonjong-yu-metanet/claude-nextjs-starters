import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">문의하기</h1>
          <p className="text-lg text-muted-foreground">
            궁금한 점이 있으시면 언제든지 연락주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <Mail className="size-6 text-primary mb-2" />
              <CardTitle>이메일 문의</CardTitle>
              <CardDescription>
                이메일로 문의하시면 영업일 기준 1-2일 내에 답변드립니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium">support@example.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="size-6 text-primary mb-2" />
              <CardTitle>채팅 지원</CardTitle>
              <CardDescription>
                실시간 채팅 지원은 평일 오전 9시 ~ 오후 6시에 가능합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">준비 중입니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
