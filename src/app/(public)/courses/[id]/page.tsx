import Link from "next/link";
import { courses, teachers } from "@/data/mock-data";

interface CourseDetailPageProps {
  params: { id: string };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = courses.find((item) => item.id === params.id) ?? courses[0];
  const teacher = teachers.find((item) => item.id === course.teacherId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <p className="text-sm font-semibold uppercase text-emerald-300">
            {course.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">{course.title}</h1>
          <p className="mt-3 text-sm text-slate-400">{course.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-slate-700 px-3 py-1">
              {course.status}
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              {course.level}
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              {course.duration}
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              수강생 {course.students}명
            </span>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex flex-wrap gap-3" role="tablist">
                {["소개", "커리큘럼", "자료", "Q&A"].map((tab) => (
                  <span
                    key={tab}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p>
                  이 강의는 실무 프로젝트를 기반으로 설계되어 있으며, 협업과 코드
                  품질에 집중합니다.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-slate-400">
                  <li>핵심 개념 요약 및 실습 과제 제공</li>
                  <li>주차별 피드백 세션 운영</li>
                  <li>수강생 전용 커뮤니티 참여</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-white">커리큘럼 미리보기</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-300">
                {[
                  "온보딩과 환경 설정",
                  "핵심 기능 구현",
                  "협업 패턴 적용",
                  "배포와 운영",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <span className="text-xs font-semibold text-emerald-300">
                      Session {index + 1}
                    </span>
                    <p className="mt-2 font-medium text-slate-100">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-400">수강 신청</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {course.price}
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950"
              >
                수강 신청하기
              </button>
              <div className="mt-4 text-xs text-slate-400">
                강의 시작 전 무료 환불 지원
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-xs font-semibold uppercase text-slate-500">강사</p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {teacher?.name ?? course.teacherName}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {teacher?.bio ?? "현업 경험을 바탕으로 학습을 지원합니다."}
              </p>
              <Link
                href={`/teachers/${course.teacherId}`}
                className="mt-4 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                프로필 보기
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
