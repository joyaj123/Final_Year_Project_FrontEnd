const navItems = [
  { icon: "dashboard", label: "Dashboard", active: false },
  { icon: "handshake", label: "Pending Deals", active: false },
  { icon: "business", label: "Pending Companies", active: true, filled: true },
  { icon: "verified_user", label: "KYC Review", active: false },
  { icon: "history_edu", label: "Audit Logs", active: false },
  { icon: "settings", label: "Settings", active: false },
];

const companies = [
  {
    name: "Vanguard Equities Ltd.",
    reg: "29384-UK-2023",
    time: "Signed up 2h ago",
    country: "United Kingdom",
    badge: "Reviewing",
    initials: "V",
    selected: true,
  },
  {
    name: "Aura Capital Partners",
    reg: "SG-88219-X",
    time: "Signed up 5h ago",
    country: "Singapore",
    initials: "A",
  },
  {
    name: "Blue Horizon Real Estate",
    reg: "DE-1102-BH",
    time: "Signed up 1d ago",
    country: "Germany",
    initials: "B",
  },
  {
    name: "Summit Wealth Group",
    reg: "US-9918-WY",
    time: "Signed up 2d ago",
    country: "USA",
    initials: "S",
  },
];

const requiredDocs = [
  {
    icon: "description",
    title: "Certificate of Incorporation",
    meta: "PDF • 2.4 MB • Uploaded 2h ago",
  },
  {
    icon: "article",
    title: "Memorandum of Association",
    meta: "PDF • 5.1 MB • Uploaded 2h ago",
  },
  {
    icon: "assignment_ind",
    title: "Director KYC Passport",
    meta: "JPG • 1.2 MB • Uploaded 2h ago",
  },
  {
    icon: "account_balance",
    title: "Bank Reference Letter",
    meta: "PDF • 0.9 MB • Uploaded 2h ago",
  },
];

