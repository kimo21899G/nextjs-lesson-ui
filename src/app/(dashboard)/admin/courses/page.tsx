import { courses } from "@/data/mock-data";

export default function AdminCoursesPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">전체 강의 관리</h2>
        <span className="text-xs text-slate-400">총 {courses.length}건</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/60 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">강의명</th>
              <th className="px-4 py-3">강사</th>
              <th className="px-4 py-3">상태</th>
              <th className="px-4 py-3">관리</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-t border-slate-800">
                <td className="px-4 py-3 text-slate-200">{course.title}</td>
                <td className="px-4 py-3 text-slate-300">{course.teacherName}</td>
                <td className="px-4 py-3 text-slate-300">{course.status}</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200"
                  >
                    상태 변경
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
