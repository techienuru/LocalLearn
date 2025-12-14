import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add your Google OAuth logic here
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">
                Create your free account
              </h1>
              <p className="text-base text-subtext-light dark:text-subtext-dark">
                Access free courses and connect with local teachers
              </p>
            </div>
            <button className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-subtext-light dark:text-subtext-dark hover:bg-black/5 dark:hover:bg-white/5">
              <span className="material-symbols-outlined text-xl">
                arrow_back
              </span>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Social Login */}
          <button
            onClick={handleGoogleLogin}
            className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark px-5 text-base font-bold text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:bg-black/5 dark:hover:bg-white/5"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="truncate">Continue with Google</span>
          </button>

          {/* Separator */}
          <div className="flex items-center gap-4 py-2">
            <hr className="flex-grow border-t border-border-light dark:border-border-dark" />
            <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
              OR
            </p>
            <hr className="flex-grow border-t border-border-light dark:border-border-dark" />
          </div>

          {/* Text Fields */}
          <div className="flex flex-col gap-4">
            <label className="flex flex-col w-full">
              <p className="pb-2 text-sm font-medium">Full name</p>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input h-12 w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 text-base placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Enter your full name"
                type="text"
              />
            </label>

            <label className="flex flex-col w-full">
              <p className="pb-2 text-sm font-medium">Email</p>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input h-12 w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 text-base placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Enter your email address"
                type="email"
              />
            </label>

            <label className="flex flex-col w-full">
              <div className="flex justify-between items-center pb-2">
                <p className="text-sm font-medium">Password</p>
                <p className="text-xs text-subtext-light dark:text-subtext-dark">
                  Use 8+ characters
                </p>
              </div>
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input h-12 w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 text-base placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Create a password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-subtext-light dark:text-subtext-dark"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>
            </label>

            <label className="flex flex-col w-full">
              <p className="pb-2 text-sm font-medium">Confirm Password</p>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input h-12 w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 text-base placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Confirm your password"
                type="password"
              />
            </label>
          </div>

          {/* Role Selection */}
          <div>
            <p className="pb-2 text-sm font-medium">Role</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border-light dark:border-border-dark p-4 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/20">
                <input
                  name="role"
                  value="teacher"
                  checked={formData.role === "teacher"}
                  onChange={handleInputChange}
                  className="form-radio text-primary focus:ring-primary/20"
                  type="radio"
                />
                <div>
                  <p className="font-medium">Teacher</p>
                  <p className="text-xs text-subtext-light dark:text-subtext-dark">
                    Create and manage courses
                  </p>
                </div>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border-light dark:border-border-dark p-4 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/20">
                <input
                  name="role"
                  value="student"
                  checked={formData.role === "student"}
                  onChange={handleInputChange}
                  className="form-radio text-primary focus:ring-primary/20"
                  type="radio"
                />
                <div>
                  <p className="font-medium">Student</p>
                  <p className="text-xs text-subtext-light dark:text-subtext-dark">
                    Enroll and learn from courses
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3 pt-2">
            <input
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="form-checkbox mt-0.5 h-5 w-5 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary/20"
              id="terms"
              type="checkbox"
            />
            <label
              className="text-sm text-subtext-light dark:text-subtext-dark"
              htmlFor="terms"
            >
              I agree to the{" "}
              <a className="font-medium text-primary hover:underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="font-medium text-primary hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={handleSubmit}
            className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white hover:bg-primary/90"
          >
            <span className="truncate">Create account</span>
          </button>
          <p className="text-center text-sm text-subtext-light dark:text-subtext-dark">
            Already have an account?{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
