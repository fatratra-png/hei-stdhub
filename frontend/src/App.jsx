import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'

// Auth pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

// Student pages
import StudentHome from './pages/student/StudentHome'
import StudentArchives from './pages/student/StudentArchives'
import StudentTD from './pages/student/StudentTD'
import StudentChat from './pages/student/StudentChat'

// Teacher pages
import TeacherHome from './pages/teacher/TeacherHome'
import TeacherArchives from './pages/teacher/TeacherArchives'
import TeacherTD from './pages/teacher/TeacherTD'
import TeacherChat from './pages/teacher/TeacherChat'

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" />
  if (role && user.role !== role) return <Navigate to="/login" />
  return children
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Student */}
          <Route path="/student/home" element={<ProtectedRoute role="student"><StudentHome /></ProtectedRoute>} />
          <Route path="/student/archives" element={<ProtectedRoute role="student"><StudentArchives /></ProtectedRoute>} />
          <Route path="/student/td" element={<ProtectedRoute role="student"><StudentTD /></ProtectedRoute>} />
          <Route path="/student/chat" element={<ProtectedRoute role="student"><StudentChat /></ProtectedRoute>} />

          {/* Teacher */}
          <Route path="/teacher/home" element={<ProtectedRoute role="teacher"><TeacherHome /></ProtectedRoute>} />
          <Route path="/teacher/archives" element={<ProtectedRoute role="teacher"><TeacherArchives /></ProtectedRoute>} />
          <Route path="/teacher/td" element={<ProtectedRoute role="teacher"><TeacherTD /></ProtectedRoute>} />
          <Route path="/teacher/chat" element={<ProtectedRoute role="teacher"><TeacherChat /></ProtectedRoute>} />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App