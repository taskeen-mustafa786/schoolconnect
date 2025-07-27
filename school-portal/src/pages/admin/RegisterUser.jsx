import RegisterForm from './components/RegisterForm'

export default function RegisterUser() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          New Registration
        </h1>
        <RegisterForm />
      </div>
    </div>
  )
}
