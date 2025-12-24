import { motion } from 'framer-motion'
import { Shield, TrendingUp, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ZagrebMap from '../components/ZagrebMap'

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Osiguranje vozila',
      description: 'Kompleksno osiguranje vašeg vozila s najboljim uvjetima i pokrićem.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Osiguranje imovine',
      description: 'Zaštitite svoju imovinu od neočekivanih događaja i šteta.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Životno osiguranje',
      description: 'Osigurajte financijsku sigurnost sebi i svojoj obitelji.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'Putno osiguranje',
      description: 'Putujte bez brige s našim putnim osiguranjem.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const features = [
    'Brza i jednostavna prijava štete',
    '24/7 podrška klijentima',
    'Konkurentne premije',
    'Fleksibilni uvjeti plaćanja',
    'Profesionalno savjetovanje',
    'Široka mreža partnera',
  ]

  const stats = [
    { number: '50K+', label: 'Zadovoljnih klijenata' },
    { number: '25+', label: 'Godina iskustva' },
    { number: '98%', label: 'Stopa zadovoljstva' },
    { number: '24/7', label: 'Dostupnost' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/45435.png"
            alt="Prorisk Osiguranje"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Centered Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-accent-500/90 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6"
            >
              POUZDANO OSIGURANJE
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
            >
              Osigurajte svoju
              <span className="block text-accent-500">budućnost</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-lg"
            >
              Pružamo profesionalne usluge osiguranja s dugogodišnjim iskustvom i posvećenošću vašoj sigurnosti.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/ponuda"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Zatražite ponudu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#usluge"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Saznajte više
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-accent-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-4">
              NAŠE USLUGE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary-500 mb-4">
              Što nudimo
            </h2>
            <div className="w-24 h-1.5 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompletan spektar usluga osiguranja prilagođen vašim potrebama
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-accent-200 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Expanded Center */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
                ZAŠTO ODABRATI NAS
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary-500 mb-4">
                Prednosti naših usluga
              </h2>
              <div className="w-24 h-1.5 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-accent-500" />
                  </div>
                  <span className="text-lg font-semibold text-primary-500">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-12 text-white text-center"
            >
              <h3 className="text-3xl font-black mb-4">
                Spremni za početak?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Kontaktirajte nas danas i dobijte besplatnu ponudu
              </p>
              <Link
                to="/ponuda"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-500 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Zatražite ponudu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zagreb Map */}
      <div className="mt-20">
        <ZagrebMap />
      </div>

      <Footer />
    </div>
  )
}

export default Home

