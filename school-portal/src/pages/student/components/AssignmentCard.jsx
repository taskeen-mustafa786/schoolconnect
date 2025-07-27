export default function AssignmentCard({ title, dueDate, subject }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="text-md font-semibold">{title}</h4>
      <p className="text-gray-600 text-sm">Due: {dueDate}</p>
      <p className="text-gray-600 text-sm">Subject: {subject}</p>
    </div>
  )
}
