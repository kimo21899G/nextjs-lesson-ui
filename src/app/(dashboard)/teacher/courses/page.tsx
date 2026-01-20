import Link from "next/link";
import { courses } from "@/data/mock-data";

export default function TeacherCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">내 개설 강의</h2>
        <Link
          href="/teacher/courses/new"
          className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          새 강의
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <div className="flex items-center justify-between text-xs font-semibold uppercase text-slate-500">
              <span>{course.category}</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-300">
                {course.status}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {course.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{course.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <Link
                href={`/teacher/courses/${course.id}/edit`}
                className="rounded-full border border-slate-700 px-3 py-1 text-slate-200"
              >
                편집
              </Link>
              <Link
                href={`/teacher/courses/${course.id}/sessions`}
                className="rounded-full border border-slate-700 px-3 py-1 text-slate-200"
              >
                회차
              </Link>
              <Link
                href={`/teacher/courses/${course.id}/students`}
                className="rounded-full border border-slate-700 px-3 py-1 text-slate-200"
              >
                수강생
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
