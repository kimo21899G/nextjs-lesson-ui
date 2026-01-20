import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-md items-center px-6 py-12">
        <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h1 className="text-2xl font-semibold text-white">회원가입</h1>
          <p className="mt-2 text-sm text-slate-400">
            간단한 정보로 학습을 시작하세요.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-slate-300">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">이메일</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">비밀번호</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              회원가입
            </button>
          </form>
          <p className="mt-6 text-sm text-slate-400">
            이미 계정이 있나요?{" "}
            <Link href="/auth/sign-in" className="text-emerald-300">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
