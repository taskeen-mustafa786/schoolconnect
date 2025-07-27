import AttendanceCard from './components/AttendanceCard'
import MarksCard from './components/MarksCard'
import ProfileCard from './components/ProfileCard'
import SubjectCard from './components/SubjectCard'
import AssignmentCard from './components/AssignmentCard'

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to The Lyceum School Portal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProfileCard />
        <AttendanceCard />
        <MarksCard />
      </div>

      <h2 className="text-xl font-semibold mt-6">Subjects & Teachers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SubjectCard subject="Mathematics" teacher="Mr. Smith" />
        <SubjectCard subject="English" teacher="Ms. Johnson" />
        <SubjectCard subject="Science" teacher="Dr. Brown" />
      </div>

      <h2 className="text-xl font-semibold mt-6">Upcoming Assignments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AssignmentCard
          title="Math Quiz"
          dueDate="2025-05-02"
          subject="Mathematics"
        />
        <AssignmentCard
          title="Science Report"
          dueDate="2025-05-04"
          subject="Science"
        />
      </div>
    </div>
  )
}
