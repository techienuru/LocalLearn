import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignIn = () => {
    console.log("Sign in:", formData);
    // Add your sign-in logic here
    // Example: validate and show error if needed
    // setShowError(true);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add your Google OAuth logic here
  };

  const handleGuestLogin = () => {
    console.log("Guest login clicked");
    // Add your guest login logic here
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="flex w-full items-center justify-between pb-6">
          <div className="flex items-center gap-4 text-[#182312] dark:text-white">
            <span className="material-symbols-outlined text-2xl">
              arrow_back
            </span>
            <div className="flex items-center gap-2">
              <div className="size-6 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6_535)">
                    <path
                      clipRule="evenodd"
                      d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_535">
                      <rect fill="white" height="48" width="48" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                LocalLearn
              </h2>
            </div>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-[#182312] dark:text-white dark:bg-primary/30 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Mock Mode</span>
          </button>
        </header>

        {/* Main Form Card */}
        <main className="flex flex-col gap-6 rounded-xl border border-[#d3fbd8] dark:border-primary/20 bg-white dark:bg-background-dark p-8 shadow-sm">
          {/* Page Heading */}
          <div className="flex flex-col gap-2">
            <p className="text-[#182312] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
              Welcome back
            </p>
            <p className="text-primary/80 dark:text-primary/90 text-base font-normal leading-normal">
              Sign in to continue learning
            </p>
          </div>

          {/* Error Message */}
          {showError && (
            <div className="flex items-center gap-3 rounded-lg bg-red-100 dark:bg-red-900/30 p-4 text-sm text-red-700 dark:text-red-300">
              <span className="material-symbols-outlined">error</span>
              <p>Invalid credentials. Please try again.</p>
            </div>
          )}

          {/* Form Fields */}
          <div className="flex flex-col gap-4">
            <label className="flex flex-col">
              <p className="text-[#182312] dark:text-white text-sm font-medium leading-normal pb-2">
                Email or phone
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                  autoComplete="username"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#182312] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d8e4d3] dark:border-primary/20 bg-background-light dark:bg-[#050902] focus:border-primary h-12 placeholder:text-[#6a8e57] dark:placeholder:text-primary/40 px-4 text-base font-normal leading-normal"
                  placeholder="Enter your email or phone number"
                />
              </div>
            </label>

            <label className="flex flex-col">
              <p className="text-[#182312] dark:text-white text-sm font-medium leading-normal pb-2">
                Password
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#182312] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d8e4d3] dark:border-primary/20 bg-background-light dark:bg-[#050902] focus:border-primary h-12 placeholder:text-[#6a8e57] dark:placeholder:text-primary/40 p-4 rounded-r-none border-r-0"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  className="text-[#6a8e57] dark:text-primary/40 flex border border-[#d8e4d3] dark:border-primary/20 bg-background-light dark:bg-[#050902] items-center justify-center px-3 rounded-r-lg border-l-0"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>
            </label>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-x-2.5">
              <input
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-5 w-5 rounded border-[#d8e4d3] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-background-dark focus:ring-primary/50"
                style={{
                  "--checkbox-tick-svg":
                    "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
                }}
                type="checkbox"
              />
              <p className="text-[#182312] dark:text-white text-sm font-normal leading-normal">
                Remember me
              </p>
            </label>
            <a
              className="text-sm font-medium text-primary hover:underline"
              href="#"
            >
              Forgot password?
            </a>
          </div>

          {/* Primary CTA */}
          <button
            onClick={handleSignIn}
            className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
          >
            Sign in
          </button>

          {/* Security Hint */}
          <p className="text-center text-xs text-[#6a8e57] dark:text-primary/40">
            We use email/phone to sign you in safely.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <hr className="flex-grow border-t border-[#d8e4d3] dark:border-primary/20" />
            <span className="text-sm text-[#6a8e57] dark:text-primary/40">
              or
            </span>
            <hr className="flex-grow border-t border-[#d8e4d3] dark:border-primary/20" />
          </div>

          {/* Social & Guest Login */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleGoogleLogin}
              className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg border border-[#d8e4d3] dark:border-primary/20 bg-white dark:bg-background-dark text-[#182312] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8 10.1c0-.7-.1-1.4-.2-2.1h-9.3v4h5.2c-.2 1.3-1 2.4-2.2 3.2v2.6h3.4c2-1.8 3.1-4.5 3.1-7.7z"
                  fill="#4285F4"
                />
                <path
                  d="M12.3 22c2.6 0 4.8-.9 6.4-2.4l-3.4-2.6c-.8.6-2 .9-3 .9-2.3 0-4.3-1.6-5-3.7H3.9v2.7C5.5 19.5 8.7 22 12.3 22z"
                  fill="#34A853"
                />
                <path
                  d="M7.3 13.4c-.2-.6-.2-1.2-.2-1.8s0-1.2.2-1.8V7.1H3.9c-.7 1.5-1.1 3.1-1.1 4.9s.4 3.4 1.1 4.9l3.4-2.6z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.3 5.9c1.4 0 2.7.5 3.7 1.5l3-3C17.1 2.1 14.9 1 12.3 1 8.7 1 5.5 3.5 3.9 6.1l3.4 2.7c.7-2.1 2.7-3.7 5-3.7z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
            <button
              onClick={handleGuestLogin}
              className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 dark:bg-primary/30 text-[#182312] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            >
              Continue as guest
            </button>
          </div>
        </main>

        {/* Create Account Link */}
        <footer className="mt-6 text-center">
          <p className="text-sm text-[#6a8e57] dark:text-primary/60">
            Don't have an account?{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Create an account
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
