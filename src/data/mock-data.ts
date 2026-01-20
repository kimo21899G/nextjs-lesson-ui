export type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  status: "모집중" | "진행중" | "완료";
  duration: string;
  students: number;
  rating: number;
  price: string;
  teacherId: string;
  teacherName: string;
  summary: string;
};

export type Teacher = {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  courseIds: string[];
};

export type Student = {
  id: string;
  name: string;
  email: string;
  enrolledCourseIds: string[];
  status: "활동중" | "휴면";
};

export type Enrollment = {
  id: string;
  courseId: string;
  studentName: string;
  status: "대기" | "승인" | "거절";
  requestedAt: string;
};

export type QnaItem = {
  id: string;
  courseId: string;
  title: string;
  status: "대기" | "답변완료";
  createdAt: string;
};

export const courses: Course[] = [
  {
    id: "course-01",
    title: "React 실전 프로젝트",
    category: "프론트엔드",
    level: "중급",
    status: "진행중",
    duration: "8주",
    students: 124,
    rating: 4.8,
    price: "₩189,000",
    teacherId: "teacher-01",
    teacherName: "김서연",
    summary: "실제 서비스에 적용할 수 있는 React 패턴과 상태 관리 전략을 배웁니다.",
  },
  {
    id: "course-02",
    title: "Next.js 기반 SaaS 만들기",
    category: "풀스택",
    level: "중급",
    status: "모집중",
    duration: "10주",
    students: 86,
    rating: 4.7,
    price: "₩249,000",
    teacherId: "teacher-02",
    teacherName: "박지훈",
    summary: "Next.js와 Prisma로 구독형 SaaS를 설계하고 배포까지 진행합니다.",
  },
  {
    id: "course-03",
    title: "데이터 분석가를 위한 SQL",
    category: "데이터",
    level: "초급",
    status: "모집중",
    duration: "6주",
    students: 210,
    rating: 4.6,
    price: "₩129,000",
    teacherId: "teacher-03",
    teacherName: "최민지",
    summary: "실무 데이터를 기반으로 SQL 쿼리를 작성하고 리포트를 만들어요.",
  },
  {
    id: "course-04",
    title: "UI/UX 디자인 시스템",
    category: "디자인",
    level: "중급",
    status: "진행중",
    duration: "7주",
    students: 92,
    rating: 4.5,
    price: "₩159,000",
    teacherId: "teacher-04",
    teacherName: "이수현",
    summary: "브랜드 일관성을 유지하는 디자인 시스템을 기획하고 구축합니다.",
  },
  {
    id: "course-05",
    title: "AI 서비스 기획 워크숍",
    category: "기획",
    level: "초급",
    status: "모집중",
    duration: "4주",
    students: 58,
    rating: 4.4,
    price: "₩99,000",
    teacherId: "teacher-05",
    teacherName: "오세훈",
    summary: "AI 기반 서비스 아이디어를 구체화하고 MVP까지 설계합니다.",
  },
  {
    id: "course-06",
    title: "고급 타입스크립트 패턴",
    category: "프론트엔드",
    level: "고급",
    status: "완료",
    duration: "5주",
    students: 140,
    rating: 4.9,
    price: "₩179,000",
    teacherId: "teacher-01",
    teacherName: "김서연",
    summary: "유틸리티 타입과 제네릭을 활용해 대규모 앱 설계를 돕습니다.",
  },
  {
    id: "course-07",
    title: "백엔드 API 설계",
    category: "백엔드",
    level: "중급",
    status: "진행중",
    duration: "9주",
    students: 74,
    rating: 4.5,
    price: "₩209,000",
    teacherId: "teacher-02",
    teacherName: "박지훈",
    summary: "확장 가능한 REST API 구조와 인증/권한 전략을 학습합니다.",
  },
  {
    id: "course-08",
    title: "데이터 시각화 대시보드",
    category: "데이터",
    level: "중급",
    status: "모집중",
    duration: "6주",
    students: 63,
    rating: 4.3,
    price: "₩149,000",
    teacherId: "teacher-03",
    teacherName: "최민지",
    summary: "BI 도구와 D3를 활용해 대시보드를 구축합니다.",
  },
];

export const teachers: Teacher[] = [
  {
    id: "teacher-01",
    name: "김서연",
    role: "프론트엔드 리드",
    bio: "스타트업에서 디자인 시스템과 프론트엔드 아키텍처를 이끌어온 개발자입니다.",
    specialties: ["React", "TypeScript", "Design System"],
    courseIds: ["course-01", "course-06"],
  },
  {
    id: "teacher-02",
    name: "박지훈",
    role: "풀스택 엔지니어",
    bio: "SaaS 제품을 처음부터 출시까지 경험한 풀스택 개발자입니다.",
    specialties: ["Next.js", "Prisma", "API"],
    courseIds: ["course-02", "course-07"],
  },
  {
    id: "teacher-03",
    name: "최민지",
    role: "데이터 애널리스트",
    bio: "데이터 기반 의사결정과 분석 자동화를 돕는 컨설턴트입니다.",
    specialties: ["SQL", "BI", "Visualization"],
    courseIds: ["course-03", "course-08"],
  },
  {
    id: "teacher-04",
    name: "이수현",
    role: "프로덕트 디자이너",
    bio: "다양한 서비스 경험을 바탕으로 사용자 경험을 설계합니다.",
    specialties: ["UX", "UI", "Design Ops"],
    courseIds: ["course-04"],
  },
  {
    id: "teacher-05",
    name: "오세훈",
    role: "서비스 기획자",
    bio: "AI 제품 전략과 시장 검증을 전문으로 하는 PM입니다.",
    specialties: ["Product", "AI", "Strategy"],
    courseIds: ["course-05"],
  },
];

export const students: Student[] = [
  {
    id: "student-01",
    name: "홍지민",
    email: "jimin@example.com",
    enrolledCourseIds: ["course-01", "course-02"],
    status: "활동중",
  },
  {
    id: "student-02",
    name: "정민수",
    email: "minsu@example.com",
    enrolledCourseIds: ["course-03"],
    status: "활동중",
  },
  {
    id: "student-03",
    name: "김예린",
    email: "yerin@example.com",
    enrolledCourseIds: ["course-04", "course-05"],
    status: "휴면",
  },
];

export const enrollments: Enrollment[] = [
  {
    id: "enroll-01",
    courseId: "course-02",
    studentName: "한도윤",
    status: "대기",
    requestedAt: "2024.05.12",
  },
  {
    id: "enroll-02",
    courseId: "course-07",
    studentName: "김서준",
    status: "승인",
    requestedAt: "2024.05.10",
  },
  {
    id: "enroll-03",
    courseId: "course-01",
    studentName: "박지영",
    status: "거절",
    requestedAt: "2024.05.08",
  },
];

export const qnaItems: QnaItem[] = [
  {
    id: "qna-01",
    courseId: "course-01",
    title: "React 상태 관리 선택 기준이 궁금합니다.",
    status: "답변완료",
    createdAt: "2024.05.10",
  },
  {
    id: "qna-02",
    courseId: "course-02",
    title: "Next.js 라우팅 구조 질문",
    status: "대기",
    createdAt: "2024.05.13",
  },
  {
    id: "qna-03",
    courseId: "course-07",
    title: "API 인증 토큰 만료 정책",
    status: "대기",
    createdAt: "2024.05.14",
  },
];

export const categories = [
  "프론트엔드",
  "백엔드",
  "데이터",
  "디자인",
  "기획",
];
