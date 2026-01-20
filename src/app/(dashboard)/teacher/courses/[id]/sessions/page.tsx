import { courses } from "@/data/mock-data";

interface TeacherCourseSessionsPageProps {
  params: { id: string };
}

export default function TeacherCourseSessionsPage({
  params,
}: TeacherCourseSessionsPageProps) {
  const course = courses.find((item) => item.id === params.id) ?? courses[0];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-white">{course.title}</h2>
            <p className="text-sm text-slate-400">회차 관리</p>
          </div>
          <button
            type="button"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            회차 추가
          </button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`session-${index}`}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200"
            >
              <p className="font-semibold text-white">{index + 1}회차</p>
              <p className="mt-2 text-xs text-slate-400">
                콘텐츠 영상 + 실습 과제
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
