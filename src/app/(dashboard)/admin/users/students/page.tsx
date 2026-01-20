import { students } from "@/data/mock-data";

export default function AdminStudentsPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">학생 목록</h2>
        <span className="text-xs text-slate-400">총 {students.length}명</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/60 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">이름</th>
              <th className="px-4 py-3">이메일</th>
              <th className="px-4 py-3">상태</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t border-slate-800">
                <td className="px-4 py-3 text-slate-200">{student.name}</td>
                <td className="px-4 py-3 text-slate-300">{student.email}</td>
                <td className="px-4 py-3 text-slate-400">{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
