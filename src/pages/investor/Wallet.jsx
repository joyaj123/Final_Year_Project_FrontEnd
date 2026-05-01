import { Link } from "react-router-dom";

export default function Wallet() {
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
            className="flex items-center gap-3 px-3 py-2.5 bg-white text-emerald-700 shadow-sm rounded-lg transition-transform duration-200"
          >
            <span className="material-symbols-outlined">
              account_balance
            </span>
            <span className="font-medium text-sm">Wallet</span>
          </Link>

          <Link
            to="/profilesetting"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
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

        <div className="max-w-6xl mx-auto w-full p-8">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-2">
              Digital Vault
            </h1>
            <p className="text-on-surface-variant font-medium">
              Manage your capital and monitor cash flow across your fractional
              assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_8px_32px_0_rgba(24,28,30,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-bold tracking-widest text-on-surface-variant uppercase">
                    Available Balance
                  </span>
                  <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                    Secured by Equitas
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">
                    $142,550.00
                  </span>
                  <span className="text-secondary font-bold text-lg">
                    +2.4%
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-12">
                <button className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-2xl font-bold tracking-tight hover:opacity-95 transition-opacity">
                  <span className="material-symbols-outlined">
                    add_circle
                  </span>
                  Deposit Funds
                </button>

                <button className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-2xl font-bold tracking-tight hover:opacity-95 transition-opacity">
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                  Withdraw
                </button>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-low rounded-[2rem] p-6 flex flex-col">
                <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-4">
                  Locked Capital
                </span>
                <div className="text-3xl font-extrabold tracking-tight text-primary mb-1">
                  $48,200.00
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Funds currently committed to pending fractional acquisitions.
                </p>
              </div>

              <div className="bg-primary-container text-white rounded-[2rem] p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-widest opacity-60 uppercase mb-4 block">
                    Auto-Invest
                  </span>
                  <div className="text-lg font-bold mb-2">
                    Portfolio Shield Active
                  </div>
                  <p className="text-xs opacity-80 leading-relaxed">
                    Your distributions are being automatically reinvested into
                    Tier-1 assets.
                  </p>
                </div>

                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-8xl">
                    verified_user
                  </span>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_32px_0_rgba(24,28,30,0.04)]">
            <div className="px-8 py-6 flex justify-between items-center border-b border-outline-variant/10">
              <h2 className="text-xl font-extrabold tracking-tight text-primary">
                Transaction History
              </h2>

              <div className="flex gap-2">
                <button className="p-2 bg-surface-container-low rounded-lg text-on-surface-variant hover:text-primary">
                  <span className="material-symbols-outlined">
                    filter_list
                  </span>
                </button>

                <button className="p-2 bg-surface-container-low rounded-lg text-on-surface-variant hover:text-primary">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Date
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Type
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Description
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">
                      Amount
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-outline-variant/5">
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-8 py-5 text-sm text-on-surface">
                      Oct 24, 2023
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[10px] font-bold px-2 py-1 bg-primary/5 text-primary rounded-md uppercase tracking-tight">
                        Investment
                      </span>
                    </td>
                    <td className="px-8 py-5 font-medium text-sm">
                      Skyline Residential Block B
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm text-on-surface">
                      -$12,000.00
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span className="text-xs font-semibold text-secondary">
                          COMPLETED
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-8 py-5 text-sm text-on-surface">
                      Oct 21, 2023
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[10px] font-bold px-2 py-1 bg-secondary-container/20 text-on-secondary-container rounded-md uppercase tracking-tight">
                        Distribution
                      </span>
                    </td>
                    <td className="px-8 py-5 font-medium text-sm">
                      Quarterly Yield - Logistics Hub
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm text-secondary">
                      +$2,450.00
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span className="text-xs font-semibold text-secondary">
                          COMPLETED
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-8 py-5 text-sm text-on-surface">
                      Oct 19, 2023
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-high text-on-surface-variant rounded-md uppercase tracking-tight">
                        Deposit
                      </span>
                    </td>
                    <td className="px-8 py-5 font-medium text-sm">
                      Bank Wire Transfer ****9901
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm text-on-surface">
                      +$50,000.00
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <span className="text-xs font-semibold text-amber-600">
                          PENDING
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-8 py-5 text-sm text-on-surface">
                      Oct 15, 2023
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[10px] font-bold px-2 py-1 bg-primary/5 text-primary rounded-md uppercase tracking-tight">
                        Investment
                      </span>
                    </td>
                    <td className="px-8 py-5 font-medium text-sm">
                      Industrial Portfolio Alpha
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm text-on-surface">
                      -$25,000.00
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span className="text-xs font-semibold text-secondary">
                          COMPLETED
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-8 py-5 text-sm text-on-surface">
                      Oct 12, 2023
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[10px] font-bold px-2 py-1 bg-error-container/30 text-error rounded-md uppercase tracking-tight">
                        Withdraw
                      </span>
                    </td>
                    <td className="px-8 py-5 font-medium text-sm">
                      External Wallet Withdrawal
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm text-on-surface">
                      -$5,000.00
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span className="text-xs font-semibold text-secondary">
                          COMPLETED
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-8 py-6 bg-surface-container-low/20 flex justify-center">
              <button className="text-sm font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1">
                View More Transactions
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}