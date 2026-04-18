import React from "react";

const sideNavItems = [
  { icon: "dashboard", label: "Dashboard", active: false },
  { icon: "handshake", label: "Pending Deals", active: false },
  { icon: "business", label: "Pending Companies", active: false },
  { icon: "verified_user", label: "KYC Review", active: false },
  { icon: "history_edu", label: "Audit Logs", active: true },
  { icon: "settings", label: "Settings", active: false },
];

const filterChips = [
  { label: "All Actions", active: true },
  { label: "Entity: DEAL", active: false },
  { label: "User: ADMIN", active: false },
  { label: "Status: CRITICAL", active: false },
];

const auditRows = [
  {
    date: "Oct 24, 2023",
    time: "14:22:15 UTC",
    action: "DEAL_APPROVED",
    actionClass: "bg-secondary-fixed text-on-secondary-fixed",
    entity: "DEAL",
    entityId: "#DL-992-XQ",
    userInitials: "JD",
    userInitialsClass: "bg-primary-fixed text-on-primary-fixed",
    userName: "James Dalton",
    userRole: "ADMIN",
  },
  {
    date: "Oct 24, 2023",
    time: "12:05:44 UTC",
    action: "KYC_REJECTED",
    actionClass: "bg-surface-container-high text-on-surface-variant",
    entity: "USER_KYC",
    entityId: "#USR-442-A1",
    userInitials: "SA",
    userInitialsClass: "bg-slate-200 text-slate-600",
    userName: "Sarah Al-Fayed",
    userRole: "ADMIN",
    striped: true,
  },
  {
    expanded: true,
    ip: "192.168.1.104",
    before: `{
  "status": "PENDING_REVIEW",
  "approved_by": null,
  "verified_at": null,
  "risk_score": "LOW"
}`,
    after: `{
  "status": "APPROVED",
  "approved_by": "USR_88219",
  "verified_at": "2023-10-24T14:22:15Z",
  "risk_score": "LOW"
}`,
  },
  {
    date: "Oct 23, 2023",
    time: "22:10:02 UTC",
    action: "FUNDS_RELEASED",
    actionClass: "bg-secondary-fixed text-on-secondary-fixed",
    entity: "TRANSACTION",
    entityId: "#TX-118-2C",
    userInitials: "SYS",
    userInitialsClass: "bg-slate-200 text-slate-600",
    userName: "Automated Engine",
    userRole: "SYSTEM",
  },
];

const stats = [
  {
    icon: "security",
    iconClass: "text-secondary bg-secondary/10",
    badge: "Secure",
    badgeClass: "text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full",
    title: "Failed Login Attempts",
    value: "24",
    suffix: "last 24h",
    valueClass: "text-primary",
  },
  {
    icon: "database",
    iconClass: "text-primary bg-primary/10",
    badge: "+12%",
    badgeClass: "text-[10px] font-bold text-primary-container/60 bg-primary-fixed/30 px-2 py-0.5 rounded-full",
    title: "Data Mutations",
    value: "1,842",
    suffix: "total items",
    valueClass: "text-primary",
  },
  {
    icon: "report",
    iconClass: "text-error bg-error/10",
    badge: "Alert",
    badgeClass: "text-[10px] font-bold text-error bg-error/10 px-2 py-0.5 rounded-full",
    title: "Critical Override Actions",
    value: "0",
    suffix: "active alerts",
    valueClass: "text-error",
  },
];

const mobileNavItems = [
  { icon: "dashboard", label: "Dashboard", active: false },
  { icon: "handshake", label: "Deals", active: false },
  { icon: "history_edu", label: "Audit", active: true },
  { icon: "settings", label: "Settings", active: false },
];

