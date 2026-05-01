import { Link } from "react-router-dom";

export default function ProfileSettings() {
  return (
    <div className="bg-surface text-on-surface flex">
      <aside className="h-screen w-64 border-r border-slate-200 bg-[#f3f4f6] flex flex-col p-4 gap-2 shrink-0">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">
                account_balance_wallet
              </span>
            </div>

            <div>
              <h2 className="text-lg font-black text-slate-900 leading-tight">
                Investor Workplace
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                Investor Access
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </Link>

          <Link
            to="/exploredeals"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">explore</span>
            <span className="font-medium text-sm">Explore Deals</span>
          </Link>

          <Link
            to="/portfolio"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
            <span className="font-medium text-sm">Portfolio</span>
          </Link>

          <Link
            to="/wallet"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">account_balance</span>
            <span className="font-medium text-sm">Wallet</span>
          </Link>

          <Link
            to="/profilesetting"
            className="flex items-center gap-3 px-3 py-2.5 bg-white text-emerald-700 shadow-sm rounded-lg transition-transform duration-200"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="font-medium text-sm">Profile</span>
          </Link>
        </nav>

        <div className="mt-auto border-t border-slate-200/50 pt-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Log Out</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative min-w-0 h-screen overflow-y-auto">
        <header className="sticky top-0 w-full z-50 h-16 px-8 flex justify-between items-center bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 manrope">
              Investor Workspace
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>

            <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>

           
          </div>
        </header>

        <div className="p-8">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold headline-font text-primary tracking-tighter">
              Investor Settings
            </h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl body-md">
              Manage your fractional investment parameters, identity
              verification, and security protocols.
            </p>
          </header>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_0_rgba(24,28,30,0.06)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"></div>

                <div className="relative flex flex-col items-center">
                  <div className="relative">
                    <img
                      alt="Investor Profile"
                      className="w-24 h-24 rounded-full border-4 border-surface"
                      data-alt="High-resolution professional avatar of a man in his 40s, business casual, neutral soft-focus office background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL4tCQbxUNTK_bncNCszituymDwNrXBeRH0A8UIx9-UtCSaDXACxhzyBWDGYc2U8TODFPUH8e49-U5N8wnjaSJSQn1Z5qixL4dF1Hp2EBO_VlerIekIoGzsgqI7dRvR72EKpoAwMszVDdv8gzgEAT9OLCmQdOaVgGsLaHtoyZQv0Z9y4lhUFMl8ZW0qn_JHMdk16TMCpUqJDrN97ifOjcRih_t9NItiuSkhGP525zHIBJNxmbirkQEQoTxbZ45R89t3RzzD-3Lbspy"
                    />

                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full text-xs">
                      <span className="material-symbols-outlined text-sm">
                        edit
                      </span>
                    </button>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold headline-font text-primary">
                    Julian Sterling
                  </h2>
                  <p className="text-on-surface-variant">
                    j.sterling@capital.com
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-outline-variant/15">
                    <span className="text-sm font-medium text-on-surface-variant">
                      Account ID
                    </span>
                    <span className="text-sm font-bold text-primary">
                      EQ-992834
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-medium text-on-surface-variant">
                      Member Since
                    </span>
                    <span className="text-sm font-bold text-primary">
                      Oct 2022
                    </span>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-low p-8 rounded-xl space-y-6">
                <h3 className="text-lg font-bold headline-font text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    verified_user
                  </span>
                  Verification Status
                </h3>

                <div className="space-y-4">
                  <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">
                        KYC Compliance
                      </p>
                      <p className="text-sm font-bold text-primary">
                        Level 3 Verified
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-container text-xs font-bold rounded-full">
                      ACTIVE
                    </span>
                  </div>

                  <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">
                        Accreditation
                      </p>
                      <p className="text-sm font-bold text-primary">
                        Reg D Qualified
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-container text-xs font-bold rounded-full">
                      VERIFIED
                    </span>
                  </div>
                </div>

                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Your documents are up to date. Next periodic review scheduled
                  for January 2025.
                </p>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-8">
              <section className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_8px_32px_0_rgba(24,28,30,0.06)]">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold headline-font text-primary">
                      Investment Sweet Spot
                    </h2>
                    <p className="text-on-surface-variant text-sm">
                      Configure your automated opportunity filters.
                    </p>
                  </div>
                  <button className="text-secondary font-bold text-sm hover:underline">
                    Reset Filters
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-primary uppercase tracking-wider">
                      Minimum Commitment
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline font-bold text-primary">
                        $
                      </span>
                      <input
                        className="w-full pl-10 pr-4 py-4 bg-surface-container border-none rounded-xl font-headline font-bold text-xl focus:ring-2 focus:ring-secondary transition-all"
                        type="text"
                        value="25,000"
                        readOnly
                      />
                    </div>

                    <p className="text-xs text-on-surface-variant">
                      Deals below this threshold will be hidden from your primary
                      feed.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-primary uppercase tracking-wider">
                      Maximum Commitment
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline font-bold text-primary">
                        $
                      </span>
                      <input
                        className="w-full pl-10 pr-4 py-4 bg-surface-container border-none rounded-xl font-headline font-bold text-xl focus:ring-2 focus:ring-secondary transition-all"
                        type="text"
                        value="500,000"
                        readOnly
                      />
                    </div>

                    <p className="text-xs text-on-surface-variant">
                      Safety cap for single-asset fractional ownership stakes.
                    </p>
                  </div>
                </div>

                <div className="mt-12 space-y-6">
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider">
                    Preferred Sectors
                  </label>

                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-primary-container text-white rounded-xl flex items-center gap-2 text-sm font-bold transition-transform hover:scale-105">
                      <span className="material-symbols-outlined text-sm">
                        apartment
                      </span>
                      Multi-Family
                    </button>

                    <button className="px-6 py-3 bg-primary-container text-white rounded-xl flex items-center gap-2 text-sm font-bold transition-transform hover:scale-105">
                      <span className="material-symbols-outlined text-sm">
                        factory
                      </span>
                      Industrial
                    </button>

                    <button className="px-6 py-3 bg-surface-container text-on-surface-variant rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        medical_services
                      </span>
                      Life Sciences
                    </button>

                    <button className="px-6 py-3 bg-primary-container text-white rounded-xl flex items-center gap-2 text-sm font-bold transition-transform hover:scale-105">
                      <span className="material-symbols-outlined text-sm">
                        data_thresholding
                      </span>
                      Data Centers
                    </button>

                    <button className="px-6 py-3 bg-surface-container text-on-surface-variant rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        shopping_bag
                      </span>
                      Retail
                    </button>

                    <button className="px-6 py-3 border-2 border-dashed border-outline-variant rounded-xl flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:border-primary hover:text-primary transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                      Add Sector
                    </button>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-low p-10 rounded-xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold headline-font text-primary">
                    Security & Access
                  </h2>
                  <p className="text-on-surface-variant text-sm">
                    Ensure your institutional-grade account remains protected.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between border border-transparent hover:border-primary/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined">key</span>
                      </div>

                      <div>
                        <h4 className="font-bold text-primary">
                          Master Password
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          Last changed 4 months ago
                        </p>
                      </div>
                    </div>

                    <button className="px-5 py-2 border border-outline-variant text-primary font-bold text-sm rounded-xl hover:bg-surface-variant transition-colors">
                      Update
                    </button>
                  </div>

                  <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between border border-transparent hover:border-primary/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined">
                          phonelink_lock
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-primary">
                          Two-Factor Authentication (2FA)
                        </h4>
                        <p className="text-xs text-on-secondary-container font-medium">
                          Currently enabled via Authenticator App
                        </p>
                      </div>
                    </div>

                    <button className="px-5 py-2 border border-outline-variant text-primary font-bold text-sm rounded-xl hover:bg-surface-variant transition-colors">
                      Configure
                    </button>
                  </div>

                  <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between border border-transparent hover:border-primary/10 transition-all opacity-60">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined">
                          fingerprint
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-primary">
                          Biometric Login
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          Not available on this device
                        </p>
                      </div>
                    </div>

                    <button
                      className="px-5 py-2 border border-outline-variant text-on-surface-variant font-bold text-sm rounded-xl cursor-not-allowed"
                      disabled
                    >
                      Setup
                    </button>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-outline-variant/20 flex justify-end gap-4">
                  <button className="px-8 py-3 text-on-surface-variant font-bold">
                    Discard Changes
                  </button>
                  <button className="bg-gradient-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
                    Save All Configuration
                  </button>
                </div>
              </section>
            </div>
          </div>

          <footer className="mt-16 py-8 border-t border-outline-variant/10 text-center">
            <p className="text-xs text-on-surface-variant font-medium tracking-widest uppercase">
              Equitas Modern — The Architect Tier — 2024
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}