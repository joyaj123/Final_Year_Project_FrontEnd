import React from "react";

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: false },
  { icon: "handshake", label: "Pending Deals", active: false },
  { icon: "business", label: "Pending Companies", active: false },
  { icon: "verified_user", label: "KYC Review", active: true },
  { icon: "history_edu", label: "Audit Logs", active: false },
  { icon: "settings", label: "Settings", active: false },
];

const queueItems = [
  {
    id: "Investor #8821",
    name: "Alexander Pierce",
    time: "12 mins ago",
    document: "Passport",
    badge: "High Match",
    badgeClass:
      "bg-secondary-fixed text-on-secondary-fixed-variant",
    active: true,
  },
  {
    id: "Investor #8819",
    name: "Sarah Montgomery",
    time: "45 mins ago",
    document: "Drivers License",
    badge: "Review Required",
    badgeClass: "bg-error-container text-on-error-container",
    active: false,
  },
  {
    id: "Investor #8815",
    name: "David Richardson",
    time: "2 hrs ago",
    document: "Passport",
    badge: null,
    badgeClass: "",
    active: false,
  },
];

const insights = [
  {
    title: "AML Check",
    value: "Low Risk",
    description: "No PEP or sanction matches found in global databases.",
  },
  {
    title: "Metadata",
    value: "Authentic",
    description: "Original EXIF data matches capture device fingerprint.",
  },
  {
    title: "Jurisdiction",
    value: "United Kingdom",
    description: "Tier 1 jurisdiction. No enhanced due diligence required.",
  },
];

