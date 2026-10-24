import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Stats } from './components/Stats';
import { Portals } from './components/Portals';
import { Modules } from './components/Modules';
import { Timeline } from './components/Timeline';
import { Security } from './components/Security';
import { Testimonials } from './components/Testimonials';
import { Cta } from '../../components/common/Cta';
export function Home() {
    return (<>
      <Hero />
      <TrustStrip />
      <Stats />
      <Portals />
      <Modules />
      <Timeline />
      <Security />
      <Testimonials />
      <Cta />
    </>);
}
