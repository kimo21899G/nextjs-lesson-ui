import Link from "next/link";
import { courses } from "@/data/mock-data";

export default function TeacherDashboardPage() {
  const myCourses = courses.slice(0, 3);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "내 강의 수", value: "5" },
          { label: "진행중", value: "2" },
          { label: "수강요청", value: "8" },
        ].map((item) => (
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
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">빠른 액션</h2>
          <Link
            href="/teacher/courses/new"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            강의 개설
          </Link>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {myCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200"
            >
              <p className="font-semibold text-white">{course.title}</p>
              <p className="mt-2 text-xs text-slate-400">{course.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
