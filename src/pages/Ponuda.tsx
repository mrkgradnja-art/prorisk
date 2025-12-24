import { useState } from 'react'
import { CheckCircle, Settings, Mail, FileText, AlertTriangle, Printer, Trash2, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface ServiceOption {
  id: string
  label: string
  description: string
  icon: any
  category: string
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'admin-panel',
    label: 'Admin panel za uređivanje sadržaja',
    description: 'Kompletan admin panel za jednostavno uređivanje i upravljanje sadržajem web stranice. Omogućava dodavanje, uređivanje i brisanje sekcija bez potrebe za tehničkim znanjem.',
    icon: Settings,
    category: 'Razvoj',
  },
  {
    id: 'contact-form',
    label: 'Web forma s podacima za povratni kontakt',
    description: 'Profesionalna kontakt forma koja omogućava klijentima jednostavno slanje upita i zahtjeva. Automatska validacija podataka i email notifikacije.',
    icon: Mail,
    category: 'Razvoj',
  },
  {
    id: 'offer-form',
    label: 'Dostava podataka za ponudu (po vrstama osiguranja)',
    description: 'Dinamička forma za prikupljanje podataka potrebnih za izradu ponude. Prilagođena različitim vrstama osiguranja s automatskim prikazom relevantnih polja.',
    icon: FileText,
    category: 'Razvoj',
  },
  {
    id: 'damage-report',
    label: 'Prijava štete s uputama za postupanja (po vrstama osiguranja)',
    description: 'Specijalizirana forma za prijavu štete s detaljnim uputama za postupanje ovisno o vrsti osiguranja. Omogućava brzu i točnu prijavu štete.',
    icon: AlertTriangle,
    category: 'Razvoj',
  },
  {
    id: 'user-panel',
    label: 'Korisnički portal za odabir i online plaćanje osiguranja',
    description: 'Kompletan korisnički panel koji omogućava klijentima pregled dostupnih osiguranja, odabir paketa, izračun premije i sigurno online plaćanje. Uključuje upravljanje polisama i povijest transakcija.',
    icon: CreditCard,
    category: 'Razvoj',
  },
]

