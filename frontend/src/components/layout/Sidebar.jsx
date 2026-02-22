import { NavLink } from 'react-router-dom'
import { Home, BookOpen, FileText, MessageCircle } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

export default function Sidebar() {
  const { user } = useAuth()
  const base = user?.role === 'teacher' ? '/teacher' : '/student'

  const links = [
    { to: `${base}/home`, icon: <Home size={20} />, label: 'Accueil' },
    { to: `${base}/archives`, icon: <BookOpen size={20} />, label: 'Archives de cours' },
    { to: `${base}/td`, icon: <FileText size={20} />, label: 'TD/Examen' },
    { to: `${base}/chat`, icon: <MessageCircle size={20} />, label: 'Chat' },
  ]

  return (
    <aside className="w-64 bg-[#1B2A4A] min-h-screen flex flex-col pt-4">
      {/* Logo */}
      <div className="px-6 py-4 border-b border-white/10 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-sm">
            HEI
          </div>
          <span className="text-white font-semibold text-lg">STDhub</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all text-sm font-medium ${
                isActive
                  ? 'bg-[#F5C518] text-[#1B2A4A]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}