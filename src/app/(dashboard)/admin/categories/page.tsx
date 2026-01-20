import { categories } from "@/data/mock-data";

export default function AdminCategoriesPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-semibold text-white">카테고리 목록</h2>
        <ul className="mt-4 space-y-3">
          {categories.map((category) => (
            <li
              key={category}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200"
            >
              {category}
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-semibold text-white">카테고리 추가</h2>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="신규 카테고리"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white"
          />
          <button
            type="button"
            className="w-full rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            추가하기
          </button>
        </form>
      </section>
    </div>
  );
}
