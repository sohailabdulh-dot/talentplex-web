import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, CardGrid, ContactFormLive, DeepDive, Diagram, PageHero, Process, ProductVisual, SiteFooter, SiteHeader } from '../../components/site';

const pages: Record<string, { eyebrow: string; title: React.ReactNode; copy: string; items?: string[]; process?: string[]; kind?: 'product' | 'diagram' | 'light' }> = {
  services: { eyebrow: 'SERVICES', title: 'Recruitment first. Technology and digital when they help the business move.', copy: 'TalentPlex leads with recruitment and staffing services, supported by technology and digital capabilities where they solve a practical business need.', items: ['Recruitment Services', 'Technology', 'Digital'], process: ['Understand', 'Plan', 'Execute', 'Review', 'Improve'] },
  'services/digital': { eyebrow: 'DIGITAL SERVICES', title: 'Experience and creative direction for businesses ready to move.', copy: 'We shape the UX, UI, brand experience and campaign moments that make businesses clearer, more credible and easier to choose.', items: ['UI/UX Design', 'Brand Experience', 'Digital Experience', 'Creative Design', 'Landing / Campaign Experiences'], process: ['Strategy', 'UX', 'Design', 'Creative', 'Launch', 'Optimize'], kind: 'light' },
  'services/technology': { eyebrow: 'TECHNOLOGY SERVICES', title: 'Technology built around how you work.', copy: 'Modern websites, software products and connected systems designed around real business workflows.', items: ['Website Design & Development', 'Custom Software', 'SaaS / Web Apps', 'Automation', 'Recruitment Technology'], process: ['Discover', 'Architect', 'Prototype', 'Build', 'Integrate', 'Deploy', 'Improve'], kind: 'diagram' },
  'services/recruitment': { eyebrow: 'RECRUITMENT SERVICES', title: 'Talent that moves business forward.', copy: 'TalentPlex supports businesses with direct hire, contract staffing, executive search and recruitment support across the industries we know best.', items: ['Direct Hire', 'Contract Staffing', 'Contract-to-Hire', 'Executive Search', 'RPO / Recruitment Support'], process: ['Requirement', 'Search', 'Screen', 'Present', 'Interview', 'Offer', 'Hire'] },
  'services/recruitment-websites': { eyebrow: 'RECRUITMENT WEBSITE DESIGN', title: 'Websites built for recruitment businesses.', copy: 'We combine staffing experience with modern design and development to build websites around employers, candidates, jobs and real recruitment workflows.', items: ['Career Pages', 'Job Search', 'Job Detail Pages', 'Resume Upload', 'Employer Lead Capture', 'Candidate Registration', 'Recruiter Profiles', 'Job Alerts', 'ATS Integration', 'CRM Integration', 'Analytics', 'SEO Structure'], process: ['Visitor', 'Employer / Candidate', 'Lead / Application', 'ATS / CRM', 'Recruiter / BDM', 'Interview', 'Placement'], kind: 'light' },
  solutions: { eyebrow: 'SOLUTIONS', title: 'Solutions built around real business problems.', copy: 'Practical systems for the moments when standard tools no longer fit.', items: ['Custom Software', 'Recruitment Technology', 'Staffing Business Launch', 'Automation'], kind: 'diagram' },
  'solutions/custom-software': { eyebrow: 'CUSTOM SOFTWARE', title: <>Your software should fit your business.<br /><span className="gradient-text">Not the other way around.</span></>, copy: 'TalentPlex develops custom systems when standard software cannot match the way a business operates.', items: ['Custom CRM', 'ATS', 'Business Operations Platform', 'Client Portal', 'Candidate Portal', 'Workflow System', 'Reporting Platform', 'Internal Application', 'SaaS Platform', 'AI-Assisted Application'], process: ['Discovery', 'Workflow mapping', 'Architecture', 'UX', 'Development', 'Integration', 'QA', 'Deployment', 'Support'], kind: 'diagram' },
  'solutions/recruitment-technology': { eyebrow: 'RECRUITMENT TECHNOLOGY', title: 'Technology for modern recruitment operations.', copy: 'Connect leads, clients, jobs, candidates and placements in one clear operating architecture.', items: ['ATS', 'Recruitment CRM', 'Client Management', 'Candidate Management', 'Job Management', 'Submission Tracking', 'Interview Tracking', 'Placement Tracking', 'Recruiter Dashboard', 'Reporting', 'Automation'], process: ['Lead', 'Client', 'Job', 'Candidate', 'Submission', 'Interview', 'Offer', 'Placement'] },
  'solutions/staffing-launch': { eyebrow: 'STAFFING BUSINESS INFRASTRUCTURE', title: 'Start your staffing business with the infrastructure already thought through.', copy: 'TalentPlex helps build the digital, technology and operational foundation behind a modern recruitment company.', items: ['Brand', 'Website', 'Domain', 'Email', 'ATS', 'CRM', 'Calling', 'Lead Generation', 'Job Boards', 'Recruitment Workflow', 'Sales Workflow', 'Reporting', 'Templates', 'Automation', 'Analytics'], process: ['Foundation', 'Systems', 'Operations', 'Scale'], kind: 'diagram' },
  'solutions/automation': { eyebrow: 'AUTOMATION', title: 'Automate the repetitive. Keep the important work human.', copy: 'Connect triggers, actions and reporting without overstating what automation can do.', items: ['Workflow Automation', 'Lead Routing', 'Recruitment Automation', 'Email Workflows', 'CRM Automation', 'ATS Automation', 'Reporting Automation', 'Data Sync', 'API Integration', 'AI-Assisted Workflows'], process: ['Trigger', 'Route', 'Act', 'Review', 'Improve'] },
  products: { eyebrow: 'PRODUCTS', title: <>Products built from problems<br /><span className="gradient-text">we&apos;ve lived.</span></>, copy: 'TalentPlex develops its own software products alongside client services.', items: ['NimbussOS', 'Recruitment Operating System'], kind: 'product' },
  'products/nimbussos': { eyebrow: 'A TALENTPLEX PRODUCT', title: <>NimbussOS.<br /><span className="gradient-text">The operating system for modern staffing.</span></>, copy: 'Bring business development, CRM, ATS, outreach, jobs, candidates and recruitment operations into one connected system.', items: ['CRM', 'Lead Generation', 'Accounts', 'Contacts', 'Jobs', 'Candidates', 'Submissions', 'Interviews', 'Offers', 'Placements', 'Campaigns', 'Reports', 'Automation'], kind: 'product' },
  industries: { eyebrow: 'INDUSTRIES', title: 'Different industries. Different problems. Same focus on progress.', copy: 'Digital, technology and talent capabilities for businesses moving forward.', items: ['Technology', 'Staffing & Recruitment', 'Engineering', 'Manufacturing', 'Construction', 'Automotive', 'Energy', 'Supply Chain & Logistics', 'Finance & Accounting', 'Healthcare', 'Professional Services'] },
  work: { eyebrow: 'WORK', title: 'Things we&apos;re building.', copy: 'Honest product, concept and system work from the TalentPlex team.', items: ['NimbussOS — Internal Product', 'Recruitment Brand System — TalentPlex Concept', 'Staffing Workflow — System Concept'] },
  company: { eyebrow: 'COMPANY', title: 'TalentPlex exists at the intersection of technology and talent.', copy: 'We bring digital craft, technical thinking and recruitment understanding together to make progress practical.', items: ['Clarity', 'Ownership', 'Craft', 'Practicality', 'Progress'] },
  contact: { eyebrow: 'CONTACT', title: <>Let&apos;s talk about<br /><span className="gradient-text">what you&apos;re building.</span></>, copy: 'Tell us what you are trying to build, hire or make possible.' },
  privacy: { eyebrow: 'PRIVACY', title: 'Privacy Statement', copy: 'How TalentPlex Global LLC collects, uses and protects information submitted through this website.' },
};

