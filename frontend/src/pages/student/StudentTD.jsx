import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useAuth } from '../../hooks/useAuth'
import { GROUPS } from '../../utils/constants'

export default function StudentTD() {
  const { user } = useAuth()
  const [form, setForm] = useState({
    nom: '', prenom: '', email: user?.email || '',
    groupe: '', ref: user?.stdRef || '',
    type: 'TD', lien: ''
  })
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Soumission:', { form, file })
    alert('Devoir soumis avec succès !')
  }

  return (
    <Layout title="TD / Examen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1B2A4A] text-white text-center py-3 font-semibold">
            TD/Examen
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zone dépôt */}
            <div>
              <div
                className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50 cursor-pointer hover:border-[#1B2A4A] transition-colors"
                onClick={() => document.getElementById('fileInput').click()}
              >
                <div className="text-4xl mb-3">📄</div>
                <p className="text-gray-400 text-sm">Déposer votre devoir ici</p>
                <p className="text-gray-300 text-xs mt-1">Max 10 Mo</p>
                {file && <p className="text-green-500 text-sm mt-2 font-medium">{file.name}</p>}
              </div>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-gray-400 text-sm font-medium">OU</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <input
                type="text"
                placeholder="Coller un lien Drive ou GitHub"
                value={form.lien}
                onChange={(e) => setForm({ ...form, lien: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
              />
            </div>

            {/* Formulaire */}
            <div className="space-y-3">
              <input
                type="text" placeholder="Nom"
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
              />
              <input
                type="text" placeholder="Prénom"
                value={form.prenom}
                onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
              />
              <select
                value={form.groupe}
                onChange={(e) => setForm({ ...form, groupe: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A] bg-white"
              >
                <option value="">Groupe</option>
                {Object.entries(GROUPS).flatMap(([level, groups]) =>
                  groups.map((g) => (
                    <option key={g} value={g}>{level} — {g}</option>
                  ))
                )}
              </select>
              <div className="flex gap-2">
                {['TD', 'Examen'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm({ ...form, type: t })}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                      form.type === t
                        ? t === 'TD' ? 'bg-cyan-400 text-white' : 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, nom: '', prenom: '', lien: '' })}
                  className="flex-1 bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
                >
                  Soumettre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}