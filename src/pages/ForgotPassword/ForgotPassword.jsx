import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [mockMode, setMockMode] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    // Add your password reset logic here
    // On success, show the success message
    setShowSuccess(true);
  };

  const handleBack = () => {
    console.log("Navigate back to login");
    // Add your navigation logic here
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 py-3">
          <a
            onClick={handleBack}
            aria-label="Back to Login page"
            className="flex items-center gap-3 text-text-light dark:text-text-dark cursor-pointer"
            href="#"
          >
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
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                LocalLearn
              </h2>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-light dark:text-text-dark">
              Mock Mode
            </span>
            <button
              onClick={() => setMockMode(!mockMode)}
              aria-checked={mockMode}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark ${
                mockMode ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
              }`}
              role="switch"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  mockMode ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-10 sm:py-20 px-4">
          <div className="flex w-full max-w-md flex-col">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-text-light dark:text-text-dark text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                Reset your password
              </h1>
              <p className="text-placeholder-light dark:text-placeholder-dark text-base font-normal leading-normal">
                Enter the email you used to sign up. We'll send a link to reset
                your password.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                    Email address
                  </p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark p-[15px] text-base font-normal leading-normal"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </label>
                <p
                  className="text-text-light dark:text-text-dark text-sm font-normal leading-normal px-1"
                  role="alert"
                >
                  If we don't recognize that email, you can try again or create
                  a new account.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-primary-text-light dark:text-primary-text-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-colors duration-200"
              >
                <span className="truncate">Send reset link</span>
              </button>
            </div>

            {/* Success State */}
            {showSuccess && (
              <div
                className="mt-8 flex flex-col items-center text-center p-8 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30"
                role="alert"
              >
                <div className="flex items-center justify-center size-12 rounded-full bg-primary text-primary-text-light dark:text-primary-text-dark mb-4">
                  <span className="material-symbols-outlined text-2xl">
                    mail
                  </span>
                </div>
                <h2 className="text-text-light dark:text-text-dark text-2xl font-bold mb-2">
                  Check your email
                </h2>
                <p className="text-placeholder-light dark:text-placeholder-dark">
                  We sent a password reset link to{" "}
                  <strong className="text-text-light dark:text-text-dark">
                    {email}
                  </strong>
                  .
                </p>
                <div className="w-full border-t border-primary/20 dark:border-primary/30 my-6"></div>
                <div className="text-left text-sm text-placeholder-light dark:text-placeholder-dark space-y-3">
                  <p className="font-medium text-text-light dark:text-text-dark">
                    Didn't receive the email?
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Check your spam or junk folder.</li>
                    <li>Please wait up to 5 minutes for it to arrive.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
