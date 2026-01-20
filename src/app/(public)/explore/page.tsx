import Link from "next/link";
import { categories, courses } from "@/data/mock-data";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-white">강의 탐색</h1>
          <p className="text-sm text-slate-400">
            필터를 조정해 원하는 강의를 찾아보세요.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">카테고리</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">난이도</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["초급", "중급", "고급"].map((level) => (
                  <span
                    key={level}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">정렬</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["추천순", "최신순", "별점순"].map((sort) => (
                  <span
                    key={sort}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {sort}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-emerald-400/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase text-slate-400">
                <span>{course.category}</span>
                <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                  {course.status}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{course.summary}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>{course.teacherName}</span>
                <span>{course.price}</span>
              </div>
            </Link>
          ))}
        </section>

        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
          {[1, 2, 3, 4].map((page) => (
            <span
              key={page}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800"
            >
              {page}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
