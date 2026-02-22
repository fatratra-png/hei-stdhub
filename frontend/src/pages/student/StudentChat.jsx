import { useState } from 'react'
import Layout from '../../components/layout/Layout'

const mockContacts = [
  { id: 1, name: 'HEI STDhub global chat', isGlobal: true },
  { id: 2, name: 'Dr Toky' },
  { id: 3, name: 'Mr Larry' },
  { id: 4, name: 'Mr Ryan' },
  { id: 5, name: 'Mr Julien' },
]

const mockMessages = [
  { id: 1, sender: 'STD23001', text: '', isSelf: false, time: '10:00' },
  { id: 2, sender: 'STD24001', text: '', isSelf: false, time: '10:01' },
  { id: 3, sender: 'STD25001', text: '', isSelf: true, time: '10:02' },
  { id: 4, sender: 'Dr Toky', text: '', isSelf: false, time: '10:03' },
]

export default function StudentChat() {
  const [selected, setSelected] = useState(mockContacts[0])
  const [message, setMessage] = useState('')

  return (
    <Layout title="Chat">
      <div className="flex gap-4 h-[calc(100vh-10rem)]">
        {/* Contact list */}
        <div className="w-72 bg-[#1B2A4A] rounded-2xl flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <div className="bg-white/10 rounded-xl flex items-center px-3 py-2">
              <span className="text-white/50 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent text-white text-sm outline-none placeholder-white/40 w-full"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {mockContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelected(contact)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  selected.id === contact.id
                    ? 'bg-[#F5C518]'
                    : 'hover:bg-white/10'
                }`}
              >
                {contact.isGlobal ? (
                  <div className="w-9 h-9 bg-[#F5C518] rounded-full flex items-center justify-center">
                    <span className="text-[#1B2A4A] font-bold text-xs">HEI</span>
                  </div>
                ) : (
                  <div className="w-9 h-9 bg-gray-300 rounded-full" />
                )}
                <span className={`text-sm font-medium ${selected.id === contact.id ? 'text-[#1B2A4A]' : 'text-white'}`}>
                  {contact.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden shadow-sm border border-gray-100">
          {/* Header */}
          <div className="bg-[#1B2A4A] text-white px-6 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F5C518] rounded-full flex items-center justify-center">
              <span className="text-[#1B2A4A] text-xs font-bold">HEI</span>
            </div>
            <span className="font-medium">{selected.name}</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#e8ecf1]">
            {mockMessages.map((msg) => (
              <div key={msg.id} className={`flex items-end gap-2 ${msg.isSelf ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0" />
                <div className={msg.isSelf ? 'items-end flex flex-col' : 'items-start flex flex-col'}>
                  <span className="text-xs text-gray-400 mb-1">{msg.sender}</span>
                  <div className={`px-4 py-2 rounded-2xl min-w-[80px] min-h-[36px] ${
                    msg.isSelf ? 'bg-[#F5C518]' : 'bg-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 flex items-center gap-3">
            <input
              type="text"
              placeholder="Hello, world !"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
            />
            <button className="w-10 h-10 bg-[#F5C518] rounded-full flex items-center justify-center hover:bg-[#d4a914] transition-colors">
              ↑
            </button>
            <button className="w-10 h-10 bg-[#1B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#0f1e35] transition-colors">
              +
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}