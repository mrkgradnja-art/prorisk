import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FileText, Upload, CheckCircle } from 'lucide-react'

interface OfferFormData {
  insuranceType: string
  vehicleYear?: string
  vehicleModel?: string
  propertyValue?: string
  propertyType?: string
  coverageAmount?: string
  additionalInfo?: string
}

interface OfferFormProps {
  selectedInsuranceTypes: string[]
}

const insuranceTypeFields: Record<string, { fields: string[], instructions: string }> = {
  'osiguranje-vozila': {
    fields: ['vehicleYear', 'vehicleModel'],
    instructions: 'Za osiguranje vozila potrebni su podaci o godini proizvodnje i modelu vozila.'
  },
  'osiguranje-imovine': {
    fields: ['propertyValue', 'propertyType'],
    instructions: 'Za osiguranje imovine potrebni su podaci o vrijednosti i tipu imovine.'
  },
  'zivotno-osiguranje': {
    fields: ['coverageAmount'],
    instructions: 'Za životno osiguranje potrebna je željena visina pokrića.'
  },
  'putno-osiguranje': {
    fields: [],
    instructions: 'Za putno osiguranje nisu potrebni dodatni podaci.'
  },
  'poslovno-osiguranje': {
    fields: ['propertyValue', 'propertyType'],
    instructions: 'Za poslovno osiguranje potrebni su podaci o vrijednosti i tipu poslovne imovine.'
  },
}

const OfferForm = ({ selectedInsuranceTypes }: OfferFormProps) => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<OfferFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const selectedType = watch('insuranceType')

  const onSubmit = async (data: OfferFormData) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Offer Form Data:', { ...data, selectedInsuranceTypes })
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const getFieldsForType = (type: string) => {
    return insuranceTypeFields[type] || { fields: [], instructions: '' }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <FileText className="inline h-4 w-4 mr-1" />
          Vrsta osiguranja za ponudu *
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

      {selectedType && getFieldsForType(selectedType).instructions && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            {getFieldsForType(selectedType).instructions}
          </p>
        </div>
      )}

      {selectedType && getFieldsForType(selectedType).fields.includes('vehicleYear') && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Godina proizvodnje vozila *
          </label>
          <input
            type="text"
            {...register('vehicleYear', { required: 'Godina je obavezna' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            placeholder="npr. 2020"
          />
          {errors.vehicleYear && (
            <p className="mt-1 text-sm text-red-500">{errors.vehicleYear.message}</p>
          )}
        </div>
      )}

      {selectedType && getFieldsForType(selectedType).fields.includes('vehicleModel') && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Model vozila *
          </label>
          <input
            type="text"
            {...register('vehicleModel', { required: 'Model je obavezan' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            placeholder="npr. BMW 320d"
          />
          {errors.vehicleModel && (
            <p className="mt-1 text-sm text-red-500">{errors.vehicleModel.message}</p>
          )}
        </div>
      )}

      {selectedType && getFieldsForType(selectedType).fields.includes('propertyValue') && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Vrijednost imovine (HRK) *
          </label>
          <input
            type="text"
            {...register('propertyValue', { required: 'Vrijednost je obavezna' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            placeholder="npr. 500000"
          />
          {errors.propertyValue && (
            <p className="mt-1 text-sm text-red-500">{errors.propertyValue.message}</p>
          )}
        </div>
      )}

      {selectedType && getFieldsForType(selectedType).fields.includes('propertyType') && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tip imovine *
          </label>
          <select
            {...register('propertyType', { required: 'Tip imovine je obavezan' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          >
            <option value="">-- Odaberite tip --</option>
            <option value="stan">Stan</option>
            <option value="kuca">Kuća</option>
            <option value="poslovni">Poslovni prostor</option>
            <option value="ostalo">Ostalo</option>
          </select>
          {errors.propertyType && (
            <p className="mt-1 text-sm text-red-500">{errors.propertyType.message}</p>
          )}
        </div>
      )}

      {selectedType && getFieldsForType(selectedType).fields.includes('coverageAmount') && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Željena visina pokrića (HRK) *
          </label>
          <input
            type="text"
            {...register('coverageAmount', { required: 'Visina pokrića je obavezna' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            placeholder="npr. 1000000"
          />
          {errors.coverageAmount && (
            <p className="mt-1 text-sm text-red-500">{errors.coverageAmount.message}</p>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Dodatne informacije
        </label>
        <textarea
          {...register('additionalInfo')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="Dodatne informacije koje smatrate važnima..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Slanje...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle className="h-5 w-5 mr-2" />
            Poslano!
          </>
        ) : (
          <>
            <Upload className="h-5 w-5 mr-2" />
            Pošaljite podatke za ponudu
          </>
        )}
      </button>
    </form>
  )
}

export default OfferForm

