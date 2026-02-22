import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'

export default function Navbar({ title }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
      <h1 className="text-lg font-semibold text-[#1B2A4A]">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#1B2A4A] text-white px-4 py-2 rounded-full text-sm font-medium">
          <div className="w-6 h-6 bg-[#F5C518] rounded-full flex items-center justify-center">
            <span className="text-[#1B2A4A] text-xs font-bold">
              {user?.name?.[0]?.toUpperCase()}
            </span>
          </div>
          {user?.role === 'teacher' ? 'ADMIN' : user?.stdRef || user?.name}
        </div>
        <button
          onClick={handleLogout}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  )
}