export default function PonudaPage() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set())
  const [sections, setSections] = useState<any[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)

  const toggleOption = (optionId: string) => {
    const newSelected = new Set(selectedOptions)
    if (newSelected.has(optionId)) {
      newSelected.delete(optionId)
    } else {
      newSelected.add(optionId)
    }
    setSelectedOptions(newSelected)
  }

  const handlePrintQuote = () => {
    if (selectedOptions.size === 0) {
      alert('Molimo odaberite barem jednu opciju prije printanja ponude.')
      return
    }

    const selectedOptionsData = serviceOptions.filter(opt => selectedOptions.has(opt.id))
    
    // Create print window
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Ponuda - Poslovna Podrška</title>
          <style>
            @media print {
              @page { margin: 2cm; }
              body { font-family: Arial, sans-serif; }
            }
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px;
              color: #333;
            }
            .header {
              text-align: center;
              border-bottom: 3px solid #f64a00;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .logo {
              font-size: 32px;
              font-weight: bold;
              color: #50535b;
              margin-bottom: 10px;
            }
            .title {
              font-size: 28px;
              font-weight: bold;
              color: #50535b;
              margin: 30px 0 20px 0;
            }
            .section {
              margin-bottom: 30px;
              padding: 20px;
              background: #f9fafb;
              border-left: 4px solid #f64a00;
            }
            .section-title {
              font-size: 20px;
              font-weight: bold;
              color: #50535b;
              margin-bottom: 15px;
            }
            .option {
              margin-bottom: 15px;
              padding: 15px;
              background: white;
              border-radius: 8px;
            }
            .option-title {
              font-weight: bold;
              color: #50535b;
              margin-bottom: 8px;
            }
            .option-desc {
              color: #666;
              font-size: 14px;
            }
            .footer {
              margin-top: 50px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
            .date {
              text-align: right;
              color: #666;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">Poslovna Podrška</div>
            <div style="color: #666;">Razvoj Web aplikacija</div>
          </div>

          <div class="title">Ponuda za razvoj web aplikacije</div>

          ${selectedOptionsData.map(opt => `
            <div class="section">
              <div class="option">
                <div class="option-title">${opt.label}</div>
                <div class="option-desc">${opt.description}</div>
              </div>
            </div>
          `).join('')}

          <div class="footer">
            <p>Poslovna Podrška - Razvoj Web aplikacija</p>
            <p>Varaždin, Hrvatska | info@poslovnapodrska.net | 072 303 334</p>
            <p>© ${new Date().getFullYear()} Poslovna Podrška. Sva prava pridržana.</p>
          </div>
        </body>
      </html>
    `

    printWindow.document.write(printContent)
    printWindow.document.close()
    
    setTimeout(() => {
      printWindow.print()
    }, 250)
  }

  const updateSection = (id: string, updates: any) => {
    setSections(sections.map(s => s.id === id ? { ...s, ...updates } : s))
  }

  const deleteSection = (id: string) => {
    if (confirm('Jeste li sigurni da želite obrisati ovu sekciju?')) {
      setSections(sections.filter(s => s.id !== id))
    }
  }

  const addSection = () => {
    const newSection = {
      id: Date.now().toString(),
      type: 'service',
      title: 'Nova sekcija',
      content: 'Unesite sadržaj...',
      order: sections.length + 1,
    }
    setSections([...sections, newSection])
    setEditingId(newSection.id)
  }

  const saveContent = () => {
    localStorage.setItem('prorisk-content', JSON.stringify(sections))
    alert('Sadržaj je spremljen!')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-bold mb-4">
                ZAHTJEV ZA PONUDU
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Odaberite Usluge
              </h1>
              <div className="w-24 h-1.5 bg-accent-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Označite usluge za koje želite dobiti ponudu. Nakon odabira isprintajte ponudu.
              </p>
            </motion.div>

            {/* Service Options */}
            <div className="space-y-6 mb-12">
              {serviceOptions.map((option, index) => {
                const Icon = option.icon
                const isSelected = selectedOptions.has(option.id)
                
                return (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-accent-300 transition-all"
                  >
                    <label className="flex items-start p-6 cursor-pointer">
                      <div className="flex items-start flex-1">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 mr-4 mt-1 flex items-center justify-center transition-all ${
                          isSelected
                            ? 'border-accent-500 bg-accent-500'
                            : 'border-gray-300 bg-white'
                        }`}>
                          {isSelected && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleOption(option.id)}
                          className="hidden"
                        />
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-3 ${
                              isSelected ? 'bg-accent-100' : 'bg-gray-100'
                            }`}>
                              <Icon className={`h-6 w-6 ${isSelected ? 'text-accent-500' : 'text-gray-400'}`} />
                            </div>
                            <h3 className={`text-xl font-bold ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                              {option.label}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed ml-16">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </label>
                  </motion.div>
                )
              })}
            </div>

            {/* Print Button */}
            {selectedOptions.size > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <button
                  onClick={handlePrintQuote}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Printer className="h-5 w-5 mr-2" />
                  Ispiši ponudu ({selectedOptions.size} {selectedOptions.size === 1 ? 'usluga' : 'usluga'})
                </button>
              </motion.div>
            )}


            {/* Admin Panel - Only show if admin-panel option is selected */}
            {selectedOptions.has('admin-panel') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-white rounded-2xl shadow-lg border-2 border-primary-200 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary-500">Admin Panel - Uređivanje sadržaja</h3>
                  <button
                    onClick={saveContent}
                    className="flex items-center space-x-2 bg-accent-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-600 transition-all"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Spremi</span>
                  </button>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {sections.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Nema sekcija. Kliknite "Dodaj sekciju" za početak.</p>
                  ) : (
                    sections
                      .sort((a, b) => a.order - b.order)
                      .map((section) => {
                        const isEditing = editingId === section.id
                        return (
                          <div key={section.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            {isEditing ? (
                              <div className="space-y-3">
                                <input
                                  type="text"
                                  value={section.title}
                                  onChange={(e) => updateSection(section.id, { title: e.target.value })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                  placeholder="Naslov"
                                />
                                <textarea
                                  value={section.content}
                                  onChange={(e) => updateSection(section.id, { content: e.target.value })}
                                  rows={3}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                  placeholder="Sadržaj"
                                />
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => setEditingId(null)}
                                    className="flex-1 bg-gray-500 text-white px-3 py-2 rounded-lg text-sm"
                                  >
                                    Odustani
                                  </button>
                                  <button
                                    onClick={() => setEditingId(null)}
                                    className="flex-1 bg-accent-500 text-white px-3 py-2 rounded-lg text-sm"
                                  >
                                    Spremi
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-bold text-primary-500">{section.title}</h4>
                                  <p className="text-sm text-gray-600 mt-1">{section.content}</p>
                                </div>
                                <div className="flex space-x-2 ml-4">
                                  <button
                                    onClick={() => setEditingId(section.id)}
                                    className="p-2 bg-primary-100 text-primary-600 rounded"
                                  >
                                    <Settings className="h-4 w-4" />
                                  </button>
                                  <button
                                    onClick={() => deleteSection(section.id)}
                                    className="p-2 bg-red-100 text-red-600 rounded"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      })
                  )}
                  <button
                    onClick={addSection}
                    className="w-full flex items-center justify-center space-x-2 bg-primary-100 text-primary-600 px-4 py-3 rounded-lg font-semibold hover:bg-primary-200 transition-all"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Dodaj sekciju</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
