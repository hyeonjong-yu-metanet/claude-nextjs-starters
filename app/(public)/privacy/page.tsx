export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">개인정보처리방침</h1>
          <p className="text-sm text-muted-foreground">최종 업데이트: 2026년 6월 15일</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">1. 수집하는 개인정보</h2>
            <p className="text-muted-foreground leading-relaxed">
              본 서비스는 회원가입 및 서비스 이용 과정에서 이름, 이메일 주소 등 최소한의
              개인정보를 수집합니다.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">2. 개인정보의 이용 목적</h2>
            <p className="text-muted-foreground leading-relaxed">
              수집된 개인정보는 서비스 제공, 고객 지원, 서비스 개선 목적으로만 사용됩니다.
              제3자에게 판매하거나 공유하지 않습니다.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">3. 개인정보의 보관 기간</h2>
            <p className="text-muted-foreground leading-relaxed">
              개인정보는 서비스 이용 기간 동안 보관되며, 회원 탈퇴 시 즉시 파기됩니다.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">4. 문의</h2>
            <p className="text-muted-foreground leading-relaxed">
              개인정보 처리에 관한 문의는 support@example.com으로 연락 바랍니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