export default function AdminAuditLogs() {
  return (
    <div className="flex min-h-screen bg-surface text-on-surface">
      <aside className="hidden md:flex flex-col h-screen w-64 bg-slate-50 border-r border-slate-200/20 p-4 gap-2 sticky top-0">
        <div className="mb-8 px-2">
          <h1 className="text-lg font-black text-slate-900 tracking-tight">
            Fractional Admin
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
            Institutional Access
          </p>
        </div>

        <nav className="flex-1 space-y-1">
          {sideNavItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={
                item.active
                  ? "flex items-center gap-3 px-3 py-2 bg-white text-emerald-700 shadow-sm rounded-lg transition-all duration-100 scale-95 border border-slate-200/50"
                  : "flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-all duration-200 rounded-lg group"
              }
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
              <span className={item.active ? "text-sm font-semibold" : "text-sm font-medium"}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-200/50 pt-4">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all rounded-lg"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="text-sm font-medium">Log Out</span>
          </a>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="fixed top-0 w-full md:w-[calc(100%-16rem)] z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
          <div className="flex justify-between items-center h-16 px-8">
            <div className="flex items-center gap-4 flex-1">
              <span className="text-xl font-bold tracking-tight text-slate-900 md:hidden brand-font">
                Architect Admin
              </span>

              <div className="relative w-full max-w-md hidden sm:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search logs, entities, or users..."
                  className="w-full bg-surface-container border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-slate-500 hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>

              <button className="text-slate-500 hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>

              <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

              <button className="hidden lg:flex items-center gap-2 bg-primary-container text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all">
                Support
              </button>

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeDyRYb1blwc66PDpM6wB8Qo3bV4XVNlXKje8WBAJfvDt9IM8Jh4a26ERzuMUJT6bAM8ww4aTFwi4aqX9dBRuikM2CzCIP7MDuwBCWr0mkjbQFDbWUGtiBJ8eFtM5-Q6Q3F0Etu5Xps-plSflg7b8ALXwwEKT6sdtDy2D5unU1577WsqvX9ihqY46ezJqqFuGaA20KJ9Sa6vZmwtsNTYHImLyXbKhhkPV9uzDFvjOEDoeFUSvqja4Sp5WbICo25oIiGmtMBKdDZGjC"
                alt="Administrator Profile"
                className="h-8 w-8 rounded-full border border-slate-200 object-cover"
              />
            </div>
          </div>
        </header>

        <main className="mt-16 p-8 max-w-7xl mx-auto w-full space-y-8">
          <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight brand-font">
                Audit Logs
              </h2>
              <p className="text-on-surface-variant text-sm mt-1">
                Institutional record of all administrative and platform actions.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-sm font-semibold rounded-xl shadow-sm hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Export CSV
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary text-sm font-semibold rounded-xl shadow-sm hover:opacity-95 transition-all">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                Advanced Filters
              </button>
            </div>
          </section>

          <section className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filterChips.map((chip) => (
              <span
                key={chip.label}
                className={
                  chip.active
                    ? "px-4 py-1.5 bg-primary-container text-on-primary-container text-xs font-semibold rounded-full cursor-pointer whitespace-nowrap"
                    : "px-4 py-1.5 bg-surface-container-lowest border border-outline-variant/15 text-on-surface-variant text-xs font-medium rounded-full hover:bg-surface-container transition-all cursor-pointer whitespace-nowrap"
                }
              >
                {chip.label}
              </span>
            ))}
          </section>

          <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                      Timestamp
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                      Action
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                      Entity
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                      User
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-outline-variant/10">
                  {auditRows.map((row, index) =>
                    row.expanded ? (
                      <tr key={`expanded-${index}`} className="bg-surface-container-lowest">
                        <td className="px-8 py-0" colSpan={5}>
                          <div className="my-4 p-6 bg-primary-container rounded-2xl shadow-inner border border-white/5">
                            <div className="flex items-center justify-between mb-4 border-b border-on-primary-container/20 pb-3">
                              <span className="text-on-primary-container font-bold text-sm tracking-tight flex items-center gap-2 brand-font">
                                <span className="material-symbols-outlined text-sm">code</span>
                                Data Comparison & Metadata
                              </span>
                              <span className="text-[10px] font-mono text-on-primary-container bg-white/5 px-2 py-1 rounded">
                                IP: {row.ip}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-[10px] font-bold text-on-primary-container/60 uppercase tracking-widest mb-2">
                                  Before Change
                                </h5>
                                <pre className="bg-black/20 p-4 rounded-xl text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto">
                                  {row.before}
                                </pre>
                              </div>

                              <div>
                                <h5 className="text-[10px] font-bold text-on-primary-container/60 uppercase tracking-widest mb-2">
                                  After Change
                                </h5>
                                <pre className="bg-black/20 p-4 rounded-xl text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto">
                                  {row.after}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <tr
                        key={`row-${index}`}
                        className={
                          row.striped
                            ? "hover:bg-surface-container-lowest/50 transition-colors bg-surface-container-low/20"
                            : "hover:bg-surface-container-lowest/50 transition-colors"
                        }
                      >
                        <td className="px-6 py-5">
                          <div className="text-sm font-semibold text-primary">{row.date}</div>
                          <div className="text-[11px] text-on-surface-variant">{row.time}</div>
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold ${row.actionClass}`}
                          >
                            {row.action}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <div className="text-sm font-medium text-on-surface">{row.entity}</div>
                          <div className="text-[11px] font-mono text-on-surface-variant">
                            {row.entityId}
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${row.userInitialsClass}`}
                            >
                              {row.userInitials}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-on-surface">
                                {row.userName}
                              </div>
                              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-600">
                                {row.userRole}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-5 text-right">
                          <button className="text-primary text-xs font-bold hover:underline">
                            View Changes
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-surface-container-low/30 flex justify-between items-center border-t border-outline-variant/10">
              <span className="text-[11px] text-on-surface-variant font-medium">
                Showing 1 to 50 of 12,482 logs
              </span>

              <div className="flex gap-1">
                <button className="h-8 w-8 rounded-lg flex items-center justify-center border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="h-8 w-8 rounded-lg flex items-center justify-center bg-white border border-outline-variant/20 text-primary text-[11px] font-bold shadow-sm">
                  1
                </button>
                <button className="h-8 w-8 rounded-lg flex items-center justify-center border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant text-[11px] font-medium">
                  2
                </button>
                <button className="h-8 w-8 rounded-lg flex items-center justify-center border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant text-[11px] font-medium">
                  3
                </button>
                <span className="px-2 text-on-surface-variant self-center">...</span>
                <button className="h-8 w-8 rounded-lg flex items-center justify-center border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low/40 p-6 rounded-2xl border border-outline-variant/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`material-symbols-outlined p-2 rounded-lg ${item.iconClass}`}
                  >
                    {item.icon}
                  </span>
                  <span className={item.badgeClass}>{item.badge}</span>
                </div>

                <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">
                  {item.title}
                </h4>

                <div className={`mt-2 text-3xl font-black tracking-tight brand-font ${item.valueClass}`}>
                  {item.value}
                  <span className="text-sm font-medium text-on-surface-variant/60 ml-1">
                    {item.suffix}
                  </span>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-xl border-t border-slate-200/50 flex justify-around items-center h-16 z-50">
        {mobileNavItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.active
                ? "flex flex-col items-center gap-1 text-emerald-700"
                : "flex flex-col items-center gap-1 text-slate-500"
            }
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className={item.active ? "text-[10px] font-bold" : "text-[10px] font-medium"}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}