import Link from "next/link";
import { courses } from "@/data/mock-data";

const recentCourses = courses.slice(0, 3);

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "진행중", value: "3", trend: "이번 주 +1" },
          { label: "종료", value: "5", trend: "최근 30일" },
          { label: "문의", value: "2", trend: "응답 대기" },
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
            <p className="mt-2 text-xs text-slate-400">{item.trend}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">최근 수강 강의</h2>
          <Link href="/student/courses" className="text-sm text-emerald-300">
            전체 보기
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {recentCourses.map((course) => (
            <Link
              key={course.id}
              href={`/student/courses/${course.id}`}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200"
            >
              <div>
                <p className="font-semibold text-white">{course.title}</p>
                <p className="text-xs text-slate-400">{course.teacherName}</p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">
                {course.status}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
