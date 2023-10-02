import { AppSection } from './AppSection'
import { Choose } from './Choose'
import { Faq } from './Faq'
import { Hero } from './Hero'
import { QuickInfo } from './QuickInfo'

export const Home = () => {
  return (
    <div>
      <Hero />
      <QuickInfo />
      <Choose />
      <Faq />
      <AppSection />
    </div>
  )
}