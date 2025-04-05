import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { navigationData, companyInfo } from "@/lib/constants"

export default function Footer() {
  const { footerServices, footerCompany, footerLegal, socialLinks } = navigationData

  return (
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Infini<span className="text-blue-400">techx</span>
              </h3>
              <p className="mb-4">{companyInfo.tagline}</p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  let Icon
                  switch (link.icon) {
                    case "Facebook":
                      Icon = Facebook
                      break
                    case "Twitter":
                      Icon = Twitter
                      break
                    case "Instagram":
                      Icon = Instagram
                      break
                    case "Linkedin":
                      Icon = Linkedin
                      break
                    default:
                      Icon = Facebook
                  }

                  return (
                      <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{link.name}</span>
                      </a>
                  )
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {footerServices.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-blue-400 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerCompany.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-blue-400 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLegal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-blue-400 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

