export default function SubjectCard({ subject, teacher }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="text-md font-semibold">{subject}</h4>
      <p className="text-gray-600 text-sm">Teacher: {teacher}</p>
    </div>
  )
}
