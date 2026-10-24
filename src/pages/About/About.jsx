import { PageHero } from '../../components/common/PageHero';
import { Cta } from '../../components/common/Cta';
import { about } from '../../lib/content';
import { Mission } from './components/Mission';
import { Values } from './components/Values';
import { Timeline } from './components/Timeline';
import { Team } from './components/Team';
import { StatLine } from './components/StatLine';
import { PrivacyTerms } from './components/PrivacyTerms';
export function About() {
    return (<>
      <PageHero
        eyebrow={about.eyebrow}
        titleA={about.titleA}
        titleB={about.titleB}
        description={about.description}
      />
      <Mission />
      <Values />
      <Timeline />
      <Team />
      <StatLine />
      <PrivacyTerms />
      <Cta />
    </>);
}
