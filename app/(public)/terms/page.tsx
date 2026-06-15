export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">이용약관</h1>
          <p className="text-sm text-muted-foreground">최종 업데이트: 2026년 6월 15일</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">제1조 (목적)</h2>
            <p className="text-muted-foreground leading-relaxed">
              이 약관은 본 서비스가 제공하는 서비스의 이용 조건 및 절차, 회사와 이용자 간의
              권리와 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">제2조 (서비스 이용)</h2>
            <p className="text-muted-foreground leading-relaxed">
              서비스를 이용하기 위해서는 본 약관에 동의해야 하며, 만 14세 이상이어야 합니다.
              이용자는 본인의 계정을 타인에게 양도하거나 공유할 수 없습니다.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">제3조 (서비스 변경 및 중단)</h2>
            <p className="text-muted-foreground leading-relaxed">
              서비스는 운영상, 기술상의 필요에 따라 서비스를 변경하거나 중단할 수 있으며,
              이 경우 사전에 공지합니다.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">제4조 (문의)</h2>
            <p className="text-muted-foreground leading-relaxed">
              약관에 관한 문의는 support@example.com으로 연락 바랍니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