const complianceItems = [
  {
    label: "Local Registry",
    value: "Verified Link Found",
    tone: "text-secondary",
  },
  {
    label: "Sanction List",
    value: "No Matches (Clean)",
    tone: "text-secondary",
  },
  {
    label: "AML Risk Score",
    value: "Low (Tier 1)",
    tone: "text-primary",
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

export default function AdminPendingCompanies() {
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
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Icon
                name="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]"
              />
              <input
                type="text"
                placeholder="Search companies or registrations..."
                className="w-full bg-surface-container border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <Icon name="notifications" />
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

        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
          {/* Header section */}
          <section>
            <nav className="flex gap-2 text-xs font-medium text-on-surface-variant mb-4">
              <span>Admin</span>
              <span>/</span>
              <span>Verification Queue</span>
              <span>/</span>
              <span className="text-primary font-bold">Pending Companies</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-primary leading-tight">
                  Verification Queue
                </h1>
                <p className="text-on-surface-variant mt-2 max-w-2xl">
                  Review institutional applications for fractional asset ownership.
                  All approvals require verified incorporation documentation.
                </p>
              </div>

              <div className="bg-surface-container px-6 py-3 rounded-2xl border border-outline-variant/10 w-fit">
                <span className="block text-[10px] uppercase tracking-wider font-bold text-on-surface-variant mb-1">
                  Queue Health
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-primary">12</span>
                  <span className="text-xs text-secondary font-semibold bg-secondary-container/20 px-2 py-0.5 rounded-full">
                    Normal Latency
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Main grid */}
          <section className="grid grid-cols-12 gap-6">
            {/* Left column */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant px-1">
                Awaiting Review (4)
              </h2>

              {companies.map((company) => (
                <div
                  key={company.name}
                  className={
                    company.selected
                      ? "bg-surface-container-lowest p-5 rounded-2xl border-l-4 border-emerald-600 shadow-sm transition-all hover:bg-white cursor-pointer group"
                      : "bg-surface-container p-5 rounded-2xl transition-all hover:bg-surface-container-high cursor-pointer opacity-80 hover:opacity-100"
                  }
                >
                  {company.selected ? (
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-white font-bold text-lg">
                        {company.initials}
                      </div>
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full uppercase">
                        {company.badge}
                      </span>
                    </div>
                  ) : null}

                  {!company.selected ? (
                    <div className="mb-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-white font-bold text-lg">
                        {company.initials}
                      </div>
                      <div className="h-px flex-1 bg-outline-variant/20"></div>
                    </div>
                  ) : null}

                  <h3 className="font-bold text-lg text-primary">{company.name}</h3>
                  <p className="text-xs text-on-surface-variant mb-4">Reg: {company.reg}</p>

                  <div className="flex justify-between items-center text-[11px] font-medium text-on-surface-variant gap-2">
                    <span>{company.time}</span>
                    <span className="flex items-center gap-1 text-right">
                      <Icon name="public" className="text-[14px]" />
                      {company.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
              {/* Detail card */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(24,28,30,0.04)] border border-outline-variant/10">
                {/* Top */}
                <div className="p-8 border-b border-surface-container-high flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-extrabold text-primary mb-1">
                      Vanguard Equities Ltd.
                    </h2>
                    <p className="text-on-surface-variant flex items-center gap-2 text-sm">
                      <Icon name="schedule" className="text-sm" />
                      Submitted Oct 24, 2023 at 14:32 UTC
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
                      <Icon name="print" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
                      <Icon name="share" />
                    </button>
                  </div>
                </div>

                {/* Data */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                        Legal Entity Name
                      </label>
                      <p className="text-lg font-bold text-primary">
                        Vanguard Equities Limited Liability Company
                      </p>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                        Registration Number
                      </label>
                      <p className="text-lg font-bold text-primary">29384-UK-2023</p>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                        Tax ID / VAT
                      </label>
                      <p className="text-lg font-bold text-primary">GB 443 2190 55</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                        Registered Address
                      </label>
                      <p className="text-base font-medium text-primary">
                        22 Bishopsgate, London EC2N 4BQ,
                        <br />
                        United Kingdom
                      </p>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                        Contact Representative
                      </label>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center text-[10px] font-bold">
                          AT
                        </div>
                        <p className="text-sm font-semibold text-primary">
                          Alexander Thorne{" "}
                          <span className="text-on-surface-variant font-normal">
                            (Director)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="px-8 pb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                    Required Documentation
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requiredDocs.map((doc) => (
                      <div
                        key={doc.title}
                        className="group relative flex items-center gap-4 p-4 rounded-2xl bg-surface-container border border-transparent hover:border-emerald-600/30 transition-all cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
                          <Icon name={doc.icon} className="text-3xl" />
                        </div>

                        <div className="flex-1">
                          <p className="font-bold text-primary text-sm">{doc.title}</p>
                          <p className="text-xs text-on-surface-variant">{doc.meta}</p>
                        </div>

                        <Icon
                          name="visibility"
                          className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-8 bg-surface-container/50 border-t border-surface-container-high">
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Internal Verification Note
                      </label>
                      <textarea
                        placeholder="Add internal notes about this company review..."
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none min-h-[100px] resize-none"
                      />
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="px-6 py-3 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                          <Icon name="check_circle" />
                          Approve Company
                        </button>

                        <button className="px-6 py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-primary font-bold flex items-center justify-center gap-2 hover:bg-white transition-all">
                          <Icon name="video_call" />
                          Request Call
                        </button>
                      </div>

                      <button className="px-6 py-3 rounded-xl text-error font-bold flex items-center justify-center gap-2 hover:bg-error/5 transition-all w-fit">
                        <Icon name="cancel" />
                        Deny Application
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance card */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_8px_32px_rgba(24,28,30,0.04)] border border-outline-variant/10">
                <div className="flex justify-between items-center mb-6 gap-4">
                  <h3 className="font-bold text-primary text-lg">
                    Regional Compliance Context
                  </h3>
                  <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full uppercase">
                    United Kingdom (FCA)
                  </span>
                </div>

                <div className="h-48 bg-surface-container-high rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-transparent to-secondary/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
                      <div className="w-3 h-3 bg-emerald-600 rounded-full absolute top-0.5 left-0.5"></div>
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#0a2540_1px,_transparent_1px)] [background-size:22px_22px]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {complianceItems.map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-surface-container">
                      <span className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1">
                        {item.label}
                      </span>
                      <span className={`text-xs font-semibold ${item.tone}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}