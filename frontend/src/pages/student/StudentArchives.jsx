// Copie exacte de TeacherArchives.jsx en changeant l'import du Layout
import Layout from '../../components/layout/Layout'
import { COURSES } from '../../utils/constants'

export default function StudentArchives() {
  return (
    <Layout title="Archives de cours">
      <div className="space-y-6">
        {Object.entries(COURSES).map(([level, courses]) => (
          <div key={level}>
            <div className="bg-[#F5C518] text-[#1B2A4A] font-bold text-center py-3 rounded-xl mb-3">
              {level === 'L1' ? 'PREMIERE ANNEE — SEMESTRE 1 ET 2' :
               level === 'L2' ? 'DEUXIEME ANNEE — SEMESTRE 3 ET 4' :
               'TROISIEME ANNEE — SEMESTRE 5 ET 6'}
            </div>
            <div className="flex flex-wrap gap-3">
              {courses.map((course) => (
                <button key={course}
                  className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white transition-colors shadow-sm">
                  {course}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}