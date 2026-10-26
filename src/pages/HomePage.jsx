import { Hero } from '../sections/home/Hero'
import { Portals } from '../sections/home/Portals'
import { Modules } from '../sections/home/Modules'
import { Timeline } from '../sections/home/Timeline'
import { Security } from '../sections/home/Security'
import { Cta } from '../sections/Cta'

export function HomePage() {
  return (
    <>
      <Hero />
      <Portals />
      <Modules />
      <Timeline />
      <Security />
      <Cta />
    </>
  )
}
