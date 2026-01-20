import { courses } from "@/data/mock-data";

interface TeacherCourseEditPageProps {
  params: { id: string };
}

export default function TeacherCourseEditPage({
  params,
}: TeacherCourseEditPageProps) {
  const course = courses.find((item) => item.id === params.id) ?? courses[0];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-xl font-semibold text-white">강의 수정</h2>
      <p className="mt-2 text-sm text-slate-400">
        {course.title} 강의 정보를 업데이트하세요.
      </p>
      <form className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-slate-300">강의명</label>
          <input
            type="text"
            defaultValue={course.title}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-300">카테고리</label>
          <input
            type="text"
            defaultValue={course.category}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-300">난이도</label>
          <input
            type="text"
            defaultValue={course.level}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-300">기간</label>
          <input
            type="text"
            defaultValue={course.duration}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm text-slate-300">강의 소개</label>
          <textarea
            defaultValue={course.summary}
            className="h-28 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950"
          >
            수정 저장
          </button>
        </div>
      </form>
    </div>
  );
}
