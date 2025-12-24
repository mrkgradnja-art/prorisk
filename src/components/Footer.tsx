import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-white via-primary-50 to-primary-500">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-black text-primary-500">Prorisk</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vaš pouzdan partner za osiguranje. Pružamo profesionalne usluge osiguranja s dugogodišnjim iskustvom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-500 font-bold text-lg mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/ponuda" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                  Ponuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary-500 font-bold text-lg mb-4">Usluge</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Osiguranje vozila</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Osiguranje imovine</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Životno osiguranje</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Putno osiguranje</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Poslovno osiguranje</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary-500 font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-500" />
                <span>072 303 334</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent-500" />
                <span>info@poslovnapodrska.net</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent-500 mt-1" />
                <span>Varaždin, Hrvatska</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Poslovna Podrška. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

