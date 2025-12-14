import { Diamond, PieChart } from "lucide-react";

const Home = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* TopNavBar Component  */}
      <header className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="size-5 text-primary">
              <Diamond className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold">LocalLearn</h2>
          </div>
          <span className="hidden text-sm text-text-light/60 dark:text-text-dark/60 sm:block">
            /
          </span>
          <p className="text-sm font-medium">Intro to Sustainable Gardening</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <PieChart className="absolute inset-0 h-8 w-8 text-black/10 dark:text-white/10" />
            <span className="text-xs font-bold">25%</span>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col lg:flex-row">
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl">
            {/* MediaPlayer Component  */}
            <div className="group relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-alt="Close-up of green plant leaves with water droplets"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD7Tx2sKxpBGUERwRzrPAiwBa3LcG7YGMbfPNli-JFFZD1Q4uw0I5QvkKi3IkH-oMBQb4JNiU5vRVu6yJgr82reuFCk-97ZVWiyKxEZUPUnzy0Yfpq6mZY9xNe-4gCNzT2j8r3Ch4G48JtR2-CFNpBFD_3SK8eIZnrn2aXj0HhYAbmpNLU2g-ovwaTw2Xr32NesgHCDpKyue84NKBPVDJgYqr9Mdbbdhv3Mb7q03kAN5zdyUEeqlRvVXJUMgw-fC_ka5bi-1NQv5E")`,
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex items-center gap-8">
                  <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/20">
                    <span className="material-symbols-outlined text-4xl">
                      replay_10
                    </span>
                  </button>
                  <button className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm">
                    <span className="material-symbols-outlined text-6xl">
                      play_arrow
                    </span>
                  </button>
                  <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/20">
                    <span className="material-symbols-outlined text-4xl">
                      forward_10
                    </span>
                  </button>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 px-4 py-3 opacity-0 transition-opacity group-hover:opacity-100 bg-linear-to-t from-black/60 to-transparent">
                <div className="flex h-2 w-full cursor-pointer items-center">
                  <div className="h-1 flex-1 rounded-full bg-white/20">
                    <div className="h-1 w-1/4 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-medium tracking-wide">
                      0:37 / 2:23
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-xl">
                        closed_caption
                      </span>
                    </button>
                    <button className="group relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-xl">
                        speed
                      </span>
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-xl">
                        fullscreen
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* HeadlineText and BodyText  */}
            <div className="mt-6">
              <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-3xl">
                Lesson 1: Introduction to Soil Health
              </h1>
              <p className="mt-2 text-base text-text-light/80 dark:text-text-dark/80">
                A brief summary of the lesson's content and what you will learn
                about creating a vibrant foundation for your garden.
              </p>
            </div>
            {/* ListItem (Instructor)  */}
            <div className="mt-6 flex items-center justify-between border-y border-border-light dark:border-border-dark py-4">
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center"
                  data-alt="Portrait of a smiling woman in a garden"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlREAgn3a5WDw3pwsxCfR1198rCV0RD7Kc2GpaaYmfTWR5LxToVFUL9LVWHOX8xEVCA9_mnBjeh7JMZEUxlnfhbXGwqLLFBtp0x2cKvUN2kk1EA8KF4jMu3rT6NGqZbv-LVikcMdGflHNcy0LkNBkLwY-fgogk-ty9nBeuOh_tsxYcFdWh2qyanUq5dg43Bz6As7JV7FKxa_o_VgmjTpGMOHaDECO0qiQ6Wk0oNCBWkSAsxNG6JXWS47VpjoJMKOxXpi48pKwMhS0")`,
                  }}
                ></div>
                <div>
                  <p className="font-semibold">Taught by Jane Doe</p>
                  <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                    Gardening Expert
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5">
                  <span className="material-symbols-outlined">
                    bookmark_border
                  </span>
                </button>
                <button className="h-10 cursor-pointer rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90">
                  Mark as Watched
                </button>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-text-light/60 dark:text-text-dark/60 sm:text-right">
              We save your place automatically.
            </p>
            {/* Course Progress Bar  */}
            <div className="mt-6">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-text-light dark:text-text-dark">
                  Course Progress
                </span>
                <span className="text-text-light/60 dark:text-text-dark/60">
                  4 of 16 lessons complete
                </span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-black/10 dark:bg-white/10">
                <div className="h-2 w-1/4 rounded-full bg-primary"></div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                className="text-sm text-text-light/60 dark:text-text-dark/60 underline hover:text-primary"
                href="#"
              >
                Report an issue
              </a>
            </div>
          </div>
        </div>
        {/* Sidebar/Collapsible Panel  */}
        <aside className="w-full border-t border-border-light dark:border-border-dark lg:w-80 lg:border-l lg:border-t-0 xl:w-96">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Course Lessons</h3>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 lg:hidden">
                <span className="material-symbols-outlined">expand_less</span>
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {/* Lesson List Item (Active)  */}
              <div className="flex cursor-pointer items-center gap-4 rounded-lg bg-primary/20 p-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="material-symbols-outlined text-sm text-white">
                    play_arrow
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">
                    1. Introduction to Soil Health
                  </p>
                  <p className="text-xs text-text-light/80 dark:text-text-dark/80">
                    2:23
                  </p>
                </div>
              </div>
              {/* Lesson List Item (Completed)  */}
              <div className="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-black/5 dark:hover:bg-white/5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="material-symbols-outlined text-sm text-white">
                    check
                  </span>
                </div>
                <div className="flex-1 opacity-60">
                  <p className="font-medium">2. Choosing the Right Pots</p>
                  <p className="text-xs">3:15</p>
                </div>
              </div>
              {/* Lesson List Item (Not Started)  */}
              <div className="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-black/5 dark:hover:bg-white/5">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-text-light/30 dark:border-text-dark/30"></div>
                <div className="flex-1">
                  <p className="font-medium">3. Sunlight and Water Basics</p>
                  <p className="text-xs text-text-light/60 dark:text-text-dark/60">
                    4:02
                  </p>
                </div>
              </div>
              <div className="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-black/5 dark:hover:bg-white/5">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-text-light/30 dark:border-text-dark/30"></div>
                <div className="flex-1">
                  <p className="font-medium">4. Understanding Fertilizers</p>
                  <p className="text-xs text-text-light/60 dark:text-text-dark/60">
                    5:50
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-border-light dark:border-border-dark pt-4">
              <label className="text-sm font-medium" htmlFor="low-data-mode">
                Low data mode
              </label>
              <button
                aria-checked="false"
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                id="low-data-mode"
                role="switch"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"
                ></span>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};
export default Home;
