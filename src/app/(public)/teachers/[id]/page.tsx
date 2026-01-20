import Link from "next/link";
import { courses, teachers } from "@/data/mock-data";

interface TeacherProfilePageProps {
  params: { id: string };
}

export default function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const teacher = teachers.find((item) => item.id === params.id) ?? teachers[0];
  const teacherCourses = courses.filter((course) =>
    teacher.courseIds.includes(course.id)
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
        <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-800 text-2xl font-semibold text-white">
              {teacher.name.slice(0, 1)}
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-white">{teacher.name}</h1>
              <p className="mt-2 text-sm text-slate-400">{teacher.role}</p>
              <p className="mt-4 text-sm text-slate-300">{teacher.bio}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {teacher.specialties.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">개설 강의</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {teacherCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-emerald-400/60"
              >
                <p className="text-xs font-semibold uppercase text-slate-500">
                  {course.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{course.summary}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                  <span>{course.status}</span>
                  <span>{course.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
