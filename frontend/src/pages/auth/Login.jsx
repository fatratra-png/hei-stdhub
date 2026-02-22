import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Appel API réel ici
    // Pour test, on simule un login
    const mockUser = {
      name: 'Étudiant Test',
      email: form.email,
      role: form.role,
      stdRef: 'STD25001',
      token: 'mock_token_123'
    }
    login(mockUser)
    navigate(form.role === 'teacher' ? '/teacher/home' : '/student/home')
  }

  return (
    <div className="min-h-screen bg-[#1B2A4A] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#F5C518] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-[#1B2A4A] font-bold text-xl">HEI</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1B2A4A]">HEI STDhub</h2>
          <p className="text-gray-400 text-sm mt-1">Connectez-vous à votre espace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role selector */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
            {['student', 'teacher'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setForm({ ...form, role: r })}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  form.role === r
                    ? 'bg-[#1B2A4A] text-white shadow'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {r === 'student' ? '🎓 Étudiant' : '👨‍🏫 Professeur'}
              </button>
            ))}
          </div>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#F5C518] text-[#1B2A4A] font-semibold py-3 rounded-xl hover:bg-[#d4a914] transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}