const recruitmentIndustries = ['Engineering', 'Manufacturing', 'Construction', 'Automotive', 'Energy', 'Supply Chain & Logistics', 'Technology', 'Finance & Accounting', 'Healthcare', 'Professional Services'];

const seoTitles: Record<string, string> = { services: 'Services', 'services/digital': 'Digital Services', 'services/technology': 'Technology Services', 'services/recruitment': 'Recruitment Services', 'services/recruitment-websites': 'Recruitment Website Design', 'solutions/custom-software': 'Custom Software Development', 'solutions/recruitment-technology': 'Recruitment Technology Solutions', 'solutions/staffing-launch': 'Staffing Business Launch', 'solutions/automation': 'Workflow Automation', 'products/nimbussos': 'NimbussOS — Recruitment Operating System', contact: 'Contact TalentPlex', privacy: 'Privacy Statement' };
export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata { const key = params.slug.join('/'); const page = pages[key] ?? pages.services; const title = seoTitles[key] ?? (typeof page.title === 'string' ? page.title : 'TalentPlex'); return { title, description: page.copy, alternates: { canonical: `/${key}` }, openGraph: { title: `${title} | TalentPlex`, description: page.copy } }; }
export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug: slug.split('/') })); }

export default function InnerPage({ params }: { params: { slug: string[] } }) {
  const key = params.slug.join('/');
  const page = pages[key];
  if (!page) notFound();

  const deepKind =
    key === 'services/digital' ? 'digital' :
    key === 'services/recruitment' ? 'recruitment' :
    key === 'services/recruitment-websites' ? 'recruitment-websites' :
    key === 'solutions/automation' ? 'automation' :
    key === 'industries' ? 'industries' : null;

  if (key === 'services/recruitment') {
    const serviceCards = [
      ['DIRECT HIRE', 'Permanent hiring for roles that need the right long-term fit.', 'Focused search, screening and candidate presentation for specialized, professional and operational positions.'],
      ['CONTRACT STAFFING', 'Flexible hiring support for project and changing workforce needs.', 'Recruiting support for contract requirements where speed, qualification and continuity matter.'],
      ['CONTRACT-TO-HIRE', 'A practical path when you want flexibility before a permanent decision.', 'A hiring model that allows both sides to assess fit before moving into a permanent arrangement.'],
      ['EXECUTIVE SEARCH', 'Targeted search for leadership and hard-to-find talent.', 'Market mapping, direct outreach and careful qualification for leadership, specialist and high-impact roles.'],
      ['RPO / RECRUITMENT SUPPORT', 'Extra recruiting capacity when your internal team needs support.', 'Flexible sourcing, screening, pipeline development and coordination aligned to your hiring process.']
    ];
    const roleAreas = [
      ['Engineering', 'Mechanical, electrical, civil, manufacturing and technical roles.'],
      ['Manufacturing', 'Maintenance, operations, production, quality and plant-support hiring.'],
      ['Construction', 'Estimating, project management, field, engineering and specialty construction roles.'],
      ['Automotive', 'Technical, manufacturing, quality, operations and commercial hiring.'],
      ['Energy', 'Engineering, operations, project and specialist talent.'],
      ['Supply Chain & Logistics', 'Procurement, planning, warehouse, transportation and operations roles.'],
      ['Technology', 'Software, infrastructure, product, data and technology operations hiring.'],
      ['Finance & Accounting', 'Accounting, finance, audit and business operations roles.'],
      ['Healthcare', 'Non-clinical, operational and administrative hiring support.'],
      ['Professional Services', 'Professional, administrative and business-support functions.'],
      ['Legal', 'Attorneys, paralegals, legal operations, support and administrative roles.'],
      ['Food & Beverage', 'Operations, manufacturing, maintenance, quality, supply chain and commercial roles.'],
      ['Sales & Marketing', 'Business development, sales, account management, marketing and growth roles.'],
      ['Other Industries & Functions', 'These are core areas, not limits. We support hiring requirements across other industries and functions too.']
    ];
    const process = [
      ['01', 'Understand the requirement', 'Role scope, must-have experience, location, work model, compensation and hiring priorities.'],
      ['02', 'Build the search', 'Target the relevant market, channels and candidate profile instead of relying on a generic search.'],
      ['03', 'Screen and qualify', 'Review experience, motivation, availability and requirement fit before presentation.'],
      ['04', 'Present the right profiles', 'Share focused candidate submissions with clear context for faster review.'],
      ['05', 'Coordinate the process', 'Support interview scheduling, feedback, offer movement and candidate communication.'],
      ['06', 'Close and follow through', 'Stay involved through acceptance, joining and any agreed post-placement support.']
    ];
    return <main>
      <SiteHeader />
      <section className="recruitment-page-hero">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="eyebrow">RECRUITMENT SERVICES</div>
            <h1 className="display mt-5 max-w-4xl text-5xl font-semibold leading-[.96] sm:text-7xl">Hiring support built around <span className="gradient-text">the role you actually need.</span></h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">Direct hire, contract staffing, contract-to-hire, executive search and recruitment support across specialized, professional and operational roles.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="cta-primary inline-flex h-12 items-center gap-3 rounded-xl px-5 text-sm font-semibold text-white">Submit a Requirement <span>↗</span></a>
              <a href="#recruitment-services" className="inline-flex h-12 items-center gap-3 rounded-xl border border-white/20 px-5 text-sm font-semibold text-white">Explore Services <span>↓</span></a>
            </div>
          </div>
          <div className="recruitment-hero-panel">
            <div className="eyebrow">WHAT WE SUPPORT</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['Permanent Hiring','Contract Staffing','Executive Search','RPO Support','Specialized Roles','Multi-role Hiring'].map((item)=><div key={item} className="recruitment-hero-chip">{item}</div>)}
            </div>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-muted">Focused on clear requirements, relevant search and practical communication throughout the hiring process.</div>
          </div>
        </div>
      </section>

      <section id="recruitment-services" className="recruitment-detail-section light">
        <div className="container">
          <div className="eyebrow">OUR RECRUITMENT SERVICES</div>
          <h2 className="display mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">Different hiring needs require different search models.</h2>
          <p className="mt-5 max-w-2xl text-muted">We adapt the recruitment approach to the role, urgency, employment model and level of specialization.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {serviceCards.map(([label,title,copy])=><article key={label} className="recruitment-service-card"><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="recruitment-detail-section dark">
        <div className="container">
          <div className="eyebrow">INDUSTRIES & FUNCTIONS</div>
          <h2 className="display mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">Recruitment across technical, operational and professional functions.</h2>
          <p className="mt-5 max-w-2xl text-muted">Our focus is on understanding the role context well enough to search in the right market and speak to the right candidates.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roleAreas.map(([title,copy])=><article key={title} className="recruitment-industry-detail"><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="recruitment-detail-section light">
        <div className="container">
          <div className="eyebrow">HOW WE WORK</div>
          <h2 className="display mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">A clear process from requirement to hire.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {process.map(([number,title,copy])=><article key={number} className="recruitment-process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="recruitment-engagement-section">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="eyebrow">ENGAGEMENT</div>
            <h2 className="display mt-4 text-4xl font-semibold sm:text-6xl">Use us for one critical hire or as additional recruiting capacity.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Single Requirement','A focused search for one priority role.'],
              ['Multiple Openings','Coordinated recruiting support across several active requirements.'],
              ['Ongoing Hiring','Recruitment support for recurring or continuous hiring needs.'],
              ['Recruitment Support / RPO','Flexible support alongside your internal recruiting team.']
            ].map(([title,copy])=><div key={title} className="engagement-card"><strong>{title}</strong><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="recruitment-detail-section dark recruitment-why">
        <div className="container">
          <div className="eyebrow">WHY TALENTPLEX</div>
          <h2 className="display mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">Recruitment should feel focused, not noisy.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Requirement-led','We start with what the role actually needs before starting the search.'],
              ['Relevant search','We focus on candidate relevance instead of sending volume for the sake of activity.'],
              ['Clear communication','Candidates and clients need timely, practical updates throughout the process.'],
              ['Flexible support','The model can adapt to direct hire, contract, executive search or additional recruiting capacity.']
            ].map(([title,copy])=><article key={title} className="why-card"><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <div className="container text-center">
          <div className="eyebrow">HAVE A HIRING REQUIREMENT?</div>
          <h2 className="display mx-auto mt-5 max-w-4xl text-5xl font-semibold sm:text-7xl">Tell us the role. We&apos;ll start with the requirement.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted">Share the role, location, hiring model and what matters most. We&apos;ll take it from there.</p>
          <div className="mt-8"><CTA>Submit a Requirement</CTA></div>
        </div>
      </section>
      <SiteFooter />
    </main>;
  }

  if (key === 'contact') {
    return <main>
      <SiteHeader />
      <section className="contact-hero">
        <div className="container contact-grid grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <div className="eyebrow">CONTACT TALENTPLEX GLOBAL</div>
            <h1 className="display mt-5 max-w-3xl text-5xl font-semibold leading-[.98] sm:text-7xl">Let&apos;s talk about <span className="gradient-text">what&apos;s next.</span></h1>
            <p className="mt-6 max-w-xl text-lg text-muted">Tell us what you need across digital, technology, recruitment services or business systems. We&apos;ll route your enquiry to the right place.</p>
            <div className="contact-company-card mt-10">
              <div className="eyebrow">US OFFICE</div>
              <h2 className="contact-office-title mt-3">TALENTPLEX GLOBAL LLC</h2>
              <address className="mt-4 not-italic text-muted leading-7">
                5900 Balcones Drive, STE 100<br />
                Austin, Texas 78731<br />
                United States
              </address>
            </div>
          </div>
          <div className="contact-form-panel">
            <div className="eyebrow">START A CONVERSATION</div>
            <h2 className="display mt-4 text-3xl font-semibold sm:text-4xl">How can we help?</h2>
            <p className="mt-3 text-muted">Share a few details and we&apos;ll have the context needed to understand your enquiry.</p>
            <ContactFormLive />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>;
  }

  if (key === 'privacy') {
    return <main>
      <SiteHeader />
      <section className="legal-page">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">PRIVACY</div>
            <h1 className="display mt-5 text-5xl font-semibold sm:text-7xl">Privacy Statement</h1>
            <p className="mt-6 text-lg text-muted">Effective date: September 30, 2026</p>
          </div>
          <div className="legal-content mt-12 max-w-4xl">
            <section>
              <h2>1. Who we are</h2>
              <p>This website is operated by <strong>TALENTPLEX GLOBAL LLC</strong>, with a US office at 5900 Balcones Drive, STE 100, Austin, Texas 78731, United States.</p>
            </section>
            <section>
              <h2>2. Information we collect</h2>
              <p>We may collect information you choose to submit through our website, including your name, work email, company name, phone number, enquiry type and message. We may also collect limited technical information needed to operate and secure the website, such as browser, device and request information.</p>
            </section>
            <section>
              <h2>3. How we use information</h2>
              <p>We use submitted information to respond to enquiries, understand business requirements, provide requested information about our services or products, maintain business records, improve our website and services, and protect our systems from misuse or abuse.</p>
            </section>
            <section>
              <h2>4. Recruitment information</h2>
              <p>If you contact us about recruitment or staffing services, information you provide may be used to evaluate and respond to the relevant business or hiring requirement. Please do not submit sensitive personal information unless it is necessary for the specific enquiry.</p>
            </section>
            <section>
              <h2>5. Sharing of information</h2>
              <p>We do not sell personal information. We may share information with service providers that support our website, communications, hosting, security or business operations, and when required by law or necessary to protect our rights and systems.</p>
            </section>
            <section>
              <h2>6. Data retention</h2>
              <p>We retain information only for as long as reasonably necessary for the purpose for which it was collected, for legitimate business needs, or to meet legal and compliance obligations.</p>
            </section>
            <section>
              <h2>7. Security</h2>
              <p>We use reasonable administrative and technical safeguards designed to protect information submitted through this website. No internet-based system can be guaranteed to be completely secure.</p>
            </section>
            <section>
              <h2>8. Cookies and similar technologies</h2>
              <p>Our website may use essential cookies or similar technologies required for functionality, security and performance. If we introduce non-essential analytics or marketing cookies, we may provide additional notice or controls where required.</p>
            </section>
            <section>
              <h2>9. Your choices</h2>
              <p>You may contact us to ask about personal information you have submitted through this website or to request correction or deletion where applicable. Certain information may need to be retained when required by law or for legitimate business purposes.</p>
            </section>
            <section>
              <h2>10. Third-party websites</h2>
              <p>Our website may link to third-party websites, including NimbussOS. Their privacy practices are governed by their own policies, and this statement does not apply to third-party websites.</p>
            </section>
            <section>
              <h2>11. Changes to this statement</h2>
              <p>We may update this Privacy Statement from time to time. The effective date shown above indicates when this version became effective.</p>
            </section>
            <section>
              <h2>12. Contact</h2>
              <p>For privacy-related enquiries, use the contact form on our <a href="/contact">Contact page</a> and select the option that best matches your request.</p>
              <p className="mt-3"><strong>TALENTPLEX GLOBAL LLC</strong><br />5900 Balcones Drive, STE 100<br />Austin, Texas 78731<br />United States</p>
            </section>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>;
  }

  return <main>
    <SiteHeader />
    <PageHero eyebrow={page.eyebrow} title={page.title} copy={page.copy} light={page.kind === 'light'}>
      {page.kind === 'product' ? <ProductVisual /> : page.kind === 'diagram' ? <Diagram nodes={(page.items ?? []).slice(0, 8)} /> : <div className="inner-hero-orb" />}
    </PageHero>
    {deepKind && <DeepDive kind={deepKind} />}
    <>
      {page.items && <CardGrid title={key === 'work' ? 'Selected work' : key === 'services/recruitment' ? 'Recruitment Services' : 'Capabilities'} items={page.items} />}
      {key === 'services/recruitment' && <section id="industries-we-serve" className="section"><div className="container"><div className="eyebrow">INDUSTRIES WE SERVE</div><h2 className="display mt-5 max-w-3xl text-4xl font-semibold sm:text-6xl">Recruitment support across the sectors that keep business moving.</h2><p className="mt-5 max-w-2xl text-muted">Our recruitment services support specialized, operational and professional hiring across these core industries.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{recruitmentIndustries.map((industry) => <article key={industry} className="inner-card"><span className="eyebrow text-brand">INDUSTRY</span><h3 className="display mt-10 text-2xl font-semibold">{industry}</h3></article>)}</div></div></section>}
      {page.process && <Process items={page.process} />}
      {key === 'products/nimbussos' && <section className="section deep-plum"><div className="container"><ProductVisual /></div></section>}
      {key === 'company' && <section className="section"><div className="container"><div className="eyebrow">HOW WE WORK</div><h2 className="display mt-5 max-w-3xl text-4xl font-semibold sm:text-6xl">Make the next move with clarity.</h2><p className="mt-6 max-w-xl text-muted">We stay close to the problem, make decisions visible and build things that can keep moving after launch.</p></div></section>}
    </>
    <section className="section final-cta"><div className="container text-center"><div className="eyebrow">MAKE YOUR NEXT MOVE</div><h2 className="display mx-auto mt-5 max-w-3xl text-5xl font-semibold sm:text-7xl">Not sure where to start?</h2><p className="mx-auto mt-5 max-w-lg text-muted">Tell us what you&apos;re trying to build.</p><div className="mt-8"><CTA /></div></div></section>
    <SiteFooter />
  </main>;
}
