import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const ZagrebMap = () => {
  return (
    <section className="relative w-full">
      {/* Map Container */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-primary-100 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178139.825359999!2d15.816256500000001!3d45.8150108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb!5e0!3m2!1shr!2shr!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/10 to-primary-500/30 pointer-events-none"></div>
        
        {/* Animated Marker */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
        >
          <div className="relative">
            <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-2xl"></div>
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-6 h-6 bg-red-500 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Contact Card Overlay */}
      <div className="container mx-auto px-4 -mt-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-bold mb-4">
                POSJETITE NAS
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-primary-500 mb-4">
                Naša lokacija
              </h2>
              <div className="w-24 h-1.5 bg-accent-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-500 mb-2">Adresa</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Varaždin, Hrvatska<br />
                      Ulica Primjer 123<br />
                      10000 Zagreb
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 border border-accent-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-500 mb-2">Radno vrijeme</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Ponedjeljak - Petak: 09:00 - 17:00</p>
                      <p>Subota: 09:00 - 13:00</p>
                      <p>Nedjelja: Zatvoreno</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl p-6 border-2 border-primary-200 hover:border-accent-500 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-500 mb-2">Telefon</h3>
                    <a href="tel:+38572303334" className="text-accent-500 hover:text-accent-600 font-semibold text-lg transition-colors">
                      072 303 334
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl p-6 border-2 border-primary-200 hover:border-accent-500 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-500 mb-2">Email</h3>
                    <a href="mailto:info@poslovnapodrska.net" className="text-accent-500 hover:text-accent-600 font-semibold text-sm transition-colors break-all">
                      info@poslovnapodrska.net
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=Zagreb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Otvori u Google Maps
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ZagrebMap
