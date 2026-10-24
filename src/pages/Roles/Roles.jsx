import { PageHero } from '../../components/common/PageHero';
import { RoleDetails } from './components/RoleDetails';
import { Cta } from '../../components/common/Cta';
import { rolesPage } from '../../lib/content';
export function Roles() {
    return (<>
      <PageHero eyebrow={rolesPage.eyebrow} titleA={rolesPage.titleA} titleB={rolesPage.titleB} description={rolesPage.description} note="Admin · HR Manager · Department Head · Finance Manager · Team Leader · Employee"/>
      <RoleDetails />
      <Cta />
    </>);
}
