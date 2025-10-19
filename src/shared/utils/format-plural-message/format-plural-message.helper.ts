import { ReactNode } from 'react'

export const getMessageWithPluralization = (
  count: number,
  messages: { singular: ReactNode; plural: ReactNode },
  { lang }: { lang?: string } = { lang: 'en' },
): ReactNode => {
  const pluralRules = new Intl.PluralRules(lang, { type: 'cardinal' })
  const pluralCategory = pluralRules.select(count)

  switch (pluralCategory) {
    case 'one':
      return messages.singular
    case 'other':
    default:
      return messages.plural
  }
}
