# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 개발 명령어

```bash
npm run dev      # Turbopack 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

테스트 프레임워크는 현재 설정되어 있지 않습니다.

## 버전 주의사항

이 프로젝트는 **기존 훈련 데이터와 다른 버전**을 사용합니다. 코드 작성 전 반드시 확인:

- **Next.js 16.2.9** — App Router 기반. breaking change 다수. `node_modules/next/dist/docs/` 참고
- **Tailwind CSS v4** — `tailwind.config.js` 없음. CSS 파일에 `@import "tailwindcss"` 방식 사용
- **shadcn/ui v4** — `radix-ui` 단일 패키지 사용 (개별 `@radix-ui/*` 패키지 아님). `shadcn add <컴포넌트>` 명령으로 추가
- **Zod v4** — v3 대비 API 변경 있음
- **Zustand v5** — v4 대비 API 변경 있음 (특히 `create` 함수 타입)

## 아키텍처: 라우트 그룹별 레이아웃 분리

핵심 설계: **루트 레이아웃은 Providers + Toaster만** 담당. Header/Footer를 루트 레이아웃에 추가하면 모든 페이지에 노출되므로 절대 추가하지 말 것.

레이아웃은 세 라우트 그룹으로 분리됩니다:

| 라우트 그룹 | 경로 | 레이아웃 특징 |
|---|---|---|
| `(public)` | `/`, `/about`, `/blog`, `/contact`, `/docs`, `/privacy`, `/terms` | Header + Footer 포함 |
| `(auth)` | `/login`, `/register`, `/forgot-password` | Header/Footer 없음, 화면 중앙 정렬 |
| `(dashboard)` | `/dashboard/**` | Sidebar + DashboardHeader, Header/Footer 없음 |

새 공개 페이지 → `app/(public)/` 하위에 생성  
새 인증 페이지 → `app/(auth)/` 하위에 생성  
새 대시보드 페이지 → `app/(dashboard)/dashboard/` 하위에 생성

## 상태 관리

Zustand 스토어는 `stores/` 디렉토리에 위치합니다.

- `stores/ui-store.ts` — 사이드바 open/close 상태 (`persist` 미들웨어로 localStorage 유지)

## 폼 패턴

React Hook Form + Zod를 조합해 사용합니다. 기존 인증 페이지(`app/(auth)/login/page.tsx` 등)를 참고하세요.

```typescript
const schema = z.object({ ... })
type FormData = z.infer<typeof schema>
const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema)
})
```

## 데이터 페칭

`components/providers.tsx`에서 TanStack Query v5가 설정되어 있습니다 (staleTime: 1분, retry: 1회). 서버 컴포넌트에서는 직접 fetch, 클라이언트 컴포넌트에서는 `useQuery`/`useMutation` 사용.

## 공통 컴포넌트

`components/common/`에 재사용 컴포넌트가 있습니다:

- `PageHeader` — 페이지 제목/설명/액션 버튼 영역 (대시보드 페이지에서 사용)
- `EmptyState` — 빈 목록 상태 UI
- `LoadingSkeleton` — CardSkeleton, TableSkeleton, PageSkeleton 제공
