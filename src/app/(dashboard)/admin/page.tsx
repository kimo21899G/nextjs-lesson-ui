export default function AdminDashboardPage() {
  const metrics = [
    { label: "가입", value: "1,240" },
    { label: "강의", value: "84" },
    { label: "신청", value: "312" },
    { label: "문의", value: "48" },
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <p className="text-xs font-semibold uppercase text-slate-500">
              {item.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">
              {item.value}
            </p>
          </div>
        ))}
      </section>
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-semibold text-white">운영 요약</h2>
        <p className="mt-2 text-sm text-slate-400">
          오늘 처리해야 할 승인 요청이 12건 있습니다. 주요 지표를 확인하고
          빠르게 대응하세요.
        </p>
      </section>
    </div>
  );
}
