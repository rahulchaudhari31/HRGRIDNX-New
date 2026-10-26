/* ------------------------------------------------------------------ *
 * HRGRIDNX — all site copy in one place. Edit text here, never in UI. *
 * ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
export const brand = {
    name: 'HRGridNX',
    wordmark: 'HR·GRID·NX',
    tagline: 'Every person. Every role. One grid.',
    intro: 'HRGridNX brings your people, leave, attendance, tasks, payroll, and documents into one connected HR platform. Every team works from the same records, with access and responsibilities defined by their role.',
    email: 'hello@hrgridnx.com',
    phone: '+44 20 7946 0958',
    city: 'Shoreditch, London',
    url: 'https://hrgridnx.com',
};
export const navLinks = [
    { label: 'Features', to: '/features' },
    { label: 'Roles', to: '/roles' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
];
export const loginUrl = 'https://hrgridnx.elitepic.co.uk/login';
/* ----------------------------- HOME: hero ----------------------------- */
export const hero = {
    eyebrow: 'Connected HR platform',
    titleA: 'Every person.',
    titleB: 'Every role. One grid.',
    description: 'HRGridNX brings your people, leave, attendance, tasks, payroll, and documents into one connected HR platform. Every team works from the same records, with access and responsibilities defined by their role.',
    primary: { label: 'Start Free Trial', to: '/contact' },
    secondary: { label: 'See How It Works', to: '/features' },
    trusted: 'No card required to start your trial.',
};
export const stats = [
    { target: 10, suffix: 'k+', label: 'employees managed' },
    { target: 98, suffix: '%', label: 'payroll accuracy' },
    { target: 60, suffix: '% less', label: 'admin time' },
    { target: 6, suffix: '', label: 'role-based portals' },
];
export const trustedBy = [
    'Meridian Capital',
    'Spiceforge Foods',
    'Northwind Logistics',
    'Arcadia Labs',
    'Steelpine & Co',
    'Halcyon Bank',
    'Osprey Energy',
    'Bramble & Vine',
];
/* --------------------------- HOME: modules ---------------------------- */
export const modules = [
    {
        id: 'employees',
        name: 'Employees',
        icon: 'users',
        blurb: 'One directory for every employee.',
        detail: 'Maintain employee profiles, reporting lines, departments and employment status in a central directory. Authorised users can manage records according to their assigned permissions.',
        bullets: [
            'Create, update and archive employee profiles.',
            'Maintain roles, departments and reporting lines.',
            'Keep employee information accessible to authorised users.',
        ],
    },
    {
        id: 'departments',
        name: 'Departments',
        icon: 'building',
        blurb: 'Clear structure. Defined responsibility.',
        detail: 'Organise your workforce into departments with named department heads. Keep team structures, ownership and departmental visibility connected.',
        bullets: [
            'Define departments and their responsible heads.',
            'Give department leaders access to relevant information.',
            'Maintain departmental headcount and budget information where configured.',
        ],
    },
    {
        id: 'leave',
        name: 'Leave',
        icon: 'calendar-days',
        blurb: 'Leave management without the chasing.',
        detail: 'Allow employees to submit leave requests and check their balances while authorised managers review requests through the configured approval process.',
        bullets: [
            'Submit and review leave requests.',
            'Configure one-level or two-level approval workflows.',
            'View leave balances and absence information.',
        ],
    },
    {
        id: 'attendance',
        name: 'Attendance',
        icon: 'clock4',
        blurb: 'A shared view of attendance.',
        detail: 'Keep attendance records accessible to the people who need them. Employees can check in, team leaders can review team availability, and HR can maintain attendance records.',
        bullets: [
            'Record employee check-ins and absences.',
            'Monitor team availability.',
            'Maintain a consistent attendance record.',
        ],
    },
    {
        id: 'tasks',
        name: 'Tasks',
        icon: 'list-todo',
        blurb: 'Keep work moving across the team.',
        detail: 'Create, assign and track tasks within your organisation. Connect responsibilities to the relevant employees and departments to improve visibility of ongoing work.',
        bullets: [
            'Create, assign and complete tasks.',
            'Monitor task status and progress.',
            'Link work items to employees and departments.',
        ],
    },
    {
        id: 'payroll',
        name: 'Payroll',
        icon: 'wallet',
        blurb: 'Payroll built on shared records.',
        detail: 'Manage payroll activities using employee information maintained within the platform. Finance can prepare and release pay runs, while employees can access their own payslips.',
        bullets: [
            'Prepare, approve and release payroll runs.',
            'Provide employees with access to their payslips.',
            'Use shared employee records to reduce duplicate data entry.',
        ],
    },
    {
        id: 'expenses',
        name: 'Expenses',
        icon: 'receipt',
        blurb: 'A clearer route from claim to approval.',
        detail: 'Give employees a way to submit expense claims and route them to the appropriate approver and finance team.',
        bullets: [
            'Submit and review expense claims.',
            'Route claims through configured approval levels.',
            'Maintain records for finance review.',
        ],
    },
    {
        id: 'documents',
        name: 'Documents',
        icon: 'folder-open',
        blurb: 'Your documents, organised by access.',
        detail: 'Keep employee documents, contracts and policies in a central location, with visibility controlled according to the document\'s sensitivity and the user\'s permissions.',
        bullets: [
            'Upload and manage documents.',
            'Control access to sensitive files.',
            'Keep contracts, policies and other records organised.',
        ],
    },
    {
        id: 'reports',
        name: 'Reports',
        icon: 'chart-column',
        blurb: 'The right information for every responsibility.',
        detail: 'Give managers access to reports relevant to their role, from team-level activity to wider organisational reporting.',
        bullets: [
            'View operational and compliance-related reports.',
            'Filter reporting by relevant periods and responsibilities where supported.',
            'Work from shared records to reduce conflicting versions of data.',
        ],
    },
];
/* ----------------------------- HOME: roles ---------------------------- */
export const roles = [
    {
        id: 'admin',
        name: 'Admin',
        short: 'Platform and permissions',
        icon: 'crown',
        summary: 'Manage the platform, users and permissions.',
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
        short: 'People, leave and HR documentation',
        icon: 'user-cog',
        summary: 'Maintain employee records, leave and HR documentation.',
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
        short: 'Departmental people and approvals',
        icon: 'landmark',
        summary: 'Oversee departmental people, approvals and responsibilities.',
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
        short: 'Payroll, expenses and financial records',
        icon: 'scale',
        summary: 'Manage payroll, expenses and financial records.',
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
        short: 'Team tasks, attendance and leave',
        icon: 'users-round',
        summary: 'Coordinate team tasks, attendance and leave.',
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
        short: 'Personal information and payslips',
        icon: 'circle-user',
        summary: 'Access personal information, documents and payslips.',
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
];
/* ------------------------- HOME: journey / steps ----------------------- */
export const steps = [
    {
        number: '01',
        icon: 'rocket',
        title: 'Shape your grid',
        body: "Set up your organisation's departments, reporting lines, user roles and permissions.",
    },
    {
        number: '02',
        icon: 'send',
        title: 'Bring your team in',
        body: 'Invite employees, assign roles and give everyone access to the information they need.',
    },
    {
        number: '03',
        icon: 'workflow',
        title: 'Run HR from one place',
        body: "Manage everyday HR activities through connected modules, with visibility based on each person's responsibilities.",
    },
];
export const security = [
    {
        icon: 'key-round',
        title: 'Role-based permissions',
        body: 'Each user receives access according to their responsibilities, helping keep sensitive information restricted to the appropriate people.',
    },
    {
        icon: 'scroll-text',
        title: 'Audit logs for traceability',
        body: 'Activity is recorded so changes can be traced back to the responsible user.',
    },
    {
        icon: 'lock',
        title: 'Controlled access to sensitive documents',
        body: 'Sensitive files are restricted to the people who are authorised to view them.',
    },
    {
        icon: 'users-round',
        title: 'Defined responsibilities across the organisation',
        body: 'Every role has a clear scope of responsibility across the platform.',
    },
];
/* ------------------------- HOME: testimonials --------------------------- */
export const testimonials = [
    {
        quote: 'As a department head I only ever see my department — the whole grid, but from my square. It is the first system that respects what a role should actually show you.',
        name: 'Divya Mehta',
        title: 'Department Head, Meridian Capital',
    },
    {
        quote: 'We deleted four spreadsheets in the week we moved to HRGRIDNX. Payroll imports from the same records our managers keep — the reconciliation meetings simply stopped.',
        name: 'Tara Singh',
        title: 'HR Manager, Spiceforge Foods',
    },
    {
        quote: 'Payroll runs from the same records our managers keep alive every day. The month-end reconciliation meeting simply stopped existing.',
        name: 'James Okoro',
        title: 'Finance Manager, Osprey Energy',
    },
];
/* ------------------------------- HOME: CTA ------------------------------ */
export const cta = {
    title: 'Every role on the grid.',
    body: 'Start with HRGridNX and bring your people, leave, attendance, tasks, payroll and documents into one connected workspace.',
    primary: { label: 'Start Free Trial', to: '/contact' },
    secondary: { label: 'Contact Our Team', href: 'mailto:hello@hrgridnx.com' },
};
/* ---------------------------- FEATURES page ---------------------------- */
export const features = {
    eyebrow: 'The features',
    titleA: 'Nine modules.',
    titleB: 'One dataset.',
    description: 'HRGridNX connects the essential processes of people management in one platform. Each module serves a specific purpose while sharing the records that keep your organisation aligned.',
};
/* ------------------------------ ROLES page ------------------------------ */
export const rolesPage = {
    eyebrow: 'The six roles',
    titleA: 'One grid,',
    titleB: 'six vantage points.',
    description: 'Roles are the rows and columns of the grid. Each gives a working persona a coherent view of the organisation — the modules it owns and the actions it may take. Nothing more, nothing less.',
    roleNote: 'Scoped, named, testable. Each role is defined by what it sees and what it can do — the two halves of the grid.',
};
/* ----------------------------- PRICING page ----------------------------- */
export const pricing = {
    eyebrow: 'Pricing',
    titleA: 'Simple per-person pricing,',
    titleB: 'scaled to the grid.',
    description: 'Every plan includes the full module set and role-based access. The difference is support, SSO and the size of the organisation.',
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
};
/* ------------------------------- ABOUT page ------------------------------ */
export const about = {
    eyebrow: 'About',
    titleA: 'We made the grid',
    titleB: 'before the software.',
    description: 'HRGRIDNX started with a simple observation: HR tools show every employee the same screen, then let access control hide the rest. We built the opposite — a system that is shaped, row by row, by the role sitting in front of it.',
    mission: 'Six roles, one source of truth. Every person lands in exactly one cell of the grid and sees only the square that belongs to their work — so people, leave, attendance, tasks and payroll move fast, and honestly.',
    story: 'Most HR software is organised around modules — a leave screen, a payroll screen, a directory. HRGRIDNX is organised around roles. A Department Head should meet a department on first load; an Employee should meet their own day. The modules are just the furniture inside that promise.',
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
    statLine: 'We believe the best HR software is the kind people stop noticing. The grid gets out of the way — because every role already knows its square.',
};
/* ----------------------------- CONTACT page ----------------------------- */
export const contact = {
    eyebrow: 'Contact',
    titleA: 'Step onto',
    titleB: 'the grid.',
    description: 'Tell us about your organisation and its role structure. We reply within one working day.',
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
};
export const footer = {
    tagline: 'HR·GRID·NX — every person. Every role. One grid.',
    blurb: 'HRGridNX brings your people, leave, attendance, tasks, payroll and documents into one connected HR platform.',
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
    legal: '© 2026 HRGridNX. All rights reserved.',
};
