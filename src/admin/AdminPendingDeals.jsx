const navItems = [
  { icon: "dashboard", label: "Dashboard", active: false },
  { icon: "handshake", label: "Pending Deals", active: true, filled: true },
  { icon: "business", label: "Pending Companies", active: false },
  { icon: "verified_user", label: "KYC Review", active: false },
  { icon: "history_edu", label: "Audit Logs", active: false },
  { icon: "settings", label: "Settings", active: false },
];

const documents = [
  {
    icon: "description",
    title: "Pitch Deck v2.4",
    meta: "PDF • 12.4 MB • Updated 2 days ago",
  },
  {
    icon: "table_chart",
    title: "3-Year Financial Model",
    meta: "XLSX • 4.1 MB • Updated 5 days ago",
  },
];

const teamMembers = [
  {
    initials: "EV",
    name: "Elena Vance",
    role: "Managing Partner, Azure Fund",
  },
  {
    initials: "MT",
    name: "Marcus Thorne",
    role: "Head of Risk Analysis",
  },
];

const pendingDeals = [
  {
    id: "#DEAL-1002-LD",
    initials: "LD",
    name: "Lakeside Residential Portfolio",
    targetRaise: "$12,450,000",
    type: "EQUITY",
    submitted: "Oct 24, 2023",
    status: "PENDING",
  },
  {
    id: "#DEAL-1005-NY",
    initials: "NY",
    name: "NYC Loft Tech Hub",
    targetRaise: "$8,200,000",
    type: "EQUITY",
    submitted: "Oct 26, 2023",
    status: "PENDING",
  },
  {
    id: "#DEAL-1008-CH",
    initials: "CH",
    name: "Chesapeake Solar Farm",
    targetRaise: "$4,100,000",
    type: "DEBT",
    submitted: "Oct 28, 2023",
    status: "PENDING",
  },
];

function Icon({ name, className = "", filled = false, weight = 400 }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}

