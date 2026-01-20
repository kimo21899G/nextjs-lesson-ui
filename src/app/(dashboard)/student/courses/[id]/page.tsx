import { courses } from "@/data/mock-data";

interface StudentCourseDetailPageProps {
  params: { id: string };
}

export default function StudentCourseDetailPage({
  params,
}: StudentCourseDetailPageProps) {
  const course = courses.find((item) => item.id === params.id) ?? courses[0];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">{course.title}</h2>
        <p className="mt-2 text-sm text-slate-400">{course.summary}</p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex flex-wrap gap-3" role="tablist">
          {["회차", "자료", "Q&A"].map((tab) => (
            <span
              key={tab}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`session-${index}`}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200"
            >
              Session {index + 1} · 실습 과제
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h3 className="text-lg font-semibold text-white">질문 작성</h3>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="질문 제목"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
          <textarea
            placeholder="질문 내용을 입력하세요"
            className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
          <button
            type="button"
            className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            질문 등록
          </button>
        </form>
      </section>
    </div>
  );
}
