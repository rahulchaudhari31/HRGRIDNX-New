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
        short: 'Owns the structure of the grid.',
        portal: 'Manage the platform, users and permissions.',
        icon: 'crown',
        summary: 'Administrators oversee platform configuration, user access and permissions, helping maintain the structure and integrity of the system.',
        sees: ['Employees', 'Departments', 'Leave', 'Attendance', 'Tasks', 'Payroll', 'Expenses', 'Documents', 'Reports'],
        can: [
            'Manage users and invitations.',
            'Configure access permissions.',
            'Review audit logs.',
            'Manage relevant integrations and platform settings.',
        ],
        cta: { label: 'Explore Admin Access', to: '/contact' },
    },
    {
        id: 'hr_manager',
        name: 'HR Manager',
        short: 'Own the people layer.',
        portal: 'Maintain employee records, leave and HR documentation.',
        icon: 'user-cog',
        summary: 'HR managers maintain employee information and coordinate essential HR activities through a shared workspace.',
        sees: ['Employees', 'Departments', 'Leave', 'Attendance', 'Documents', 'Reports'],
        can: [
            'Maintain employee records.',
            'Review leave requests and balances.',
            'Manage HR documentation.',
            'Coordinate onboarding and employee administration.',
        ],
        cta: { label: 'Explore HR Management', to: '/contact' },
    },
    {
        id: 'department_head',
        name: 'Department Head',
        short: 'Manage your department in one view.',
        portal: 'Oversee departmental people, approvals and responsibilities.',
        icon: 'landmark',
        summary: 'Department heads can focus on their own teams, with visibility into relevant people, approvals and operational responsibilities.',
        sees: ['Employees', 'Departments', 'Leave', 'Attendance', 'Tasks'],
        can: [
            'Review departmental attendance and leave.',
            'Approve requests assigned to their role.',
            'Monitor departmental tasks.',
            'Review relevant team and headcount information.',
        ],
        cta: { label: 'Explore Department Management', to: '/contact' },
    },
    {
        id: 'finance_manager',
        name: 'Finance Manager',
        short: 'Keep the financial records aligned.',
        portal: 'Manage payroll, expenses and financial records.',
        icon: 'scale',
        summary: 'Finance managers work with payroll and expense information maintained across the organisation, helping reduce the need to reconcile duplicated records.',
        sees: ['Payroll', 'Expenses', 'Employees', 'Documents', 'Reports'],
        can: [
            'Prepare and manage payroll runs.',
            'Review and approve expense claims.',
            'Release payroll according to the configured process.',
            'Maintain access to relevant financial records and reports.',
        ],
        cta: { label: 'Explore Finance Access', to: '/contact' },
    },
    {
        id: 'team_leader',
        name: 'Team Leader',
        short: 'Keep your team moving.',
        portal: 'Coordinate team tasks, attendance and leave.',
        icon: 'users-round',
        summary: "Team leaders get a focused view of their team's work and availability, helping them coordinate tasks and manage day-to-day responsibilities.",
        sees: ['Tasks', 'Employees', 'Attendance', 'Leave'],
        can: [
            'Monitor team attendance.',
            'Assign and track tasks.',
            'Review team availability.',
            'Manage leave requests within their authority.',
        ],
        cta: { label: 'Explore Team Management', to: '/contact' },
    },
    {
        id: 'employee',
        name: 'Employee',
        short: 'Your work information, in one place.',
        portal: 'Access personal information, documents and payslips.',
        icon: 'circle-user',
        summary: 'Employees can access their own relevant information without having to rely on managers for every routine request.',
        sees: ['My leave', 'My attendance', 'My payslips', 'Documents'],
        can: [
            'Check in and view relevant attendance information.',
            'Submit leave and expense requests.',
            'Access personal documents.',
            'View payslips and assigned tasks where available.',
        ],
        cta: { label: 'Explore Employee Self-Service', to: '/contact' },
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
export const homeCta = {
    title: 'Every role on the grid.',
    body: 'Start with HRGridNX and bring your people, leave, attendance, tasks, payroll and documents into one connected workspace.',
    primary: { label: 'Start Free Trial', to: '/contact' },
    secondary: { label: 'Contact Our Team', href: 'mailto:hello@hrgridnx.com' },
};
export const cta = {
    title: 'Every role has a place on the grid.',
    body: 'Give your team a shared platform with individual access based on its responsibilities.',
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
    eyebrow: 'Permissions, not guesswork',
    titleA: 'Access defined',
    titleB: 'by responsibility.',
    description: 'HRGridNX uses permission-based access to help ensure that users see and perform only the actions assigned to their roles. This approach helps establish clearer boundaries between employee self-service, management activities and administrative responsibilities.',
    introTitle: 'One grid. Six vantage points.',
    introBody: 'Every organisation has different responsibilities. HRGridNX gives each user a role-based view of the platform, connecting the information they need with the actions they are authorised to take.',
    roleNote: '',
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
    description: 'HRGridNX was shaped around a simple observation: HR work becomes harder when employee information, approvals, attendance and payroll are spread across disconnected systems. We set out to bring those everyday processes into one connected platform, organised around the people who use it and the responsibilities they hold.',
    mission: 'Six roles. One source of truth.',
    missionLabel: 'The brand statement',
    story: 'Every person lands in a defined place within the grid and sees the information relevant to their work. Employee records, leave, attendance, tasks and payroll draw on shared information, helping teams spend less time reconciling records and more time getting work done.',
    valuesEyebrow: 'The values',
    valuesTitleA: 'Four things',
    valuesTitleB: 'we will not trade',
    values: [
        {
            icon: 'grid-2x2',
            title: 'Clarity over clutter',
            body: 'A useful platform should make everyday work easier to understand. We aim to keep information organised and actions relevant to each user\'s role.',
        },
        {
            icon: 'shield-check',
            title: 'Permissions by design',
            body: 'Access should reflect responsibility. HRGridNX is built around defined roles and permissions, helping organisations manage who can view information and perform specific actions.',
        },
        {
            icon: 'database',
            title: 'One shared record',
            body: 'When teams work from disconnected records, inconsistencies become harder to avoid. HRGridNX brings key HR processes together around shared information.',
        },
        {
            icon: 'hand-coins',
            title: 'Human work first',
            body: 'Technology should make room for better work, not create more administration. Our focus is on connecting routine processes so people can concentrate on their responsibilities.',
        },
    ],
    timelineEyebrow: 'Timeline',
    timelineTitleA: 'From a notebook',
    timelineTitleB: 'to the grid',
    timelineDescription: 'Built around the way organisations work. HRGridNX follows a straightforward principle: organise the people, responsibilities and processes first, then bring them together through software.',
    timeline: [
        {
            year: '01',
            title: 'The observation',
            body: 'Everyday HR information is often scattered across spreadsheets, systems and separate workflows.',
        },
        {
            year: '02',
            title: 'The first principle',
            body: 'Each person should have a clear role, with access aligned to their responsibilities.',
        },
        {
            year: '03',
            title: 'The connected platform',
            body: 'Core HR activities share records, reducing unnecessary duplication.',
        },
        {
            year: '04',
            title: 'The wider vision',
            body: 'Give organisations a more consistent way to manage their people and day-to-day operations.',
        },
    ],
    teamEyebrow: 'The team',
    teamTitleA: 'The people',
    teamTitleB: 'behind the squares',
    teamDescription: 'Technology works best when it serves people. HRGridNX is built around the people who keep an organisation moving, from administrators and HR teams to department heads, finance managers, team leaders and employees. Our aim is to give every role a clear place within the same connected system.',
    team: [],
};
/* ----------------------------- CONTACT page ----------------------------- */
export const contact = {
    eyebrow: 'Contact',
    titleA: 'Step onto',
    titleB: 'the grid.',
    description: "Tell us about your organisation and how your teams work. We'll help you explore whether HRGridNX is the right fit for your HR processes. We aim to respond within one working day.",
    response: 'We aim to respond within one working day.',
    info: [
        { icon: 'mail', label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
        { icon: 'phone', label: 'Phone', value: brand.phone, href: `tel:${brand.phone.replace(/[^+\d]/g, '')}` },
        { icon: 'map-pin', label: 'Studio', value: brand.city, href: undefined },
    ],
    form: {
        heading: 'Start your free trial',
        blurb: 'Six roles, one grid, on your terms.',
        subBlurb: 'Complete the details below to tell us about your organisation.',
        name: 'Full name',
        email: 'Work email',
        company: 'Company',
        teamSize: 'Team size',
        teamSizes: ['1–10 employees', '11–50 employees', '51–200 employees', '201+ employees'],
        message: 'What does your organisation look like?',
        submit: 'Start Free Trial',
        thanks: 'Thanks — your enquiry is on the grid. We aim to respond within one working day.',
    },
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
                { label: 'Team Leader', to: '/roles#team_leader' },
                { label: 'Employee', to: '/roles#employee' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', to: '/about' },
                { label: 'Features', to: '/features' },
                { label: 'Roles', to: '/roles' },
                { label: 'Contact', to: '/contact' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Start free trial', to: '/contact' },
                { label: 'Sign in', href: loginUrl },
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
