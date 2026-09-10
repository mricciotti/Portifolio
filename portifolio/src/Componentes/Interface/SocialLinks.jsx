import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function SocialLinks() {
  return <div className="flex items-center gap-2">
    <a className="icon-button" href="https://github.com/mricciotti" aria-label="GitHub (abre em nova aba)" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /></a>
    <a className="icon-button" href="https://www.linkedin.com/in/matheus-ricciotti-55a087302/" aria-label="LinkedIn (abre em nova aba)" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /></a>
    <a className="icon-button" href="https://www.instagram.com/mat_ricciotti/" aria-label="Instagram (abre em nova aba)" target="_blank" rel="noreferrer"><FiInstagram aria-hidden="true" /></a>
  </div>
}
