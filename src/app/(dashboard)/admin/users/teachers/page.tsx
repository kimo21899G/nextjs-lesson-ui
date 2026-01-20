import { teachers } from "@/data/mock-data";

export default function AdminTeachersPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">강사 목록</h2>
        <span className="text-xs text-slate-400">총 {teachers.length}명</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/60 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">이름</th>
              <th className="px-4 py-3">직무</th>
              <th className="px-4 py-3">전문 분야</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-t border-slate-800">
                <td className="px-4 py-3 text-slate-200">{teacher.name}</td>
                <td className="px-4 py-3 text-slate-300">{teacher.role}</td>
                <td className="px-4 py-3 text-slate-400">
                  {teacher.specialties.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