export default function AdminKYCReview() {
  return (
    <div className="flex min-h-screen bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <aside className="hidden md:flex flex-col h-screen w-64 border-r border-slate-200/20 bg-slate-50 p-4 gap-2 sticky top-0 shrink-0">
        <div className="mb-8 px-2">
          <h1 className="text-lg font-black text-slate-900 leading-tight">
            Fractional Admin
          </h1>
          <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest opacity-60">
            Institutional Access
          </p>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={
                item.active
                  ? "flex items-center gap-3 px-3 py-2 bg-white text-emerald-700 shadow-sm rounded-lg active:scale-95 duration-100"
                  : "flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg group"
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t border-outline-variant/10">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium">Log Out</span>
          </a>
        </div>
      </aside>

      <main className="flex-1 min-w-0 bg-surface flex flex-col">
        <header className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-xl md:static md:w-auto">
          <div className="flex justify-between items-center h-16 px-8 w-full">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 brand-font">
                  Architect Admin
                </span>
              </div>

              <div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-1.5 gap-2 border border-outline-variant/20">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search KYC Queue..."
                  className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-on-surface-variant/60 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>

              <div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>

              <button className="bg-primary text-on-primary px-4 py-1.5 rounded-xl text-sm font-semibold shadow-sm hover:opacity-90 transition-all">
                Support
              </button>

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWp2o2CZi933fMY4ZkgWpm_4uYleq3QLIqK6JUHbhiAhV_HTB3FuubyJxEEUJpws90rN0IhMm45Kruris6BfHuTn2r_hPIDyCD-ScYFKPSLcNRdkjitUlPBkqeL2x_hPa_ykyrMsk6b0HdACR3TNKiH0Iz8ThXPqqESPK2Rgg1SP8mR2d9ScH1ne5JkDkzz9lbMnzhTk0epooC87xMaPCKLVrhCgwxolz35lu9_vMt9ar0ITUFZmuNrMUC237RzADFfABwpFN2N3Dq"
                alt="Administrator Profile"
                className="w-8 h-8 rounded-full object-cover border border-outline-variant/30"
              />
            </div>
          </div>
        </header>

        <div className="p-8 mt-16 md:mt-0 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8">
          <section className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold tracking-tight text-primary brand-font uppercase">
                Pending Queue
              </h2>
              <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded-md text-xs font-bold">
                14 NEW
              </span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
              {queueItems.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.active
                      ? "bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-emerald-600 cursor-pointer"
                      : "bg-surface-container-low p-4 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer group"
                  }
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-on-surface-variant/70 tracking-widest uppercase">
                      {item.id}
                    </p>

                    {item.badge && (
                      <span
                        className={`${item.badgeClass} px-2 py-0.5 rounded-full text-[10px] font-black uppercase`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="font-bold text-primary text-base">{item.name}</p>

                  <div className="flex items-center gap-2 mt-1 text-xs text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      timer
                    </span>
                    {item.time}
                    <span className="mx-1">•</span>
                    {item.document}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col border border-outline-variant/10">
              <div className="p-6 bg-primary text-on-primary flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined">
                      shield_person
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-none">
                      Reviewing: Alexander Pierce
                    </h3>
                    <p className="text-on-primary-container text-xs mt-1 font-medium">
                      ID Verified via AI Verification Engine
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-sm font-black flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">
                      verified
                    </span>
                    MATCHED 98%
                  </div>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">
                      Primary Document
                    </h4>
                    <span className="text-xs font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded">
                      Passport
                    </span>
                  </div>

                  <div className="relative group aspect-[1.5/1] bg-surface-container rounded-xl overflow-hidden border border-outline-variant/30">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5to1jV0bRGC9w7X5XJ4FA3W4W2MNR-EiKZKnc-Y3agbcHzfVPRMwJKlEQcNFCUx-m3hSGq6W0uFIDvhznh2XQLSFxHJImW87qF9cTxMRfismqZ6bX3kLzRtCX3MoJy5gFg_-x1ZfQygrnZAI_rORfEx_1YL4DGGDrmMviI5nEQMgwDAg8xIdP4ZQ7ZfdKfWCPHwXysYL6DE4ypz3AhvpUk3FLd-eBq9b7Dmi4t8hSNqSg-Nmh_MR_ApSac4x5Fy15MYnGGXWG8YYZ"
                      alt="Identity Document Preview"
                      className="w-full h-full object-cover grayscale opacity-90 transition-all group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity backdrop-blur-[2px]">
                      <button className="bg-white text-primary px-4 py-2 rounded-full font-bold text-xs shadow-xl flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">
                          zoom_in
                        </span>
                        INSPECT
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl space-y-2">
                    <div className="flex justify-between text-xs font-medium border-b border-outline-variant/10 pb-2">
                      <span className="text-on-surface-variant">Name on ID</span>
                      <span className="text-primary font-bold">
                        ALEXANDER PIERCE
                      </span>
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-on-surface-variant">
                        Document ID
                      </span>
                      <span className="text-primary font-bold">L82921102</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">
                      Liveness Check
                    </h4>
                    <span className="text-xs font-bold text-secondary bg-secondary-container px-2 py-0.5 rounded">
                      Pass
                    </span>
                  </div>

                  <div className="relative aspect-[1.5/1] bg-surface-container rounded-xl overflow-hidden border border-outline-variant/30">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz9xrr7p_Ui0c3L0m_Y4bNm47rqn_JJakF1lkyiSbO9tDo994g4NE6OuG_AmCb92bjmooamhtrXQDyewgREhS0NPsZbiS9YkahKttCbIz9slMIfq68qe_qAwvHW9dQc7g1ZMy_3vfi0e4k6IrhL_RmWtvX7r720DNYsfYH8p82LTrqed1lHkJLwdl64OLv532lzJfQ_xhIwVHmDT6YfbTrZXrsMIpVqNP46dMlduxCymU4vC1h6DiQL_IcJdvOe5xq5On9QeJfv4LA"
                      alt="User Selfie Comparison"
                      className="w-full h-full object-cover grayscale transition-all"
                    />

                    <div className="absolute top-4 right-4 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full p-1 shadow-lg">
                      <span className="material-symbols-outlined text-base">
                        check_circle
                      </span>
                    </div>

                    <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex justify-between items-end">
                        <div className="w-1/2 h-1 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-[98%] h-full bg-secondary-fixed-dim"></div>
                        </div>
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter">
                          AI Match 98%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl space-y-2">
                    <div className="flex justify-between text-xs font-medium border-b border-outline-variant/10 pb-2">
                      <span className="text-on-surface-variant">Face Match</span>
                      <span className="text-secondary font-black">
                        98.2% CONFIDENCE
                      </span>
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-on-surface-variant">Name Check</span>
                      <span className="text-secondary font-black">
                        EXACT MATCH
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface-container-low/50 border-t border-outline-variant/20 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  <button className="bg-error text-on-error px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-error/90 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      cancel
                    </span>
                    Reject (Invalid Document)
                  </button>

                  <button className="bg-surface-container-highest text-on-surface px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-surface-dim transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      error_outline
                    </span>
                    Reject (Poor Quality)
                  </button>
                </div>

                <button className="bg-secondary text-on-secondary px-10 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2 bg-gradient-to-br from-secondary to-on-secondary-fixed-variant">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Approve KYC
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10"
                >
                  <h5 className="text-[10px] font-black uppercase text-on-surface-variant/60 tracking-widest mb-2">
                    {item.title}
                  </h5>
                  <p className="text-xl font-bold text-primary brand-font">
                    {item.value}
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}