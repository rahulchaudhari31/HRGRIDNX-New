import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const FeaturesPage = lazy(() =>
  import('./pages/FeaturesPage').then((m) => ({ default: m.FeaturesPage })),
)
const RolesPage = lazy(() => import('./pages/RolesPage').then((m) => ({ default: m.RolesPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

const metas = {
  '/': {
    title: 'HRGridNX — Every person. Every role. One grid.',
    description:
      'HRGridNX brings your people, leave, attendance, tasks, payroll, and documents into one connected HR platform. Every team works from the same records, with access and responsibilities defined by their role.',
  },
  '/features': {
    title: 'Features · HRGridNX',
    description:
      'Nine modules — employees, departments, leave, attendance, tasks, payroll, expenses, documents and reports — connected through one shared dataset.',
  },
  '/roles': {
    title: 'Roles · HRGridNX',
    description:
      'Six roles, one grid: Admin, HR Manager, Department Head, Finance Manager, Team Leader and Employee each see the information and actions relevant to their responsibilities.',
  },
  '/about': {
    title: 'About · HRGridNX',
    description:
      'A role-first HR platform built so each role meets only the work that belongs to it.',
  },
  '/contact': {
    title: 'Contact · HRGridNX',
    description:
      'Start a free trial, ask a question, or tell us about your organisation. We reply within one working day.',
  },
}

function applyMeta(title, description) {
  document.title = title

  const descriptionTags = document.querySelectorAll(
    'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
  )
  descriptionTags.forEach((tag) => tag.setAttribute('content', description))

  const titleTags = document.querySelectorAll(
    'meta[property="og:title"], meta[name="twitter:title"]',
  )
  titleTags.forEach((tag) => tag.setAttribute('content', title))
}

const FALLBACK = metas['/']

function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metas[pathname] ?? FALLBACK
    applyMeta(meta.title, meta.description)
  }, [pathname])

  return null
}

function RouteFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center" role="status" aria-label="Loading">
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-ink/10 border-t-coral" />
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <PageMeta />
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <a
            href="#main"
            className="sr-only z-[60] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/roles" element={<RolesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  )
}
