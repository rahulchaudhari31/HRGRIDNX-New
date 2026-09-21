import { PageHero } from '../sections/PageHero'
import { RoleDetails } from '../sections/roles/RoleDetails'
import { Cta } from '../sections/Cta'
import { rolesPage } from '../lib/content'

export function RolesPage() {
  return (
    <>
      <PageHero
        eyebrow={rolesPage.eyebrow}
        titleA={rolesPage.titleA}
        titleB={rolesPage.titleB}
        description={rolesPage.description}
        note="Admin · HR Manager · Department Head · Finance Manager · Team Leader · Employee"
      />
      <RoleDetails />
      <Cta />
    </>
  )
}