import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import OfferSection from './components/OfferSection/OfferSection'
import QuoteSection from './components/QuoteSection/QuoteSection'
import ServicesGrid from './components/ServicesGrid/ServicesGrid'
import RentalSection from './components/RentalSection/RentalSection'
import './App.css'

export default function App() {
  return (
    <div className="app" id="top">
      <Header />
      <main className="app__main">
        <Hero />
        <OfferSection />
        <QuoteSection />
        <ServicesGrid />
        <RentalSection />
      </main>
    </div>
  )
}
