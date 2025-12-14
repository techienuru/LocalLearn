export const CourseDetails = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* TopNavBar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-border-dark px-6 sm:px-10 py-3 bg-white dark:bg-text-primary-light">
        <div className="flex items-center gap-4 text-[#131910] dark:text-gray-100">
          <div className="size-6">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_535)">
                <path
                  clipRule="evenodd"
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                  fillRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_535">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#131910] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">
            LocalLearn
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-[#131910] dark:text-gray-100 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User avatar"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh4t8Iqq_KBLgk4OP04GOnYph4xF-rnrI8asmJiwK07D-9iWS45eUOllLR0Yx9TFrv-_QEV2Rj8T4Mq6XgDpA3kVFMoFjQ8ozG3jKduU7CfUUwh5Ps_k5gk3UmFbJKR3fNT7yoMSKssbmSNCRw2UXUCwky0lUS3FGnHPTz_q0CIkqTgn8Twj4vPxQ8mPQbUv5HRcZ6GPlL9K4fMpBpcvFI0iFdFwaHbDiYz06IoLPyDFSmt2C43Y1woZvSfT_v_KqDlZ0mRBeOsBI")`,
            }}
          ></div>
        </div>
      </header>
      <main className="grow p-6 lg:p-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Course Header */}
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                data-alt="Instructor avatar, Jane Doe"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT8LanVCArHJNHW3AiBBnAlnxFlYCy1Q-gau-0wh63t_6ojIqo3ir5l8uJaLBwCqsjJAbg8A8iY5CePtxhNUSV-2OkxvfwIqPZUN5ly-FDI2uk0VWY570eGcmYXdqPrGn4gTVqUdoURXSH_ed6VRhq7mPK99WrUQVgkeP8dWBAlX8ZuOSBnvKLHnmEoJ7nWaupsK_WiFP4aphxU8gSUdREyS4IXwkaAuUIS6wdbNDFYkZUDmFDOiNxdzTOGipWzpBcvpF3rXAWU4c")`,
                }}
              ></div>
              <div>
                <h1 className="text-2xl font-bold text-[#050902] dark:text-white">
                  Mastering the Art of Packing
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  by Jane Doe
                </p>
              </div>
            </div>
            {/* MediaPlayer */}
            <div
              className="relative flex items-center justify-center bg-gray-800 bg-cover bg-center aspect-video rounded-xl"
              data-alt="Course video thumbnail showing packing materials on a table"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuw3heshWISRfncf1neNlthq2CVKI3F6AmU9L4ku5Q_4uhKTUodOKoO7zzTsCQ-i_Ik_oHtinaYQei1-_c4NXOourRK7t3CcmzMDaYeqNSQyu1giwqWjGUwDyCtnV2UwM9LXLa0ztjEScbZbETaNvJvzlFCnwLZ95Avkvepb-DUEQ2x3zKDrV6PCjeBoGrizPmq2uVSqtfJnK9f-NtPex6rJlV5UT0-wbCr_P21ADyRKvHcoDGMODmfq22xmTps1YODfQ982eOLog")`,
              }}
            >
              <button
                aria-label="Play video"
                className="flex shrink-0 items-center justify-center rounded-full size-20 bg-black/50 text-white backdrop-blur-sm transition-transform hover:scale-105"
              >
                <span className="material-symbols-outlined text-5xl fill-current">
                  play_arrow
                </span>
              </button>
            </div>
            {/* TitleText */}
            <h2 className="text-[#131910] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] pt-2">
              Lesson 1: Tools &amp; Materials
            </h2>
            {/* ProgressBar */}
            <div className="flex flex-col gap-3 p-4 bg-white dark:bg-text-primary-light rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex gap-6 justify-between items-center">
                <p className="text-[#131910] dark:text-white text-base font-medium leading-normal">
                  Course Progress
                </p>
                <p className="text-primary font-bold">0% Complete</p>
              </div>
              <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-2">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                Course progress saved automatically
              </p>
            </div>
            {/* SingleButton */}
            <div className="flex py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>
                <span className="truncate">Mark as Watched</span>
              </button>
            </div>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col gap-6 mt-8 lg:mt-0">
            {/* Lesson List */}
            <div className="bg-white dark:bg-text-primary-light rounded-lg p-5 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4 text-[#050902] dark:text-white">
                Lessons
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  className="flex items-center justify-between p-3 rounded-lg bg-primary/20 dark:bg-primary/30 ring-2 ring-primary"
                  href="#"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-2.5 rounded-full bg-primary animate-pulse"></div>
                    <span className="font-bold text-primary">
                      Lesson 1: Tools &amp; Materials
                    </span>
                  </div>
                  <span className="text-sm font-medium text-primary">4:03</span>
                </a>
                <a
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  href="#"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-2.5 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Lesson 2: Packing Steps
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    5:46
                  </span>
                </a>
                <a
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  href="#"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-2.5 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Lesson 3: Checking &amp; Handover
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    3:12
                  </span>
                </a>
              </div>
            </div>
            {/* Instructor Card */}
            <div className="bg-white dark:bg-text-primary-light rounded-lg p-5 border border-gray-200 dark:border-gray-700 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 shrink-0"
                  data-alt="Instructor avatar, Jane Doe"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0x7JW8p3taSShIZdvvVVHinf_AsbZq3ikUIcvF2AqwJg20xrr-7mULEBN3-X6bDkUgF9_YIa5yidfxDirhRRtTXnvfnLXTSC3GNkYYgsE5koTPKieCF1snPOrvby9kcBkW803izUXpm2QuOAGqpv3BvibVobNbYkXncPPsuXaxRRzXQVtH5WOiPKEKjSB95RJr3LRrhfE2hKaaHNcJAmWoMvW6pGTk91-QapMB_vEy-z5GiuFCKailaI23xFpKvIUOm4WIqBThoY")`,
                  }}
                ></div>
                <div>
                  <h4 className="font-bold text-[#050902] dark:text-white">
                    Jane Doe
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    3 Courses
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Expert Packer with 10+ years of experience helping people move
                efficiently and safely.
              </p>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-700/50 text-[#131910] dark:text-gray-100 text-sm font-bold leading-normal tracking-[0.015em] gap-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
                <span className="truncate">Message Instructor</span>
              </button>
            </div>
            {/* Course Chat */}
            <div className="bg-[#d3fbd8]/40 dark:bg-primary/10 rounded-lg p-5 flex flex-col gap-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                Questions? Ask your instructor here
              </p>
              <div className="grow space-y-3 text-sm">
                {/* Example Message */}
                <div className="flex items-start gap-2.5">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0"
                    data-alt="Student avatar"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuBScawR777JylO-2FTElJiOz9afnZZ7Y-t22xKT-fIrO_ZI05XtP3ZCrx_H4Ei99Q25Gqt8narnyQHDnsqWupYSgFjWBPyXIS-5luHFj3e6dejCjWhvL2NOZNa6wwH5qQUhUHDVXSaBxRGxpRV_AEBPOnUUM1FdRrtIJJsSv3mIHfSnbTIQGFpEKVLMzqGwhvMs3_rRJfLCPHBCnafnbbkOEZkSISAjt5qc8-9rK_TeYIocF576auKOGXJjReqGZ5kYYx3MbUKhQ")`,
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <p className="font-bold text-gray-800 dark:text-gray-200">
                      Alex
                    </p>
                    <div className="bg-white dark:bg-text-primary-light p-2.5 rounded-lg rounded-tl-none">
                      <p className="text-gray-700 dark:text-gray-300">
                        What's the best type of box for fragile items?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-2">
                <input
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-primary focus:border-primary pr-10"
                  placeholder="Type your question..."
                  type="text"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-primary dark:hover:text-primary">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 px-6 sm:px-10 py-4 mt-auto">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li>
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Courses
                </a>
              </li>
              <li>
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Mastering the Art of Packing
                </span>
              </li>
            </ol>
          </nav>
          <button className="flex items-center justify-center p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