export default function PendingDealsReview() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-on-surface flex">
      {/* Sidebar */}
      <aside className="h-screen w-64 border-r border-slate-200 bg-[#f3f4f6] flex flex-col p-4 gap-2 shrink-0 sticky top-0">
        <div className="mb-8 px-2">
          <div>
            <h2 className="text-lg font-black text-slate-900 leading-tight">
              Fractional Admin
            </h2>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
              Institutional Access
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={
                item.active
                  ? "flex items-center gap-3 px-3 py-2.5 bg-white text-emerald-700 shadow-sm rounded-lg transition-transform duration-200"
                  : "flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
              }
            >
              <Icon
                name={item.icon}
                filled={item.filled}
                className={item.active ? "text-emerald-700" : ""}
              />
              <span className="font-medium text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-200/50 pt-4">
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
            href="#"
          >
            <Icon name="logout" />
            <span className="font-medium text-sm">Log Out</span>
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Topbar */}
        <header className="sticky top-0 z-50 h-16 px-8 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Pending Deals Review
            </h1>
            <span className="text-sm font-medium text-on-surface-variant">
              12 items awaiting action
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <Icon name="notifications" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-secondary border border-white"></span>
            </button>

            <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <Icon name="help_outline" />
            </button>

            <button className="px-5 py-2 bg-primary-container text-white rounded-xl text-sm font-semibold hover:bg-primary transition-all">
              Support
            </button>

            <div className="w-9 h-9 rounded-full overflow-hidden border border-outline-variant bg-primary-container flex items-center justify-center text-white text-xs font-bold">
              AN
            </div>
          </div>
        </header>

        <div className="p-8 space-y-10">
          {/* Focused card */}
          <section className="bg-surface-container-lowest rounded-2xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] border border-outline-variant/10 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-container via-primary to-primary-container px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon name="apartment" className="text-white text-2xl" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white leading-tight">
                    Azure Data Center
                  </h2>
                  <p className="text-white/70 text-sm">Deal ID: #DEAL-992-AZ</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">
                  High Priority
                </span>
                <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-semibold uppercase">
                  Equity
                </span>
              </div>
            </div>

            <div className="p-8 grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 lg:col-span-8">
                <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-on-surface-variant mb-6">
                  Financial Overview
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-surface-container-low p-6 rounded-2xl">
                    <p className="text-sm text-on-surface-variant mb-2">Target Raise</p>
                    <p className="text-2xl font-extrabold text-primary">$5,000,000</p>
                  </div>

                  <div className="bg-surface-container-low p-6 rounded-2xl">
                    <p className="text-sm text-on-surface-variant mb-2">Minimum Ticket</p>
                    <p className="text-2xl font-extrabold text-primary">$25,000</p>
                  </div>

                  <div className="bg-surface-container-low p-6 rounded-2xl">
                    <p className="text-sm text-on-surface-variant mb-2">Projected IRR</p>
                    <p className="text-2xl font-extrabold text-secondary">18.4%</p>
                  </div>
                </div>

                <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-on-surface-variant mb-4">
                  Underwriting Documents
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <div
                      key={doc.title}
                      className="group flex items-center justify-between p-5 bg-white border border-outline-variant/20 rounded-xl hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon name={doc.icon} className="text-primary" />
                        <div>
                          <p className="text-sm font-bold text-on-surface">{doc.title}</p>
                          <p className="text-xs text-on-surface-variant">{doc.meta}</p>
                        </div>
                      </div>

                      <Icon
                        name="download"
                        className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <div className="bg-surface-container-low p-6 rounded-2xl">
                  <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-on-surface-variant mb-5">
                    Management Team
                  </h3>

                  <div className="space-y-4">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-primary-container text-white flex items-center justify-center text-xs font-bold shadow-sm">
                          {member.initials}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">{member.name}</p>
                          <p className="text-xs text-on-surface-variant">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container-low p-6 rounded-2xl">
                  <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-on-surface-variant mb-5">
                    Review Decision
                  </h3>

                  <textarea
                    rows={4}
                    placeholder="Provide reason for rejection or flag for info..."
                    className="w-full bg-white border border-outline-variant/20 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary resize-none placeholder:text-on-surface-variant/50"
                  />

                  <div className="mt-4 space-y-3">
                    <button className="w-full bg-secondary text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                      Approve Deal
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-white border border-error text-error py-2.5 rounded-xl text-sm font-semibold hover:bg-error/5 transition-colors">
                        Reject Deal
                      </button>
                      <button className="bg-white border border-outline text-primary py-2.5 rounded-xl text-sm font-semibold hover:bg-surface transition-colors">
                        Flag for Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Table */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-extrabold text-primary">Pending Queue</h2>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-surface-container-low rounded-xl text-sm font-semibold text-on-surface-variant flex items-center gap-2 border border-outline-variant/10">
                  <Icon name="filter_list" className="text-sm" />
                  Filter
                </button>
                <button className="px-4 py-2 bg-surface-container-low rounded-xl text-sm font-semibold text-on-surface-variant flex items-center gap-2 border border-outline-variant/10">
                  <Icon name="sort" className="text-sm" />
                  Sort
                </button>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-[0_8px_32px_rgba(24,28,30,0.04)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-outline-variant/10">
                      <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                        Deal ID
                      </th>
                      <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                        Asset Name
                      </th>
                      <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant text-right">
                        Target Raise
                      </th>
                      <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                        Type
                      </th>
                      <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                        Submitted
                      </th>
                      <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant text-center">
                        Status
                      </th>
                      <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {pendingDeals.map((deal) => (
                      <tr
                        key={deal.id}
                        className="border-b last:border-b-0 border-outline-variant/5 hover:bg-surface-container-low transition-colors"
                      >
                        <td className="px-6 py-5 text-xs font-mono text-on-surface-variant">
                          {deal.id}
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center text-[10px] font-bold">
                              {deal.initials}
                            </div>
                            <span className="font-semibold text-sm text-on-surface">
                              {deal.name}
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-5 text-right font-bold text-lg text-primary">
                          {deal.targetRaise}
                        </td>

                        <td className="px-6 py-5 text-sm text-on-surface-variant">
                          {deal.type}
                        </td>

                        <td className="px-6 py-5 text-sm text-on-surface-variant">
                          {deal.submitted}
                        </td>

                        <td className="px-6 py-5 text-center">
                          <span className="inline-flex px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
                            {deal.status}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <button className="bg-primary-container text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary transition-colors">
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between">
                <p className="text-sm text-on-surface-variant">
                  Showing 3 of 12 pending deals
                </p>

                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                    <Icon name="chevron_left" className="text-sm" />
                  </button>

                  <button className="w-9 h-9 rounded-lg bg-primary-container text-white text-sm font-bold">
                    1
                  </button>

                  <button className="w-9 h-9 rounded-lg border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container transition-colors text-sm">
                    2
                  </button>

                  <button className="w-9 h-9 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                    <Icon name="chevron_right" className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Floating button */}
        <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary-container text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
          <Icon name="add" className="text-2xl" weight={600} />
        </button>
      </main>
    </div>
  );
}