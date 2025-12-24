import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, User, Send, CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ContactFormProps {
  selectedInsuranceTypes: string[]
}

const ContactForm = ({ selectedInsuranceTypes }: ContactFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Contact Form Data:', { ...data, selectedInsuranceTypes })
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Ime i prezime *
          </label>
          <input
            type="text"
            {...register('name', { required: 'Ime je obavezno' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            placeholder="Unesite ime i prezime"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Mail className="inline h-4 w-4 mr-1" />
            Email *
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email je obavezan',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Nevažeća email adresa'
              }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            placeholder="vas@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Phone className="inline h-4 w-4 mr-1" />
          Telefon *
        </label>
        <input
          type="tel"
          {...register('phone', { required: 'Telefon je obavezan' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="072 303 334"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Poruka
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="Vaša poruka..."
        />
      </div>

      {selectedInsuranceTypes.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm font-semibold text-gray-700 mb-2">Odabrane vrste osiguranja:</p>
          <div className="flex flex-wrap gap-2">
            {selectedInsuranceTypes.map((type) => (
              <span
                key={type}
                className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      )}

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
            <Send className="h-5 w-5 mr-2" />
            Pošaljite poruku
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm

