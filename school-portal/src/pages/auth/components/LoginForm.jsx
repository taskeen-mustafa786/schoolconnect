import { useState } from 'react'

export default function LoginForm() {
  const [cnic, setCnic] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login:', { cnic, password })
    // Call API here
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
  <label className="block mb-1 text-sm font-medium">CNIC</label>
  <input
    type="text"
    className="w-full border px-3 py-2 rounded"
    value={cnic}
    onChange={(e) => setCnic(e.target.value)}
    placeholder="12345-1234567-1"
    pattern="\d{5}-\d{7}-\d{1}"
    required
  />
</div>
      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full border px-3 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  )
}
