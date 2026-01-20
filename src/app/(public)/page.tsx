import Link from "next/link";
import { courses } from "@/data/mock-data";

const featuredCourses = courses.slice(0, 6);

export default function PublicHomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <header className="grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-10 shadow-xl shadow-black/30 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Lesson Platform
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              오늘의 학습을 바로 시작하세요.
            </h1>
            <p className="text-base leading-relaxed text-slate-300">
              강의 탐색부터 수강 관리, 강사 운영, 관리자 대시보드까지 한 번에
              관리할 수 있는 올인원 학습 플랫폼을 소개합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/explore"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                강의 탐색
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400"
              >
                강사로 시작하기
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <h2 className="text-lg font-semibold text-white">오늘의 하이라이트</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                신규 강의 4개가 업데이트되었습니다.
              </li>
              <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                다음 주 오픈 예정 강사 라이브 Q&A 신청이 가능합니다.
              </li>
              <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                학습 리포트 기능이 베타로 제공됩니다.
              </li>
            </ul>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">추천 강의</h2>
            <Link
              href="/explore"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              전체 보기
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-emerald-400/60"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase text-slate-400">
                  <span>{course.category}</span>
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                    {course.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-emerald-200">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{course.summary}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                  <span>{course.teacherName}</span>
                  <span>{course.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
