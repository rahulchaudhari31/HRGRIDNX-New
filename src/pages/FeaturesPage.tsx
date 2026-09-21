import { PageHero } from '../sections/PageHero'
import { ModuleCatalog } from '../sections/features/ModuleCatalog'
import { Cta } from '../sections/Cta'
import { features } from '../lib/content'

export function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow={features.eyebrow}
        titleA={features.titleA}
        titleB={features.titleB}
        description={features.description}
        note="9 modules · 29 permission keys · 1 dataset"
      />
      <ModuleCatalog />
      <Cta />
    </>
  )
}