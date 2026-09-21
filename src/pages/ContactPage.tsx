import { useState } from 'react'
import type { ReactNode } from 'react'
import { AlertCircle, Check, Send } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../sections/PageHero'
import { Reveal } from '../components/Reveal'
import { Icon } from '../lib/icons'
import { contact } from '../lib/content'
import { cn } from '../lib/cn'

type FieldName = 'name' | 'email' | 'company' | 'teamSize' | 'message'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>

const initialValues: Values = { name: '', email: '', company: '', teamSize: '', message: '' }

const inputClass = (error?: string) =>
  cn(
    'h-12 w-full rounded-xl border bg-paper px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-deep',
    error ? 'border-coral focus:border-coral' : 'border-ink/10',
  )

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v: Values): Errors {
  const errors: Errors = {}
  if (v.name.trim().length < 2) errors.name = 'Please add your name.'
  if (!emailRe.test(v.email.trim())) errors.email = 'Please add a valid work email.'
  if (v.company.trim().length < 2) errors.company = 'Please add your company.'
  if (!v.teamSize) errors.teamSize = 'Choose a team size.'
  if (v.message.trim().length < 10) errors.message = 'Give us at least a sentence (10+ characters).'
  return errors
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
        {label}
      </label>
      {children}
      {error ? (
        <p className="flex items-center gap-1.5 text-xs font-medium text-coral">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

function TrialForm() {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const set = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.values(next).every((v) => !v)) setSent(true)
  }

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-ink/[0.07] bg-paper/70 p-8">
      <div className="grid-lines-sm absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative">
        {sent ? (
          <div className="flex min-h-[26rem] flex-col items-center justify-center gap-5 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint text-deep">
              <Check className="h-7 w-7" strokeWidth={2.5} />
            </span>
            <h2 className="max-w-sm font-display text-3xl text-ink">{contact.form.thanks}</h2>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">
              We will email you at{' '}
              <span className="font-semibold text-ink">{values.email}</span> to get your trial
              started — or reply to hello@hrgridnx.com in the meantime.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(initialValues)
                setErrors({})
                setSent(false)
              }}
              className="mt-2 inline-flex h-11 items-center rounded-full border border-ink/15 px-6 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex flex-col gap-5">
            <div>
              <h2 className="font-display text-3xl text-ink">Start free trial</h2>
              <p className="mt-2 text-sm text-ink/60">
                Six roles, one grid, on your terms. No card required.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={contact.form.name} error={errors.name}>
                <input
                  value={values.name}
                  onChange={(e) => set('name', e.target.value)}
                  aria-invalid={!!errors.name}
                  placeholder={contact.form.name}
                  className={inputClass(errors.name)}
                />
              </Field>
              <Field label={contact.form.email} error={errors.email}>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => set('email', e.target.value)}
                  aria-invalid={!!errors.email}
                  placeholder="ada@company.com"
                  className={inputClass(errors.email)}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={contact.form.company} error={errors.company}>
                <input
                  value={values.company}
                  onChange={(e) => set('company', e.target.value)}
                  aria-invalid={!!errors.company}
                  placeholder="Company"
                  className={inputClass(errors.company)}
                />
              </Field>
              <Field label={contact.form.teamSize} error={errors.teamSize}>
                <select
                  value={values.teamSize}
                  onChange={(e) => set('teamSize', e.target.value)}
                  aria-invalid={!!errors.teamSize}
                  className={cn(inputClass(errors.teamSize), !values.teamSize && 'text-ink/35')}
                >
                  <option value="" disabled>
                    Select team size
                  </option>
                  {contact.form.teamSizes.map((size) => (
                    <option key={size} value={size} className="text-ink">
                      {size} people
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label={contact.form.message} error={errors.message}>
              <textarea
                value={values.message}
                onChange={(e) => set('message', e.target.value)}
                aria-invalid={!!errors.message}
                rows={5}
                placeholder={contact.form.message}
                className={cn(
                  'w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-deep',
                  errors.message ? 'border-coral focus:border-coral' : 'border-ink/10',
                )}
              />
            </Field>

            <button
              type="submit"
              className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-coral px-7 text-sm font-semibold text-paper transition-all hover:bg-[#e85a3b] hover:-translate-y-0.5"
            >
              {contact.form.submit}
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contact.eyebrow}
        titleA={contact.titleA}
        titleB={contact.titleB}
        description={contact.description}
        note={contact.info.map((i) => i.value).join(' · ')}
      />

      <section className="relative pb-24 pt-6">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-ink/[0.07] bg-paper/70 p-8">
                {contact.info.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-ink/[0.07] p-5 transition-colors hover:border-deep/20"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-deep">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-ink hover:text-deep">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-ink">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}

                <div className="mt-auto flex flex-col gap-3 rounded-xl border border-deep/15 bg-mint/50 p-5">
                  <h3 className="font-display text-xl text-deep">Before you ask</h3>
                  {contact.faq.map((f) => (
                    <div key={f.q}>
                      <p className="text-sm font-semibold text-deep">{f.q}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-deep/70">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <TrialForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}