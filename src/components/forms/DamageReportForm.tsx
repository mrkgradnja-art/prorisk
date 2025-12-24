import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AlertTriangle, Upload, CheckCircle, FileText } from 'lucide-react'

interface DamageReportFormData {
  insuranceType: string
  damageDate: string
  damageDescription: string
  location: string
  estimatedDamage: string
  hasPhotos: boolean
  additionalInfo?: string
}

interface DamageReportFormProps {
  selectedInsuranceTypes: string[]
}

const damageInstructions: Record<string, string> = {
  'osiguranje-vozila': 'Za prijavu štete na vozilu: 1) Ne pomičite vozilo ako je moguće, 2) Fotografirajte štetu s više kutova, 3) Prikupite podatke drugog sudionika ako postoji, 4) Kontaktirajte nas u najkraćem mogućem roku.',
  'osiguranje-imovine': 'Za prijavu štete na imovini: 1) Ne uklanjajte oštećene predmete prije procjene, 2) Fotografirajte svu štetu detaljno, 3) Sačuvajte sve račune i dokaze, 4) Kontaktirajte nas odmah za hitne slučajeve.',
  'zivotno-osiguranje': 'Za prijavu štete u životnom osiguranju: 1) Prikupite sve medicinske dokumente, 2) Sačuvajte sve račune i dokaze o troškovima, 3) Kontaktirajte nas za upute o daljnjem postupku.',
  'putno-osiguranje': 'Za prijavu štete u putnom osiguranju: 1) Prikupite sve račune i dokaze, 2) Fotografirajte oštećene predmete, 3) Kontaktirajte nas što prije po povratku.',
  'poslovno-osiguranje': 'Za prijavu štete u poslovnom osiguranju: 1) Ne uklanjajte oštećenja prije procjene, 2) Dokumentirajte svu štetu fotografijama, 3) Sačuvajte sve račune i dokaze, 4) Kontaktirajte nas odmah.',
}

const DamageReportForm = ({ selectedInsuranceTypes }: DamageReportFormProps) => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<DamageReportFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const selectedType = watch('insuranceType')

  const onSubmit = async (data: DamageReportFormData) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Damage Report Form Data:', { ...data, selectedInsuranceTypes })
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
        <div>
          <h4 className="font-semibold text-red-800 mb-1">Važno - Upute za prijavu štete</h4>
          <p className="text-sm text-red-700">
            Molimo vas da pratite upute za vašu vrstu osiguranja prije prijave štete.
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <FileText className="inline h-4 w-4 mr-1" />
          Vrsta osiguranja *
        </label>
        <select
          {...register('insuranceType', { required: 'Odaberite vrstu osiguranja' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
        >
          <option value="">-- Odaberite vrstu osiguranja --</option>
          {selectedInsuranceTypes.map((type) => (
            <option key={type} value={type}>
              {type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </option>
          ))}
        </select>
        {errors.insuranceType && (
          <p className="mt-1 text-sm text-red-500">{errors.insuranceType.message}</p>
        )}
      </div>

      {selectedType && damageInstructions[selectedType] && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Upute za postupanje:</h4>
          <p className="text-sm text-blue-700 whitespace-pre-line">
            {damageInstructions[selectedType]}
          </p>
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Datum nastanka štete *
        </label>
        <input
          type="date"
          {...register('damageDate', { required: 'Datum je obavezan' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
        />
        {errors.damageDate && (
          <p className="mt-1 text-sm text-red-500">{errors.damageDate.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Lokacija nastanka štete *
        </label>
        <input
          type="text"
          {...register('location', { required: 'Lokacija je obavezna' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="Unesite adresu ili lokaciju"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Opis štete *
        </label>
        <textarea
          {...register('damageDescription', { required: 'Opis štete je obavezan' })}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="Detaljno opišite štetu koja je nastala..."
        />
        {errors.damageDescription && (
          <p className="mt-1 text-sm text-red-500">{errors.damageDescription.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Procijenjena vrijednost štete (HRK)
        </label>
        <input
          type="text"
          {...register('estimatedDamage')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="npr. 5000"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          {...register('hasPhotos')}
          className="w-5 h-5 text-accent-500 border-gray-300 rounded focus:ring-accent-500"
        />
        <label className="text-sm font-semibold text-gray-700">
          Imam fotografije štete
        </label>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Dodatne informacije
        </label>
        <textarea
          {...register('additionalInfo')}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="Dodatne informacije koje smatrate važnima..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Slanje...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle className="h-5 w-5 mr-2" />
            Prijava poslana!
          </>
        ) : (
          <>
            <Upload className="h-5 w-5 mr-2" />
            Prijavite štetu
          </>
        )}
      </button>
    </form>
  )
}

export default DamageReportForm

