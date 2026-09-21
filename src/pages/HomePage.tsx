import { Hero } from '../sections/home/Hero'
import { TrustStrip } from '../sections/home/TrustStrip'
import { Stats } from '../sections/home/Stats'
import { Portals } from '../sections/home/Portals'
import { Modules } from '../sections/home/Modules'
import { Timeline } from '../sections/home/Timeline'
import { Security } from '../sections/home/Security'
import { Testimonials } from '../sections/home/Testimonials'
import { Cta } from '../sections/Cta'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Stats />
      <Portals />
      <Modules />
      <Timeline />
      <Security />
      <Testimonials />
      <Cta />
    </>
  )
}