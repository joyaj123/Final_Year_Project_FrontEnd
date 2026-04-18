export default function AdminDashboard() {
  return (
    <div className="bg-surface text-on-surface flex">
      <aside className="h-screen w-64 border-r border-slate-200 bg-[#f3f4f6] flex flex-col p-4 gap-2 shrink-0">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">architecture</span>
            </div>
            <div>
             <h2 className="text-lg font-black text-slate-900 leading-tight">
                Fractional Admin
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                Institutional Access
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 bg-white text-emerald-700 shadow-sm rounded-lg transition-transform duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </a>

          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">handshake</span>
            <span className="font-medium text-sm">Pending Deals</span>
          </a>

          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">business</span>
            <span className="font-medium text-sm">Pending Companies</span>
          </a>

          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-medium text-sm">KYC Review</span>
          </a>

          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-medium text-sm">Audit Logs</span>
          </a>

          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium text-sm">Settings</span>
          </a>
        </nav>

        <div className="mt-auto border-t border-slate-200/50 pt-4">
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Log Out</span>
          </a>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative min-w-0 h-screen overflow-y-auto">
        <header className="sticky top-0 w-full z-50 h-16 px-8 flex justify-between items-center bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 manrope">
              Architect Admin
            </h1>

            <div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-1.5 w-80">
              <span className="material-symbols-outlined text-outline text-sm">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-outline w-full ml-2"
                placeholder="Search institutional assets..."
                type="text"
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

            <div className="h-6 w-[1px] bg-outline-variant mx-2"></div>

            <button className="px-5 py-2 bg-primary-container text-white rounded-xl text-sm font-semibold hover:bg-primary transition-all">
              Support
            </button>

            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                alt="professional administrator"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwM35ZVeBwdnZ0KzRmYQh6F-EnrE56DD2m6aRjTtgVTpz942djYFZ6d3TIUJxinLM7oDA2-hhkkXXEHK4e_PARrsDg44hMg6pkJWEjpmSG0oAd7AS8KEVDwwdWD9F2ZrRIvERAZoGGaVnDtIU8FAeUvd1c2OE2r7zUspF1R9brxJZO3oSvWuX8ZWauDNhe3pFCCMbdSZ1R6atMNZbdrnPaaUl4e-HCzVbPX9FVj9lhzHPTGl2nubS3xJpPxUqoRgb-KAbxyVZ-twl1"
              />
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-on-surface-variant text-sm font-medium tracking-wide">
                SYSTEM OVERVIEW
              </span>
              <h2 className="text-3xl font-extrabold text-primary manrope -mt-1">
                Performance Dashboard
              </h2>
            </div>

            <div className="flex gap-3">
              <div className="px-4 py-2 bg-surface-container-low rounded-xl flex items-center gap-2 text-on-surface-variant border border-outline-variant/10">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span className="text-sm font-medium">Oct 1 - Oct 31, 2023</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] flex flex-col gap-1 border border-outline-variant/5">
              <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Total Platform Volume
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-primary manrope">$142M</span>
                <span className="text-secondary text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
                  12.5%
                </span>
              </div>
              <div className="mt-4 w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[72%]"></div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] flex flex-col gap-1 border border-outline-variant/5">
              <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Total Users
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-primary manrope">12,480</span>
                <span className="text-secondary text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-[14px] mr-1">add</span>
                  842
                </span>
              </div>
              <div className="flex -space-x-2 mt-4 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  alt="user avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh1g1oH0ffnVIKjSyqOSwSkoavj_v6ZU8EMxpxkN3kdL_gMIYRQAaAL-Gg6QsUENAjb1cjCBqdT07FFwkWyOmAiIFvAzQpKU-QQRpwf_XEWqvNhLrYlPIr5i2LMOpSonE9126gMtmwj-RjRzARsNRjfSwRv9dwiDQxalvhJ4VcJBGR0np7ylUEjxDBCgNJJ113H_VCaiQ3BlTS1_nSVvrZvWp-Ny1tbhe2AhcpUV4dFRe-YnE5aYKVcpnxPqKUurN6GmhRBo6bMVvg"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  alt="user avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJyAbV22aALP-3SaADBDhBEiT59nonvitIONIBOmzVZ-3WkZGeRbJHFSVJqM020VKtq6x8yPaOwEyz-WBDa57Etvzygr_pSwQ0SIkZ6Ynke8z-CagUCfhAgVUPgB3-s1om5w4sXxibJWhQhMrkpr3GUn3BHdQLMU8FDS-jlwYABFzrHMRdZCVFQq5Kyn07I_yP4SAvemUP9PVbQVNEjGas9xEqgwacW38v1WxrabILQWx9eBND1QFv5uWAku-JAmrwsgLFBNFVUK0N"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  alt="user avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPvwXnUe_KHz4mWC8CggwNh9vfJY1SnAwXU_-A1TbCoJMdM0Hi0ZJP_HA-pL4-6Bw5S9aI1O2IkUtpufQzJoxkMpz3dbMJqYTQyjQauKwowih0xP8On-WN93Ao_UmtYjWejgtwdvW7Cpm5-o0cbFomE753uN-qLmJoQmnlAjp9vKEbYxwXmHSlZQd5v7-xx6AgrKEjhDF4oQKr_TTHxQAR5AuZzx5n4o0LKNoIAlIArvRUao31QJyfP3WkvVH9AKn-e4Tzf0h8-MC"
                />
                <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-surface-container text-[10px] font-bold">
                  +12k
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] flex flex-col gap-1 border border-outline-variant/5">
              <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Active Deals
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-primary manrope">156</span>
                <span className="text-on-surface-variant text-xs font-medium">8 new this week</span>
              </div>
              <div className="mt-4 flex gap-1">
                <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                <div className="h-1 flex-1 bg-surface-container rounded-full"></div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] flex flex-col gap-1 border border-outline-variant/5">
              <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Pending Approvals
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-primary manrope">24</span>
                <span className="text-error text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-[14px] mr-1">priority_high</span>
                  Action Required
                </span>
              </div>
              <div className="mt-4">
                <span className="px-2 py-1 bg-error-container text-on-error-container rounded text-[10px] font-bold tracking-wider">
                  CRITICAL
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] border border-outline-variant/5 min-h-[400px] flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-xl font-bold text-primary manrope">Platform Growth Trends</h3>
                  <p className="text-sm text-on-surface-variant">
                    Monthly volume and user acquisition metrics
                  </p>
                </div>

                <div className="flex bg-surface-container p-1 rounded-lg">
                  <button className="px-4 py-1 text-xs font-bold text-primary bg-white rounded-md shadow-sm">
                    Volume
                  </button>
                  <button className="px-4 py-1 text-xs font-medium text-on-surface-variant hover:text-primary transition-colors">
                    Users
                  </button>
                </div>
              </div>

              <div className="flex-1 relative flex items-end gap-4 px-4 h-64">
                <div className="group relative flex-1 bg-primary/5 hover:bg-primary/10 transition-colors rounded-t-lg h-[40%] flex flex-col justify-end items-center">
                  <div className="w-full bg-primary h-[80%] rounded-t-lg opacity-40"></div>
                  <span className="absolute -bottom-8 text-[10px] font-bold text-on-surface-variant">
                    JAN
                  </span>
                </div>
                <div className="group relative flex-1 bg-primary/5 hover:bg-primary/10 transition-colors rounded-t-lg h-[55%] flex flex-col justify-end items-center">
                  <div className="w-full bg-primary h-[85%] rounded-t-lg opacity-50"></div>
                  <span className="absolute -bottom-8 text-[10px] font-bold text-on-surface-variant">
                    FEB
                  </span>
                </div>
                <div className="group relative flex-1 bg-primary/5 hover:bg-primary/10 transition-colors rounded-t-lg h-[45%] flex flex-col justify-end items-center">
                  <div className="w-full bg-primary h-[75%] rounded-t-lg opacity-60"></div>
                  <span className="absolute -bottom-8 text-[10px] font-bold text-on-surface-variant">
                    MAR
                  </span>
                </div>
                <div className="group relative flex-1 bg-primary/5 hover:bg-primary/10 transition-colors rounded-t-lg h-[70%] flex flex-col justify-end items-center">
                  <div className="w-full bg-primary h-[90%] rounded-t-lg opacity-70"></div>
                  <span className="absolute -bottom-8 text-[10px] font-bold text-on-surface-variant">
                    APR
                  </span>
                </div>
                <div className="group relative flex-1 bg-primary/5 hover:bg-primary/10 transition-colors rounded-t-lg h-[60%] flex flex-col justify-end items-center">
                  <div className="w-full bg-primary h-[82%] rounded-t-lg opacity-80"></div>
                  <span className="absolute -bottom-8 text-[10px] font-bold text-on-surface-variant">
                    MAY
                  </span>
                </div>
                <div className="group relative flex-1 bg-primary/5 hover:bg-primary/10 transition-colors rounded-t-lg h-[85%] flex flex-col justify-end items-center">
                  <div className="w-full bg-primary h-[95%] rounded-t-lg"></div>
                  <span className="absolute -bottom-8 text-[10px] font-bold text-on-surface-variant">
                    JUN
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] border border-outline-variant/5">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-error">bolt</span>
                  <h3 className="text-lg font-bold text-primary manrope">Critical Actions</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-surface rounded-xl flex gap-4 items-start border-l-4 border-error">
                    <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-error text-lg">description</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-on-surface leading-snug">
                        Audit required for Skyline Plaza Deal
                      </h4>
                      <p className="text-[11px] text-on-surface-variant mt-1">
                        Submission overdue by 48 hours
                      </p>
                      <button className="mt-3 text-xs font-bold text-primary underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all">
                        RESOLVE NOW
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-surface rounded-xl flex gap-4 items-start border-l-4 border-secondary">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        domain_verification
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-on-surface leading-snug">
                        New High-Value Company Verification
                      </h4>
                      <p className="text-[11px] text-on-surface-variant mt-1">
                        Vertex Corp requested verification
                      </p>
                      <button className="mt-3 text-xs font-bold text-primary underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all">
                        APPROVE
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-surface rounded-xl flex gap-4 items-start border-l-4 border-primary">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-lg">policy</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-on-surface leading-snug">
                        Policy Update Acknowledgement
                      </h4>
                      <p className="text-[11px] text-on-surface-variant mt-1">
                        Pending review from 14 partners
                      </p>
                      <button className="mt-3 text-xs font-bold text-primary underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all">
                        SEND REMINDERS
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  className="group bg-primary-container p-5 rounded-xl flex flex-col gap-3 transition-all hover:scale-[1.02]"
                  href="#"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-2xl">
                    history_edu
                  </span>
                  <span className="text-sm font-bold text-white">Audit Logs</span>
                </a>

                <a
                  className="group bg-surface-container-high p-5 rounded-xl flex flex-col gap-3 transition-all hover:scale-[1.02]"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-2xl">group</span>
                  <span className="text-sm font-bold text-primary">User Management</span>
                </a>

                <a
                  className="group col-span-2 bg-surface p-5 rounded-xl flex items-center justify-between border border-outline-variant/10 transition-all hover:bg-surface-container"
                  href="#"
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      settings
                    </span>
                    <span className="text-sm font-bold text-on-surface">
                      Global Platform Settings
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 pb-12">
            <div className="col-span-12 lg:col-span-12 bg-surface-container-low p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-primary manrope">
                  Institutional Grade Asset Performance
                </h3>
                <button className="text-sm font-bold text-secondary flex items-center gap-1">
                  VIEW FULL REPORT{" "}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative rounded-xl overflow-hidden h-48 group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="modern skyscraper"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzpf7iWO8eIdiz-uYi2p8ldQ_K2dOglRZpIoQ5rhYvR_rTYGHG2zlUVFqh-ncVUO_QtfRIOYG1AVug55ERpfJYDkDmtuA6VcyTyfafHoSkpj-jHpq4vAgs1LFPgtcIM7cZ0eSxAWgVgpD_SgoM97r8X77ULZU3Bz34NJjxGMmi-XsbQ9d6MRL993ADSBzUv8zr5zizr2YUx-HE8QnOFSooVfMlaUvdaIfAfyn4cLN9Rbo-8OLV00IMELsVURcZFKD65LBLzGbR5IJf"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[10px] text-secondary-fixed-dim font-bold tracking-widest uppercase">
                      Real Estate
                    </span>
                    <h4 className="text-white font-bold manrope">Skyline Commercial Hub</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white/60 text-xs">AUM: $24.5M</span>
                      <span className="text-secondary-fixed text-xs font-bold">+4.2%</span>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden h-48 group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="warehouse interior"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhMXsjGw5oTn2a1S12-Vtc9U7jYSpzKaYeMaXcSmX3_tMYomgoz90ZkuEaKyUeaxFxS6pd9gg3WzSbfD6cKsquy0j_5zlaxslhcaRom4ELLO6LZL0iSmtV4R-EAvVRf_fJ2H2_ZGWWlFjy2EdS4Hx_DCcTRV5HUajc8MLHws3dMHZQxIn_LPSaOjMIwANY6JRmeN66xSXWfUxNj6_NB6FYmGNZ_d6Qimdsr8l9eAoZQSaxN2KE_boe67h9E96x68F16ex6MOLexjQe"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[10px] text-secondary-fixed-dim font-bold tracking-widest uppercase">
                      Industrial
                    </span>
                    <h4 className="text-white font-bold manrope">Logistics Center North</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white/60 text-xs">AUM: $18.2M</span>
                      <span className="text-secondary-fixed text-xs font-bold">+2.8%</span>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden h-48 group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="data center servers"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ElAfVoAzzIK2fprBK_y-H_o0oLOE0el8MYRD-oG4KYAJMgNa5S0UogWBbFKjaUn2gYbbYcVAmOztkL8gSg83MJlDkieGvQSscJZ8dU6KVwyifc1k3_xxmWiunUwkxOwCrSOMAnL08gihTeX_DzdxCGinOHamLv32Qiwjp6moH4Ca0iZ3wS0jiTi83U1hSioTipK52SP6Yz3SYLRE7tvUgkx5RlCtExe-2gj0yZ0X-hjYS2TT0cKThCCMWcxZ2drIAO3H0Ud2c9a3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[10px] text-secondary-fixed-dim font-bold tracking-widest uppercase">
                      Technology
                    </span>
                    <h4 className="text-white font-bold manrope">Data Core Fractional Fund</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white/60 text-xs">AUM: $32.1M</span>
                      <span className="text-secondary-fixed text-xs font-bold">+6.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}