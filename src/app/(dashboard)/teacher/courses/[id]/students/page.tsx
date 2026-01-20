import { enrollments } from "@/data/mock-data";

export default function TeacherCourseStudentsPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">수강 신청 목록</h2>
        <span className="text-xs text-slate-400">
          총 {enrollments.length}건
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/60 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">신청자</th>
              <th className="px-4 py-3">상태</th>
              <th className="px-4 py-3">신청일</th>
              <th className="px-4 py-3">관리</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((item) => (
              <tr key={item.id} className="border-t border-slate-800">
                <td className="px-4 py-3 text-slate-200">{item.studentName}</td>
                <td className="px-4 py-3 text-slate-300">{item.status}</td>
                <td className="px-4 py-3 text-slate-400">{item.requestedAt}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    type="button"
                    className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-950"
                  >
                    승인
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200"
                  >
                    거절
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
