import { Container } from '../../../components/ui/Container';
import { Reveal } from '../../../components/ui/Reveal';
export function PrivacyTerms() {
    return (
      <section className="relative pb-6">
        <Container>
          <div className="grid gap-4 rounded-2xl border border-ink/[0.07] bg-paper/70 p-8 md:grid-cols-2 md:p-10">
            {[
              {
                id: 'privacy',
                title: 'Privacy',
                body: 'Role-scoped access is the privacy model. A department head sees the department, an employee sees their own file, and sensitive documents are locked to the people who may see them.',
              },
              {
                id: 'terms',
                title: 'Terms of service',
                body: 'Your data stays yours. Export everything, delete anything, and cancel with one call. We are plain-spoken about what HRGRIDNX does and which module owns each record.',
              },
            ].map((item) => (
              <Reveal key={item.id}>
                <div id={item.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
}
