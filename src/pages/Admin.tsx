import { useState, useEffect } from 'react'
import { Save, Edit, X, Plus, Trash2, Home, Shield, Users, Award, Plane, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface ContentSection {
  id: string
  type: 'hero' | 'service' | 'feature' | 'stat'
  title: string
  content: string
  icon?: string
  order: number
}

const Admin = () => {
  const [sections, setSections] = useState<ContentSection[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load content from localStorage or API
    const savedContent = localStorage.getItem('prorisk-content')
    if (savedContent) {
      setSections(JSON.parse(savedContent))
    } else {
      // Default content
      setSections([
        {
          id: '1',
          type: 'hero',
          title: 'Osigurajte svoju budućnost',
          content: 'Pružamo profesionalne usluge osiguranja s dugogodišnjim iskustvom i posvećenošću vašoj sigurnosti.',
          order: 1,
        },
        {
          id: '2',
          type: 'service',
          title: 'Osiguranje vozila',
          content: 'Kompleksno osiguranje vašeg vozila s najboljim uvjetima i pokrićem.',
          icon: 'Shield',
          order: 2,
        },
        {
          id: '3',
          type: 'service',
          title: 'Osiguranje imovine',
          content: 'Zaštitite svoju imovinu od neočekivanih događaja i šteta.',
          icon: 'Home',
          order: 3,
        },
        {
          id: '4',
          type: 'service',
          title: 'Životno osiguranje',
          content: 'Osigurajte financijsku sigurnost sebi i svojoj obitelji.',
          icon: 'Users',
          order: 4,
        },
        {
          id: '5',
          type: 'service',
          title: 'Putno osiguranje',
          content: 'Putujte bez brige s našim putnim osiguranjem.',
          icon: 'Plane',
          order: 5,
        },
      ])
    }
    setIsLoading(false)
  }, [])

  const saveContent = () => {
    localStorage.setItem('prorisk-content', JSON.stringify(sections))
    alert('Sadržaj je spremljen!')
  }

  const updateSection = (id: string, updates: Partial<ContentSection>) => {
    setSections(sections.map(s => s.id === id ? { ...s, ...updates } : s))
  }

  const deleteSection = (id: string) => {
    if (confirm('Jeste li sigurni da želite obrisati ovu sekciju?')) {
      setSections(sections.filter(s => s.id !== id))
    }
  }

  const addSection = () => {
    const newSection: ContentSection = {
      id: Date.now().toString(),
      type: 'service',
      title: 'Nova sekcija',
      content: 'Unesite sadržaj...',
      order: sections.length + 1,
    }
    setSections([...sections, newSection])
    setEditingId(newSection.id)
  }

  const getIconComponent = (iconName?: string) => {
    const icons: Record<string, any> = {
      Shield,
      Home,
      Users,
      Award,
      Plane,
      Briefcase,
    }
    return icons[iconName || 'Shield'] || Shield
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-black text-primary-500 mb-2">Admin Panel</h1>
                  <p className="text-gray-600">Uređivanje sadržaja web stranice</p>
                </div>
                <button
                  onClick={saveContent}
                  className="flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-accent-600 transition-all shadow-lg"
                >
                  <Save className="h-5 w-5" />
                  <span>Spremi promjene</span>
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-primary-500">Sekcije sadržaja</h2>
                  <button
                    onClick={addSection}
                    className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-600 transition-all"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Dodaj sekciju</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {sections
                    .sort((a, b) => a.order - b.order)
                    .map((section) => {
                      const isEditing = editingId === section.id
                      const Icon = getIconComponent(section.icon)

                      return (
                        <motion.div
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200"
                        >
                          {isEditing ? (
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  Tip sekcije
                                </label>
                                <select
                                  value={section.type}
                                  onChange={(e) => updateSection(section.id, { type: e.target.value as any })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500"
                                >
                                  <option value="hero">Hero sekcija</option>
                                  <option value="service">Usluga</option>
                                  <option value="feature">Značajka</option>
                                  <option value="stat">Statistika</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  Naslov
                                </label>
                                <input
                                  type="text"
                                  value={section.title}
                                  onChange={(e) => updateSection(section.id, { title: e.target.value })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  Sadržaj
                                </label>
                                <textarea
                                  value={section.content}
                                  onChange={(e) => updateSection(section.id, { content: e.target.value })}
                                  rows={4}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  Redoslijed
                                </label>
                                <input
                                  type="number"
                                  value={section.order}
                                  onChange={(e) => updateSection(section.id, { order: parseInt(e.target.value) })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500"
                                />
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => setEditingId(null)}
                                  className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-all"
                                >
                                  <X className="h-4 w-4 inline mr-2" />
                                  Odustani
                                </button>
                                <button
                                  onClick={() => setEditingId(null)}
                                  className="flex-1 bg-accent-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-600 transition-all"
                                >
                                  Spremi
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <Icon className="h-5 w-5 text-accent-500" />
                                  <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded text-xs font-semibold">
                                    {section.type}
                                  </span>
                                  <span className="text-sm text-gray-500">Redoslijed: {section.order}</span>
                                </div>
                                <h3 className="text-lg font-bold text-primary-500 mb-2">
                                  {section.title}
                                </h3>
                                <p className="text-gray-600">{section.content}</p>
                              </div>
                              <div className="flex items-center space-x-2 ml-4">
                                <button
                                  onClick={() => setEditingId(section.id)}
                                  className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-all"
                                >
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => deleteSection(section.id)}
                                  className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Admin

