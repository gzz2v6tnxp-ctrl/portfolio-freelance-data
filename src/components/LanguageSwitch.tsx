import { motion } from 'framer-motion'
import type { Lang } from '../content'
import { SPRING_SNAPPY } from '../lib/motion'
import { GlobeIcon } from './icons'

const LANGS: Lang[] = ['FR', 'EN']

interface Props {
  lang: Lang
  onChange: (lang: Lang) => void
}

export default function LanguageSwitch({ lang, onChange }: Props) {
  return (
    <div className="lang" role="group" aria-label="Langue / Language">
      <GlobeIcon className="lang-icon" />
      {LANGS.map(option => {
        const isActive = lang === option
        return (
          <motion.button
            key={option}
            type="button"
            className={`lang-option${isActive ? ' on' : ''}`}
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            whileTap={{ scale: 0.94 }}
          >
            {isActive && (
              <motion.span className="lang-pill" layoutId="lang-pill" transition={SPRING_SNAPPY} />
            )}
            <span className="lang-label">{option}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
