/* ------------------------------------------------------------------ *
 * HRGRIDNX — all site copy in one place. Edit text here, never in UI. *
 * ------------------------------------------------------------------ */

export type RoleId =
  | 'admin'
  | 'hr_manager'
  | 'department_head'
  | 'finance_manager'
  | 'team_leader'
  | 'employee'

export interface Module {
  id: string
  name: string
  icon: string
  blurb: string
  detail: string
  bullets: string[]
}

export interface Role {
  id: RoleId
  name: string
  short: string
  icon: string
  summary: string
  view: string
  day: string
  moments: string[]
  sees: string[]
  can: string[]
}

export interface FooterLink {
  label: string
  to?: string
  href?: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

/* ------------------------------------------------------------------ */

export const brand = {
  name: 'HRGRIDNX',
  wordmark: 'HR·GRID·NX',
  tagline: 'Role-based HR, laid out on one grid.',
  intro:
    'HRGRIDNX is a role-based HR management platform. Six working roles share one source of truth — people, leave, attendance, tasks, payroll, expenses, documents and reports — arranged so every role only ever sees its own square of the grid.',
  email: 'hello@hrgridnx.com',
  phone: '+44 20 7946 0958',
  city: 'Shoreditch, London',
  url: 'https://hrgridnx.com',
}

export const navLinks = [
  { label: 'Features', to: '/features' },
  { label: 'Roles', to: '/roles' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const loginUrl = 'https://hrgridnx.elitepic.co.uk/login'

/* ----------------------------- HOME: hero ----------------------------- */

export const hero = {
  eyebrow: 'Role-based HR management',
  titleA: 'Every person.',
  titleB: 'Every role. One grid.',
  description:
    'Six working roles, one source of truth. Admin, HR, Department Head, Finance, Team Leader and Employee each get their own square — leave, attendance, payroll and headcount, never re-keyed.',
  primary: { label: 'Start free trial', to: '/contact' },
  secondary: { label: 'See how it works', to: '/features' },
  trusted: 'Trusted by 120+ people-led teams',
}

export const stats = [
  { target: 10, suffix: 'k+', label: 'employees managed' },
  { target: 98, suffix: '%', label: 'payroll accuracy' },
  { target: 60, suffix: '% less', label: 'admin time' },
  { target: 6, suffix: '', label: 'role-based portals' },
]

export const trustedBy = [
  'Meridian Capital',
  'Spiceforge Foods',
  'Northwind Logistics',
  'Arcadia Labs',
  'Steelpine & Co',
  'Halcyon Bank',
  'Osprey Energy',
  'Bramble & Vine',
]

/* --------------------------- HOME: modules ---------------------------- */

export const modules: Module[] = [
  {
    id: 'employees',
    name: 'Employees',
    icon: 'users',
    blurb: 'Every record, one directory — role, department and reporting line on every profile.',
    detail:
      'A single employee directory that replaces the shared spreadsheet. Each record carries its role, department, reporting line and status, and is created and maintained by the people who own it.',
    bullets: [
      'Create, edit and archive records — permission-gated',
      'Role, department and reporting line on every profile',
      'One directory shared by every role that needs it',
    ],
  },
  {
    id: 'departments',
    name: 'Departments',
    icon: 'building',
    blurb: 'The org chart as a grid of teams, each with its head and budget.',
    detail:
      'Departments are first-class cells in the grid. Each has a head who owns its people, approvals and view of the work — so structure and responsibility stay aligned.',
    bullets: [
      'Department structures with named heads',
      'Scoped views for every department leader',
      'Budgets and headcount live at the department level',
    ],
  },
  {
    id: 'leave',
    name: 'Leave',
    icon: 'calendar-days',
    blurb: 'Request, approve and track leave through clear two-level approval flows.',
    detail:
      'Leave moves through the grid at the right level — employee requests, level one approval from the team or department, level two where policy demands. Balances update themselves.',
    bullets: [
      'Self-service leave requests and balances',
      'Two-level approval flows, coded per role',
      'Live absence picture from every role’s view',
    ],
  },
  {
    id: 'attendance',
    name: 'Attendance',
    icon: 'clock4',
    blurb: 'Check-in, absence and coverage — the same pattern, seen from every role.',
    detail:
      'One attendance ledger, many vantage points. Employees check in, team leaders watch coverage, department heads spot patterns, and HR keeps the record of truth.',
    bullets: [
      'Check-in and absence tracking',
      'Coverage patterns for team leaders',
      'Consistency for HR, honesty for finance',
    ],
  },
  {
    id: 'tasks',
    name: 'Tasks',
    icon: 'list-todo',
    blurb: 'Assign and complete work items across the team, with live status.',
    detail:
      'From onboarding checklists to department delivery, tasks carry work through the grid. They are created, assigned and completed with full traceability.',
    bullets: [
      'Create, assign and complete work items',
      'Live status across the team',
      'Tasks attach to people and departments',
    ],
  },
  {
    id: 'payroll',
    name: 'Payroll',
    icon: 'wallet',
    blurb: 'Pay runs and payslips from clean records — no re-keying, ever.',
    detail:
      'Payroll runs against the same records everyone already maintains. Finance shapes a run, approves and releases it, and every employee sees their own payslip.',
    bullets: [
      'Run, approve and release pay runs',
      'Payslips issued straight to each employee',
      'Net pay computed from one source of truth',
    ],
  },
  {
    id: 'expenses',
    name: 'Expenses',
    icon: 'receipt',
    blurb: 'Submit, approve and report claims without chasing paper.',
    detail:
      'Expense claims flow from employee to approver to finance in the same pattern as leave — submitted, checked at the right level, released into payroll time.',
    bullets: [
      'Self-service claim submission',
      'Approval at the right level',
      'Claims land cleanly for finance',
    ],
  },
  {
    id: 'documents',
    name: 'Documents',
    icon: 'folder-open',
    blurb: 'Contracts, policies and files — versioned and role-scoped.',
    detail:
      'Documents live where the grid says they do. Contracts are scoped to the people who may see them, policies publish to everyone, and sensitive files stay locked.',
    bullets: [
      'Upload and version contracts and policies',
      'Role-scoped access to every file',
      'Everything in one searchable library',
    ],
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: 'chart-column',
    blurb: 'Operational and compliance reporting, cut to each role’s horizon.',
    detail:
      'Reports are cut to the responsibility of the viewer. A team leader sees the team, a department head sees the department, and compliance sees the whole.',
    bullets: [
      'Operational and compliance reporting',
      'Period-scoped views',
      'One agreed dataset, no version arguments',
    ],
  },
]

/* ----------------------------- HOME: roles ---------------------------- */

export const roles: Role[] = [
  {
    id: 'admin',
    name: 'Admin',
    short: 'Runs the grid',
    icon: 'crown',
    summary: 'System administrator with full access.',
    view: 'Organisation home — security, integrations, invitations and the audit trail.',
    day: 'You own the shape of the grid. Mornings are short — a security check, a glance at the audit trail, a look at how the whole organisation is behaving today.',
    moments: [
      '08:40 · Audit log check — anything new overnight',
      '10:15 · Invite two new starters, keys pre-set',
      '15:30 · Review integrations and permission health',
    ],
    sees: ['Employees', 'Departments', 'Leave', 'Attendance', 'Tasks', 'Payroll', 'Expenses', 'Documents', 'Reports'],
    can: ['Manage every module', 'Invite and remove people', 'Set permissions', 'See the audit trail'],
  },
  {
    id: 'hr_manager',
    name: 'HR Manager',
    short: 'Owns the people layer',
    icon: 'user-cog',
    summary: 'Manages employees, leave and HR records end to end.',
    view: 'People home — approvals, onboarding and every employee in one place.',
    day: 'You own the people layer. Leave, onboarding and employee records all land in your square, and the day is about moving people’s requests along without chasing anyone.',
    moments: [
      '08:45 · Approve the morning’s leave queue',
      '11:00 · Run onboarding for two new starters',
      '16:00 · Update records before payroll week',
    ],
    sees: ['Employees', 'Departments', 'Leave', 'Attendance', 'Documents', 'Reports'],
    can: ['Maintain employee records', 'Approve leave', 'Run onboarding', 'Upload documents'],
  },
  {
    id: 'department_head',
    name: 'Department Head',
    short: 'Owns one cell',
    icon: 'landmark',
    summary: 'Owns one department and the team inside it.',
    view: 'Department home — approvals, budgets and performance in one view.',
    day: 'You only ever see your department. Coverage, budgets and approvals come together in one calm view of the cell you run — the whole grid, from your square.',
    moments: [
      '08:30 · Check coverage and who is out today',
      '12:15 · Approve leave for the product team',
      '16:30 · Close the week’s department tasks',
    ],
    sees: ['Employees', 'Departments', 'Leave', 'Attendance', 'Tasks'],
    can: ['View their department only', 'Approve leave', 'Watch coverage', 'Deliver department tasks'],
  },
  {
    id: 'finance_manager',
    name: 'Finance Manager',
    short: 'Keeps the ledger honest',
    icon: 'scale',
    summary: 'Runs payroll and expense approvals across the company.',
    view: 'Payroll home — the payroll cycle, expense claims and run history.',
    day: 'You keep the ledger honest. Payroll, expenses and payslips run from the records everyone already maintains — no re-keying, no reconciliation meetings.',
    moments: [
      '09:00 · Approve expense claims from the week',
      '10:30 · Shape and release the March pay run',
      '15:00 · Audit payslips against the grid',
    ],
    sees: ['Payroll', 'Expenses', 'Employees', 'Documents', 'Reports'],
    can: ['Run and release payroll', 'Approve expenses', 'Audit payslips', 'Cut reports'],
  },
  {
    id: 'team_leader',
    name: 'Team Leader',
    short: 'Keeps one team moving',
    icon: 'users-round',
    summary: 'Oversees a team, its tasks, attendance and leave.',
    view: 'Team home — leave to approve, live attendance and the team roster.',
    day: 'You keep one team moving. Tasks, attendance and leave sit in a single view, so you spot problems before they become meetings.',
    moments: [
      '08:20 · See who is in, who is out, what is overdue',
      '11:30 · Assign today’s deliverables',
      '14:45 · Approve leave and check the roster',
    ],
    sees: ['Tasks', 'Employees', 'Attendance', 'Leave'],
    can: ['Assign and complete tasks', 'Approve leave', 'Track attendance', 'See only their team'],
  },
  {
    id: 'employee',
    name: 'Employee',
    short: 'Works their own cell',
    icon: 'circle-user',
    summary: 'Standard self-service employee access.',
    view: 'Home — the day at a glance: time, requests and what happens next.',
    day: 'You work your own cell. The day is simple — check in, see what is next, and know your leave, expenses and payslips are handled without chasing anyone.',
    moments: [
      '08:58 · Check in for the day',
      '12:30 · Submit expenses from lunch meetings',
      '17:05 · Read the payslip notification that arrived',
    ],
    sees: ['My leave', 'My attendance', 'My payslips', 'Documents'],
    can: ['Request leave', 'Check in', 'Submit expenses', 'View own payslips'],
  },
]

/* ------------------------- HOME: journey / steps ----------------------- */

export const steps = [
  {
    number: '01',
    icon: 'rocket',
    title: 'Set up',
    body: 'Map your departments, teams and roles. Every person lands in exactly one cell of the grid, with a reporting line and a clear view from day one.',
  },
  {
    number: '02',
    icon: 'send',
    title: 'Invite your team',
    body: 'Each role arrives already scoped — permission keys switched on before anyone logs in. No per-person setup, no surprises.',
  },
  {
    number: '03',
    icon: 'workflow',
    title: 'Run HR on autopilot',
    body: 'Leave, attendance, tasks and payroll flow through the grid — requested, approved and released at the right level, every time.',
  },
]

export const security = [
  {
    icon: 'key-round',
    title: 'Role-based permissions',
    body: 'Every screen sits behind a named permission key like leave.approve.level1 — a Department Head sees only their department, an Employee only their own file.',
  },
  {
    icon: 'scroll-text',
    title: 'Audit logs',
    body: 'Who changed a record, when and under which role. The grid remembers everything, so stories stay straight at review time.',
  },
  {
    icon: 'lock',
    title: 'Data encryption',
    body: 'Records are encrypted in transit and at rest, and role-scoped files stay locked to the people who may see them.',
  },
]

/* ------------------------- HOME: testimonials --------------------------- */

export const testimonials = [
  {
    quote:
      'As a department head I only ever see my department — the whole grid, but from my square. It is the first system that respects what a role should actually show you.',
    name: 'Divya Mehta',
    title: 'Department Head, Meridian Capital',
  },
  {
    quote:
      'We deleted four spreadsheets in the week we moved to HRGRIDNX. Payroll imports from the same records our managers keep — the reconciliation meetings simply stopped.',
    name: 'Tara Singh',
    title: 'HR Manager, Spiceforge Foods',
  },
  {
    quote:
      'Payroll runs from the same records our managers keep alive every day. The month-end reconciliation meeting simply stopped existing.',
    name: 'James Okoro',
    title: 'Finance Manager, Osprey Energy',
  },
]

/* ------------------------------- HOME: CTA ------------------------------ */

export const cta = {
  title: 'Put every role on the grid.',
  body: 'Start free and watch six roles share one source of truth — leave, attendance, tasks, payroll and documents with no clutter between them.',
  primary: { label: 'Start free trial', to: '/contact' },
  secondary: { label: 'hello@hrgridnx.com', href: 'mailto:hello@hrgridnx.com' },
}

/* ---------------------------- FEATURES page ---------------------------- */

export const features = {
  eyebrow: 'The features',
  titleA: 'Nine modules,',
  titleB: 'one dataset.',
  description:
    'The grid is built from nine working modules. Each has a name, a permission key and a place — and they all read from the same records, so nothing is ever re-keyed.',
  permissionNote:
    'Every module is guarded by named permission keys shared between the app and the API. That vocabulary is one of HRGRIDNX’s quiet strengths: what you can see is never a guess.',
}

/* ------------------------------ ROLES page ------------------------------ */

export const rolesPage = {
  eyebrow: 'The six roles',
  titleA: 'One grid,',
  titleB: 'six vantage points.',
  description:
    'Roles are the rows and columns of the grid. Each gives a working persona a coherent view of the organisation — the modules it owns and the actions it may take. Nothing more, nothing less.',
  roleNote:
    'Scoped, named, testable. Each role is defined by what it sees and what it can do — the two halves of the grid.',
}

/* ----------------------------- PRICING page ----------------------------- */

export const pricing = {
  eyebrow: 'Pricing',
  titleA: 'Simple per-person pricing,',
  titleB: 'scaled to the grid.',
  description:
    'Every plan includes the full module set and role-based access. The difference is support, SSO and the size of the organisation.',
  plans: [
    {
      name: 'Starter',
      price: { monthly: '£4', yearly: '£3' },
      per: 'per person / month',
      blurb: 'For teams getting their grid in order.',
      features: [
        'Full role-based access',
        'All nine modules',
        'Employees, leave & attendance',
        'Community support',
      ],
      cta: 'Start free trial',
      href: 'mailto:hello@hrgridnx.com',
    },
    {
      name: 'Growth',
      price: { monthly: '£7', yearly: '£6' },
      per: 'per person / month',
      cadence: 'billed annually',
      blurb: 'For growing companies running real workflows.',
      highlight: true,
      features: [
        'Everything in Starter',
        'Payroll & expenses',
        'Two-level approvals',
        'Priority support',
      ],
      cta: 'Start free trial',
      href: 'mailto:hello@hrgridnx.com',
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      per: '',
      cadence: 'annual contract',
      blurb: 'For complex organisations with compliance needs.',
      features: [
        'Everything in Growth',
        'SSO & SAML',
        'Audit trail export',
        'Dedicated success manager',
      ],
      cta: 'Talk to us',
      href: 'mailto:hello@hrgridnx.com',
    },
  ],
  note: 'Prices in GBP excluding VAT. We happily match non-profits and early-stage teams — just ask.',
  comparison: [
    { feature: 'Role-based access', starter: true, growth: true, enterprise: true },
    { feature: 'All nine modules', starter: true, growth: true, enterprise: true },
    { feature: 'Two-level approvals', starter: false, growth: true, enterprise: true },
    { feature: 'Payroll & expenses', starter: false, growth: true, enterprise: true },
    { feature: 'Audit trail export', starter: false, growth: false, enterprise: true },
    { feature: 'SSO & SAML', starter: false, growth: false, enterprise: true },
    { feature: 'Priority support', starter: false, growth: true, enterprise: true },
    { feature: 'Dedicated success manager', starter: false, growth: false, enterprise: true },
  ],
  faq: [
    {
      q: 'Do you charge per module?',
      a: 'No. Every plan includes all nine modules. You pay per person, and roles decide what each person sees.',
    },
    {
      q: 'What happens after the free trial?',
      a: 'You move to the plan that fits. No data is locked in — export everything whenever you like.',
    },
    {
      q: 'Is there onboarding help?',
      a: 'On Growth and Enterprise we map your grid with you: departments, roles and permission sets before go-live.',
    },
    {
      q: 'Can we switch billing cadence later?',
      a: 'Yes. Move between monthly and annual billing at any renewal — the price simply adjusts to the cadence.',
    },
  ],
}

/* ------------------------------- ABOUT page ------------------------------ */

export const about = {
  eyebrow: 'About',
  titleA: 'We made the grid',
  titleB: 'before the software.',
  description:
    'HRGRIDNX started with a simple observation: HR tools show every employee the same screen, then let access control hide the rest. We built the opposite — a system that is shaped, row by row, by the role sitting in front of it.',
  mission:
    'Six roles, one source of truth. Every person lands in exactly one cell of the grid and sees only the square that belongs to their work — so people, leave, attendance, tasks and payroll move fast, and honestly.',
  story:
    'Most HR software is organised around modules — a leave screen, a payroll screen, a directory. HRGRIDNX is organised around roles. A Department Head should meet a department on first load; an Employee should meet their own day. The modules are just the furniture inside that promise.',
  timeline: [
    {
      year: '2024',
      title: 'The observation',
      body: 'Every HR tool shows everyone the same screen, then hides the rest with access control. We built the opposite — a role-first layout.',
    },
    {
      year: '2025',
      title: 'First grid, live',
      body: 'Role-based modules run as one shared dataset for a handful of London teams. Leave, attendance and payroll stop being re-keyed.',
    },
    {
      year: '2026',
      title: 'Nine modules',
      body: 'Nine modules, six portals, one source of truth — and a weekly cadence of shipped improvements to the grid.',
    },
    {
      year: 'Next',
      title: 'The wider grid',
      body: 'Integrations, deeper compliance and bigger organisations — still six roles, still one grid.',
    },
  ],
  team: [
    { name: 'Adeyemi Cole', role: 'Co-founder · Product', initials: 'AC' },
    { name: 'Mira Patel', role: 'Co-founder · Engineering', initials: 'MP' },
    { name: 'Jonas Lindqvist', role: 'Design', initials: 'JL' },
    { name: 'Priya Ramesh', role: 'Customer success', initials: 'PR' },
    { name: 'Sam Whitfield', role: 'Growth', initials: 'SW' },
    { name: 'Nadia Okafor', role: 'People ops', initials: 'NO' },
  ],
  values: [
    {
      icon: 'grid-2x2',
      title: 'Clarity over clutter',
      body: 'Every role knows exactly what it can see and do. Interfaces stay small because scope is precise.',
    },
    {
      icon: 'shield-check',
      title: 'Permissions by design',
      body: 'Security is not a bolt-on. Every screen is guarded by a named permission key from day one.',
    },
    {
      icon: 'database',
      title: 'One shared record',
      body: 'HR, managers and finance read the same data. The grid never argues with itself.',
    },
    {
      icon: 'hand-coins',
      title: 'Human work first',
      body: 'The point is not dashboards. It is that people, leave, pay and documents move quickly and honestly.',
    },
  ],
  statLine:
    'We believe the best HR software is the kind people stop noticing. The grid gets out of the way — because every role already knows its square.',
}

/* ----------------------------- CONTACT page ----------------------------- */

export const contact = {
  eyebrow: 'Contact',
  titleA: 'Step onto',
  titleB: 'the grid.',
  description:
    'Tell us about your organisation and its role structure. We reply within one working day.',
  info: [
    { icon: 'mail', label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
    { icon: 'phone', label: 'Phone', value: brand.phone, href: `tel:${brand.phone.replace(/[^+\d]/g, '')}` },
    { icon: 'map-pin', label: 'Studio', value: brand.city, href: undefined },
  ],
  form: {
    name: 'Your name',
    email: 'Work email',
    company: 'Company',
    teamSize: 'Team size',
    teamSizes: ['1–10', '11–50', '51–200', '201–500', '500+'],
    message: 'What does your organisation look like?',
    submit: 'Start my trial',
    thanks: 'Thanks — your message is on the grid. We reply within one working day.',
  },
  faq: [
    {
      q: 'How soon can we start?',
      a: 'Most teams map their roles and are on the grid within the week.',
    },
    {
      q: 'Can we bring our own role structures?',
      a: 'Yes. Mapping your departments, teams and permission sets is part of onboarding.',
    },
  ],
}

export const footer: {
  tagline: string
  blurb: string
  columns: FooterColumn[]
  newsletter: { title: string; body: string; placeholder: string; button: string; thanks: string }
  legal: string
} = {
  tagline: 'HR·GRID·NX — role-based HR, laid out on one grid.',
  blurb: 'People, leave, attendance, tasks, payroll, expenses, documents and reports — each role in its own square of the grid.',
  columns: [
    {
      title: 'Platform',
      links: [
        { label: 'Employees', to: '/features#employees' },
        { label: 'Leave', to: '/features#leave' },
        { label: 'Attendance', to: '/features#attendance' },
        { label: 'Tasks', to: '/features#tasks' },
        { label: 'Payroll', to: '/features#payroll' },
      ],
    },
    {
      title: 'Roles',
      links: [
        { label: 'Admin', to: '/roles#admin' },
        { label: 'HR Manager', to: '/roles#hr_manager' },
        { label: 'Department Head', to: '/roles#department_head' },
        { label: 'Finance Manager', to: '/roles#finance_manager' },
        { label: 'Employee', to: '/roles#employee' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Features', to: '/features' },
        { label: 'Roles', to: '/roles' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Start free trial', to: '/contact' },
        { label: 'Sign in', href: loginUrl },
        { label: 'Privacy', to: '/about#privacy' },
        { label: 'Terms', to: '/about#terms' },
      ],
    },
  ],
  newsletter: {
    title: 'Field notes from the grid',
    body: 'One short email a month on HR operations, permissions and payroll. No spam, ever.',
    placeholder: 'Work email',
    button: 'Subscribe',
    thanks: 'Thanks — you are on the grid.',
  },
  legal: '© 2026 HRGRIDNX. Built on a grid.',
}