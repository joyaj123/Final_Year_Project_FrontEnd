export default function Signup() {
  return (
    <div className="flex min-h-screen">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative bg-primary-container items-center justify-center p-20 overflow-hidden">

        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYopttdVMbUhqzEjcY9k64TKy1RM_SSrV15PgsZYvEr04XWe2msbNyyEbOaIzR_otqjAmOFuyy8GB6Ks57Up8FnrAwg4S-SKiLoNE92AqLt7F-YzV4ThhORJG-4ChV9EGXnQhGs7z46JWSdrbKtOhcnC_YBslZvKu1v9IM9_flV3QTh6lrKy1gdh5F40aPq4XIahikWNqdBuN7DdJ74vfK3ths292SSr0SePqGZbHwlIaclB2Yv9aKSkIbXd_w80pytx4d7LDPJJ3I"
            alt="architecture"
          />
        </div>

        <div className="relative z-10 max-w-lg">

          <div className="mb-12">
            <span className="text-secondary-fixed font-extrabold text-4xl">
              Fractional
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Architecting the Future of{" "}
            <span className="text-secondary-fixed">Ownership.</span>
          </h1>

          <p className="text-on-primary-container text-lg mb-12">
            Join an institutional-grade ecosystem designed for high-precision asset management.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-secondary-fixed">
                verified
              </span>
              <div>
                <p className="text-white font-semibold">Institutional Grade</p>
                <p className="text-xs text-white/60">Secured protocols</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-secondary-fixed">
                pie_chart
              </span>
              <div>
                <p className="text-white font-semibold">Fractional Precision</p>
                <p className="text-xs text-white/60">Granular capital deployment</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <main className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-surface-bright">

        <div className="w-full max-w-md space-y-8">

          <div>
            <h2 className="text-3xl font-bold text-primary">
              Create your profile
            </h2>
            <p className="text-gray-500">
              Select your account type to begin registration.
            </p>
          </div>

          <form className="space-y-6">

            {/* ROLE */}
            <div className="grid grid-cols-2 gap-4">

              <label className="cursor-pointer">
                <input type="radio" name="role" className="sr-only peer" defaultChecked />
                <div className="p-4 rounded-xl border-2 border-transparent peer-checked:border-green-500 bg-gray-100 text-center">
                  Investor
                </div>
              </label>

              <label className="cursor-pointer">
                <input type="radio" name="role" className="sr-only peer" />
                <div className="p-4 rounded-xl border-2 border-transparent peer-checked:border-green-500 bg-gray-100 text-center">
                  Business Owner
                </div>
              </label>

            </div>

            {/* NAME */}
            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="First Name"
                className="p-3 bg-gray-100 rounded-xl"
              />

              <input
                placeholder="Last Name"
                className="p-3 bg-gray-100 rounded-xl"
              />

            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-gray-100 rounded-xl"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-100 rounded-xl"
            />

            {/* COUNTRY */}
            <select className="w-full p-3 bg-gray-100 rounded-xl">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Singapore</option>
              <option>Switzerland</option>
              <option>Germany</option>
            </select>

            {/* TERMS */}
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" />
              I agree to Terms of Service and Privacy Policy
            </label>

            {/* BUTTON */}
            <button
  type="submit"
  className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-[#000F22] to-[#0A2540]"
>
  Create Account
</button>

          </form>

        </div>

      </main>
    </div>
  );
}