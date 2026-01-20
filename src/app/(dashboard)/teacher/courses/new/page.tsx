export default function TeacherCourseNewPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-xl font-semibold text-white">강의 개설</h2>
      <p className="mt-2 text-sm text-slate-400">
        기본 정보를 입력해 새로운 강의를 등록하세요.
      </p>
      <form className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-slate-300">강의명</label>
          <input
            type="text"
            placeholder="강의명을 입력하세요"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-300">카테고리</label>
          <input
            type="text"
            placeholder="프론트엔드"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-300">난이도</label>
          <input
            type="text"
            placeholder="중급"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-300">기간</label>
          <input
            type="text"
            placeholder="8주"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm text-slate-300">강의 소개</label>
          <textarea
            placeholder="강의의 특징과 목표를 작성하세요"
            className="h-28 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950"
          >
            강의 등록
          </button>
        </div>
      </form>
    </div>
  );
}
