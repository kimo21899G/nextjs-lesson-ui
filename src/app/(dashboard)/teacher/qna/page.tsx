import { qnaItems } from "@/data/mock-data";

export default function TeacherQnaPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">문의 관리</h2>
          <div className="flex gap-2 text-sm text-slate-300">
            {["전체", "대기", "답변완료"].map((status) => (
              <span
                key={status}
                className="rounded-full border border-slate-700 px-3 py-1"
              >
                {status}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {qnaItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div className="flex items-center justify-between text-sm">
                <p className="font-semibold text-white">{item.title}</p>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                등록일 {item.createdAt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
