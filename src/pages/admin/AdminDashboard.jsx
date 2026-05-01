import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeDeals: 0,
    pendingKyc: 0,
    pendingCompanies: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/stats", {
          withCredentials: true,
        });

        setStats(res.data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  const now = new Date();

  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="bg-surface text-on-surface flex">
      <aside className="h-screen w-64 border-r border-slate-200 bg-[#f3f4f6] flex flex-col p-4 gap-2 shrink-0">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
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
          <Link
            to="/admin-dashboard"
            className="flex items-center gap-3 px-3 py-2.5 bg-white text-emerald-700 shadow-sm rounded-lg transition-transform duration-200"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </Link>

          <Link
            to="/pending-deals"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">handshake</span>
            <span className="font-medium text-sm">Pending Deals</span>
          </Link>

          <Link
            to="/pending-companies"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">business</span>
            <span className="font-medium text-sm">Pending Companies</span>
          </Link>

          <Link
            to="/kyc-review"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-medium text-sm">KYC Review</span>
          </Link>

          <Link
            to="/audit-logs"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 hover:translate-x-1 transition-transform duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-medium text-sm">Audit Logs</span>
          </Link>
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
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>

            <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>

            <div className="h-6 w-[1px] bg-outline-variant mx-2"></div>
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
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                <span className="text-sm font-medium">
                  {formatDate(start)} - {formatDate(end)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] border border-outline-variant/5 min-h-[320px] flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-primary manrope">
                    Platform Growth Trends
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Monthly volume and user acquisition metrics
                  </p>
                </div>
              </div>

              <div className="flex-1 relative flex items-end gap-4 px-4 h-56">
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

            <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(24,28,30,0.04)] border border-outline-variant/5">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-primary manrope">
                    System Snapshot
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Current platform status
                  </p>
                </div>

                <span className="material-symbols-outlined text-secondary">
                  monitoring
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4">
                  <span className="text-sm text-on-surface-variant">
                    Total Users
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {stats.totalUsers}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4">
                  <span className="text-sm text-on-surface-variant">
                    Active Deals
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {stats.activeDeals}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4">
                  <span className="text-sm text-on-surface-variant">
                    Pending KYC
                  </span>
                  <span className="text-lg font-bold text-secondary">
                    {stats.pendingKyc}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-on-surface-variant">
                    Pending Companies
                  </span>
                  <span className="text-lg font-bold text-secondary">
                    {stats.pendingCompanies}
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-surface-container-low p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      admin_panel_settings
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-primary manrope">
                      Admin Control
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Review pending actions regularly
                    </p>
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