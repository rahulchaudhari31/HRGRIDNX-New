import { PageHero } from '../../components/common/PageHero';
import { ModuleCatalog } from './components/ModuleCatalog';
import { Cta } from '../../components/common/Cta';
import { features } from '../../lib/content';
export function Features() {
    return (<>
      <PageHero eyebrow={features.eyebrow} titleA={features.titleA} titleB={features.titleB} description={features.description} note="9 modules · 29 permission keys · 1 dataset"/>
      <ModuleCatalog />
      <Cta />
    </>);
}
