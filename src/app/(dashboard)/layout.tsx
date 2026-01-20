import type { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl gap-6 px-6 py-10">
        <aside className="hidden w-60 flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:flex">
          <div>
            <p className="text-sm font-semibold text-slate-300">Dashboard</p>
            <p className="text-xs text-slate-500">mock navigation</p>
          </div>
          <nav className="space-y-4 text-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Student
              </p>
              <Link href="/student" className="block text-slate-200">
                홈
              </Link>
              <Link href="/student/courses" className="block text-slate-200">
                내 강의
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Teacher
              </p>
              <Link href="/teacher" className="block text-slate-200">
                홈
              </Link>
              <Link href="/teacher/courses" className="block text-slate-200">
                강의 관리
              </Link>
              <Link href="/teacher/qna" className="block text-slate-200">
                문의 관리
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Admin
              </p>
              <Link href="/admin" className="block text-slate-200">
                홈
              </Link>
              <Link href="/admin/courses" className="block text-slate-200">
                강의 관리
              </Link>
              <Link href="/admin/categories" className="block text-slate-200">
                카테고리
              </Link>
            </div>
          </nav>
        </aside>
        <div className="flex-1 space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-4">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">
                Learning Dashboard
              </p>
              <h1 className="text-xl font-semibold text-white">운영 콘솔</h1>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Link
                href="/"
                className="rounded-full border border-slate-700 px-4 py-2 text-slate-200"
              >
                Public 홈
              </Link>
              <button
                type="button"
                className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950"
              >
                로그아웃
              </button>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
