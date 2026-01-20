"use client";

import Image from "next/image";

const workItems = [
  {
    title: "UI 정리",
    detail: "코드 정보 패널 레이아웃을 재정비하고 섹션 구성을 단순화합니다.",
    status: "진행 중",
  },
  {
    title: "API 연결",
    detail: "학습 기록 API와 연동해 데이터 흐름을 점검합니다.",
    status: "대기",
  },
  {
    title: "에러 로깅",
    detail: "클라이언트 오류를 수집해 빠르게 트러블슈팅할 수 있도록 준비합니다.",
    status: "완료",
  },
];

const codeInsights = [
  {
    label: "오늘 편집한 파일",
    value: "src/app/page.tsx",
  },
  {
    label: "집중 모드",
    value: "레이아웃 정돈 및 가독성 개선",
  },
  {
    label: "다음 체크포인트",
    value: "데이터 소스 연결 및 알림 설정",
  },
];

const summary = {
  title: "작업 요약",
  content:
    "코드 정보 작업창이 다시 보이도록 구성 요소를 정리했고, 상태 카드와 체크포인트를 함께 표시했습니다. 필요 시 데이터 연동만 붙이면 바로 실시간 작업 보드로 사용할 수 있습니다.",
};

const exportPayload = {
  generatedAt: "오늘",
  workItems,
  codeInsights,
  summary,
};

const downloadExport = () => {
  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "code-info-workspace.json";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
        <header className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-black/30">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-slate-800/80 p-3">
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={64}
                  height={24}
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">
                  nextjs-lesson-ui
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-white">
                  코드 정보 작업창
                </h1>
              </div>
            </div>
            <button
              type="button"
              onClick={downloadExport}
              className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              전체 내용 다운로드
            </button>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            오늘 작업했던 코드 정보가 한눈에 보이도록 카드형 작업창을
            복구했습니다. 변경 요약, 진행 상태, 다음 액션을 여기에서 확인할 수
            있어요.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">작업 상태</h2>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                업데이트 완료
              </span>
            </div>
            <div className="grid gap-4">
              {workItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-xl font-semibold text-white">코드 정보</h2>
            <div className="flex flex-col gap-4">
              {codeInsights.map((insight) => (
                <div
                  key={insight.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {insight.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-200">
                    {insight.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-4 text-sm text-slate-400">
              작업 메모를 추가하려면 카드 영역을 클릭하세요.
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-white">{summary.title}</h2>
            <button
              type="button"
              onClick={downloadExport}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:text-white"
            >
              요약 포함 다운로드
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {summary.content}
          </p>
        </section>
      </main>
    </div>
  );
}
