import React, { useMemo, useState } from "react";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "#" },
  { label: "My Deals", icon: "business_center", href: "#" },
  { label: "Distributions", icon: "payments", href: "#" },
  { label: "Wallet", icon: "account_balance_wallet", href: "#" },
  { label: "Profile", icon: "person", href: "#" },
];

const statusOptions = ["Draft", "Private", "Public"];
const currencyOptions = ["USD", "EUR", "GBP"];

export default function CreateDealPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Draft",
    currency: "USD",
    targetRaise: "",
    equityOffered: "",
    pricePerShare: "",
    minInvestment: "",
    maxInvestment: "",
    verifiedOnly: true,
    openingDate: "",
    closingDate: "",
    fundingDeadline: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCurrencyChange = (currency) => {
    setFormData((prev) => ({
      ...prev,
      currency,
    }));
  };

  const complianceScore = useMemo(() => {
    const requiredFields = [
      formData.title,
      formData.description,
      formData.targetRaise,
      formData.equityOffered,
      formData.pricePerShare,
      formData.minInvestment,
      formData.maxInvestment,
      formData.openingDate,
      formData.closingDate,
      formData.fundingDeadline,
    ];

    const filled = requiredFields.filter(
      (field) => String(field).trim() !== ""
    ).length;

    return Math.min(100, Math.round((filled / requiredFields.length) * 100));
  }, [formData]);

  const complianceLabel =
    complianceScore >= 85
      ? "High Grade"
      : complianceScore >= 60
      ? "Moderate"
      : "Needs Review";

  const complianceStroke = 251.2;
  const complianceOffset =
    complianceStroke - (complianceScore / 100) * complianceStroke;

  return (
    <div className="bg-surface text-on-surface flex min-h-screen">
      <aside className="hidden lg:flex h-screen w-64 border-r border-slate-200 bg-[#f3f4f6] flex-col p-4 gap-2 shrink-0 sticky top-0">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">
                account_balance
              </span>
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 leading-tight">
                Capital Management
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                Institutional Partner
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-transform duration-200 ${
                item.active
                  ? "bg-white text-slate-900 shadow-sm font-semibold"
                  : "text-slate-600 hover:bg-slate-200/50 hover:translate-x-1"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-200/50 pt-4">
          <button className="w-full py-3 bg-primary-container text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            New Investment
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="sticky top-0 z-40 h-16 px-4 md:px-8 flex justify-between items-center bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
          <div className="flex items-center gap-4 min-w-0">
            <span className="text-xl font-bold text-slate-900 font-headline tracking-tight whitespace-nowrap">
              Equinox Fractional
            </span>
            <div className="hidden md:block h-4 w-[1px] bg-slate-300"></div>
            <span className="hidden md:inline text-sm text-slate-500 font-medium">
              New Asset Listing
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:bg-slate-100 transition-colors rounded-lg">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-500 hover:bg-slate-100 transition-colors rounded-lg">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-3 pl-6 border-l border-slate-200">
              <img
                alt="Business Owner Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4tEC_nm-x63MC8_NGCr_qD6nCG5qjE1XO7juJOwTv5HuXFjm7_8fR3lDxWYG5LhlkOkiXMDJPM7QjkV6doBaTZ_MGOSoPNYHQ_4U8JxnIxvf3E-sEAUzaGCdY2KqRC5qDKNDsT_Bxb0OzBMH-vl9Pn34iKBqjSQN8J9esYxDO4iH0oEl_aEUiAlzofGFlg2scW-0o-E1dsiddiMVuZY705rMYQ8xnGW0afBfxLjughO7u0OR7f_qIkno4m9VUu5_qVfxRK7nroML-"
              />
              <span className="text-sm font-semibold text-slate-900">
                Marcus Sterling
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10 py-8 md:py-12">
          <div className="mb-10 flex flex-col xl:flex-row justify-between xl:items-end gap-6">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-2">
                Create New Deal
              </h2>
              <p className="text-on-surface-variant max-w-2xl">
                Architect a new fractional ownership opportunity. Fill in the
                core parameters, financial structure, and timeline to begin the
                vetting process.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl font-semibold border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
                Save as Draft
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold bg-primary-container text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-lg">
                  rocket_launch
                </span>
                Create Deal
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <div className="xl:col-span-8 space-y-8">
              <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-sm">
                      fingerprint
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold">
                    Core Identity
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                      Deal Title
                    </label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                      placeholder="e.g. Skyline Residences Series A"
                      type="text"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all resize-none"
                      placeholder="Detail the strategic value and underlying asset..."
                      rows="4"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                    >
                      {statusOptions.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                      Currency
                    </label>
                    <div className="flex p-1 bg-surface-container rounded-xl">
                      {currencyOptions.map((currency) => (
                        <button
                          key={currency}
                          type="button"
                          onClick={() => handleCurrencyChange(currency)}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                            formData.currency === currency
                              ? "bg-surface-container-lowest shadow-sm text-primary"
                              : "text-on-surface-variant"
                          }`}
                        >
                          {currency}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      account_balance_wallet
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold">
                    Financial Structuring
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                      Target Raise ({formData.currency})
                    </label>
                    <input
                      name="targetRaise"
                      value={formData.targetRaise}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                      Equity Offered (%)
                    </label>
                    <input
                      name="equityOffered"
                      value={formData.equityOffered}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                      Price per Share ({formData.currency})
                    </label>
                    <input
                      name="pricePerShare"
                      value={formData.pricePerShare}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-xl">
                      group
                    </span>
                    <h3 className="font-headline text-lg font-bold">
                      Investors
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Min Investment
                      </label>
                      <input
                        name="minInvestment"
                        value={formData.minInvestment}
                        onChange={handleChange}
                        className="w-full bg-surface-container border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary"
                        placeholder="$5,000"
                        type="text"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Max Investment
                      </label>
                      <input
                        name="maxInvestment"
                        value={formData.maxInvestment}
                        onChange={handleChange}
                        className="w-full bg-surface-container border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary"
                        placeholder="$100,000"
                        type="text"
                      />
                    </div>

                    <label className="flex items-center justify-between pt-4 cursor-pointer">
                      <span className="text-sm font-medium text-slate-700">
                        Verified Investors Only
                      </span>
                      <span
                        className={`w-12 h-6 rounded-full relative shadow-inner transition-colors ${
                          formData.verifiedOnly
                            ? "bg-secondary"
                            : "bg-surface-container-highest"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="verifiedOnly"
                          checked={formData.verifiedOnly}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                            formData.verifiedOnly ? "right-1" : "left-1"
                          }`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </section>

                <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-xl">
                      calendar_month
                    </span>
                    <h3 className="font-headline text-lg font-bold">
                      Funding Timeline
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Opening Date
                      </label>
                      <input
                        name="openingDate"
                        value={formData.openingDate}
                        onChange={handleChange}
                        className="w-full bg-surface-container border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
                        type="date"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Closing Date
                      </label>
                      <input
                        name="closingDate"
                        value={formData.closingDate}
                        onChange={handleChange}
                        className="w-full bg-surface-container border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
                        type="date"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Funding Deadline
                      </label>
                      <input
                        name="fundingDeadline"
                        value={formData.fundingDeadline}
                        onChange={handleChange}
                        className="w-full bg-surface-container border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
                        type="date"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="xl:col-span-4 space-y-6">
              <div className="bg-primary-container text-white p-8 rounded-xl shadow-xl overflow-hidden relative">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h4 className="font-headline font-bold text-lg leading-tight mb-1">
                        Compliance Check
                      </h4>
                      <p className="text-on-primary-container text-xs">
                        Real-time listing validation
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-secondary-fixed text-2xl">
                      verified_user
                    </span>
                  </div>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          className="text-slate-700"
                          cx="48"
                          cy="48"
                          fill="transparent"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                        />
                        <circle
                          className="text-secondary-fixed transition-all duration-500"
                          cx="48"
                          cy="48"
                          fill="transparent"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeDasharray={complianceStroke}
                          strokeDashoffset={complianceOffset}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-headline font-extrabold text-2xl">
                          {complianceScore}%
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-2xl font-bold font-headline">
                        {complianceLabel}
                      </p>
                      <p className="text-on-primary-container text-sm">
                        Regulatory Ready
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-sm">
                        check_circle
                      </span>
                      <span className="text-on-primary-container">
                        Entity Verification
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-sm">
                        check_circle
                      </span>
                      <span className="text-on-primary-container">
                        Smart Contract Escrow
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className={`material-symbols-outlined text-sm ${
                          formData.verifiedOnly
                            ? "text-secondary-fixed"
                            : "text-error-container"
                        }`}
                      >
                        {formData.verifiedOnly ? "check_circle" : "error"}
                      </span>
                      <span className="text-white">
                        {formData.verifiedOnly
                          ? "KYC Logic Enabled"
                          : "KYC Logic Required"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group border border-outline-variant/10">
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt="Modern Glass Office Building"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn0d2HalvuKjJu1P30q3wKyhVY7QBFfXJlxWD2iB_ApYRsQK5GCmRWwXiuoz6ImGGu5KJFzpSfrWAK9E7a1_UsKov0By5QZ9ctesxLcIU8yvJqMKQRlg_MbGtCCJmQdCpoPAvtNlFu5idhKYaiG7OkIUcFKTvDX53oSFVDr4Do3ts42qdf9Oy6ipptXiucbASYyDNJPJOXxUQML7-AXNRG-FDU_SdT-dwKodv0m6Arqntkjm5M4erOz_VgBoixTfxRUNPhkChIPtIr"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Preview
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                    Asset Draft
                  </p>
                  <h5 className="font-headline font-bold text-xl mb-4 leading-tight">
                    {formData.title || "Skyline Residences Series A"}
                  </h5>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                        Target Raise
                      </p>
                      <p className="font-headline font-bold text-primary">
                        {formData.targetRaise
                          ? `${formData.currency} ${formData.targetRaise}`
                          : `${formData.currency} --`}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                        Status
                      </p>
                      <p className="font-headline font-bold text-secondary">
                        {formData.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-outline-variant/20">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">
                    lightbulb
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-bold">Architect's Tip</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Deals with a verified-investor filter typically feel more
                      premium and structured in the first review phase.
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