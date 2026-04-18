import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Response:", res.data);


      // ✅ safe role extraction (handles backend differences)
      const role =
        res.data.user.role || res.data.user.userType;

      const normalizedRole = role?.toUpperCase();

      const token = res.data.token;

      // store auth data
      localStorage.setItem("token", token);
      localStorage.setItem("role", normalizedRole);

      // 🔥 ROLE-BASED REDIRECT
      if (normalizedRole === "INVESTOR") {
        navigate("/investor-dashboard");
      } 
      else if (normalizedRole === "ADMIN") {
        navigate("/admin-dashboard");
      } 
      else if (normalizedRole === "COMPANY") {
        navigate("/company-dashboard");
      } 
      else {
        navigate("/");
      }

    } catch (err) {
      console.log(err);

      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Server error");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fafd] font-sans overflow-hidden relative">

      {/* BACKGROUND BLUR BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-green-200/30 blur-[120px] rounded-full"></div>
      </div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-[1000px] grid lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#000F22] to-[#0A2540] text-white">

          <div>
            <div className="flex items-center gap-2 mb-10">
              <h1 className="text-2xl font-bold tracking-tight">Fractional</h1>
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Institutional Grade Assets,
              <span className="text-green-400"> Unbundled.</span>
            </h2>

            <p className="mt-6 text-white/70 text-sm">
              Secure access to structured fractional ownership infrastructure.
            </p>
          </div>

          <p className="text-xs text-white/40">
            © 2026 Fractional Systems
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:p-14 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-[#0a2540]">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Enter your credentials to access your portfolio
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div>
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Email Address
              </label>

              <div className="relative mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-blue-300 outline-none transition"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Password
              </label>

              <div className="relative mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-blue-300 outline-none transition"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-[#000F22] to-[#0A2540] hover:opacity-95 active:scale-[0.98] transition flex items-center justify-center gap-2"
            >
              Log In
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}