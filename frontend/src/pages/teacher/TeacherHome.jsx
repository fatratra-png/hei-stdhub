import Layout from '../../components/layout/Layout'

export default function TeacherHome() {
  return (
    <Layout title="Accueil">
      <div className="flex flex-col items-center justify-center h-full gap-6 py-16">
        <img src="/laptop-books.png" alt="HEI" className="w-64 opacity-80" />
        <div className="flex gap-4">
          <button className="bg-[#1B2A4A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0f1e35] transition-colors shadow-lg">
            Créer un TD/Examen
          </button>
          <button className="bg-[#F5C518] text-[#1B2A4A] px-6 py-3 rounded-full font-medium hover:bg-[#d4a914] transition-colors shadow-lg">
            Uploader un cours
          </button>
        </div>
      </div>
    </Layout>
  )
}