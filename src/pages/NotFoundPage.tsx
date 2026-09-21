import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { GridBackground } from '../components/GridBackground'

export function NotFoundPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 md:pt-40">
      <GridBackground className="mask-fade-b opacity-60" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="font-display text-[7rem] leading-none text-deep sm:text-[10rem]">404</span>
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Nothing on this <span className="italic text-deep">square</span>.
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
          The page you are after is not in the grid. It may have moved, or never existed — either
          way, home is one click away.
        </p>
        <Button to="/" variant="primary" size="lg" className="mt-2">
          Back to the grid
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </Container>
    </section>
  )
}