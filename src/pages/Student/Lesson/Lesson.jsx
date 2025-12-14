import { Diamond, PieChart } from "lucide-react";

const LessonPlayer = () => {
  return (
    <div class="relative flex min-h-screen w-full flex-col">
      {/* TopNavBar Component  */}
      <header class="sticky top-0 z-10 flex w-full items-center justify-between border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <div class="hidden items-center gap-2 sm:flex">
            <div class="size-5 text-primary">
              <Diamond className="h-5 w-5" />
            </div>
            <h2 class="text-lg font-bold">LocalLearn</h2>
          </div>
          <span class="hidden text-sm text-text-light/60 dark:text-text-dark/60 sm:block">
            /
          </span>
          <p class="text-sm font-medium">Intro to Sustainable Gardening</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="relative flex h-8 w-8 items-center justify-center">
            <PieChart className="absolute inset-0 h-8 w-8 text-black/10 dark:text-white/10" />
            <span class="text-xs font-bold">25%</span>
          </div>
        </div>
      </header>
      <main class="flex flex-1 flex-col lg:flex-row">
        <div class="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div class="mx-auto max-w-4xl">
            {/* MediaPlayer Component  */}
            <div class="group relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg">
              <div
                class="absolute inset-0 bg-cover bg-center"
                data-alt="Close-up of green plant leaves with water droplets"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD7Tx2sKxpBGUERwRzrPAiwBa3LcG7YGMbfPNli-JFFZD1Q4uw0I5QvkKi3IkH-oMBQb4JNiU5vRVu6yJgr82reuFCk-97ZVWiyKxEZUPUnzy0Yfpq6mZY9xNe-4gCNzT2j8r3Ch4G48JtR2-CFNpBFD_3SK8eIZnrn2aXj0HhYAbmpNLU2g-ovwaTw2Xr32NesgHCDpKyue84NKBPVDJgYqr9Mdbbdhv3Mb7q03kAN5zdyUEeqlRvVXJUMgw-fC_ka5bi-1NQv5E");'
              ></div>
              <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div class="flex items-center gap-8">
                  <button class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/20">
                    <span class="material-symbols-outlined text-4xl">
                      replay_10
                    </span>
                  </button>
                  <button class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm">
                    <span class="material-symbols-outlined text-6xl">
                      play_arrow
                    </span>
                  </button>
                  <button class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/20">
                    <span class="material-symbols-outlined text-4xl">
                      forward_10
                    </span>
                  </button>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 px-4 py-3 opacity-0 transition-opacity group-hover:opacity-100 bg-linear-to-t from-black/60 to-transparent">
                <div class="flex h-2 w-full cursor-pointer items-center">
                  <div class="h-1 flex-1 rounded-full bg-white/20">
                    <div class="h-1 w-1/4 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between text-white">
                  <div class="flex items-center gap-3">
                    <p class="text-xs font-medium tracking-wide">0:37 / 2:23</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <button class="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
                      <span class="material-symbols-outlined text-xl">
                        closed_caption
                      </span>
                    </button>
                    <button class="group relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
                      <span class="material-symbols-outlined text-xl">
                        speed
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
                      <span class="material-symbols-outlined text-xl">
                        fullscreen
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* HeadlineText and BodyText  */}
            <div class="mt-6">
              <h1 class="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-3xl">
                Lesson 1: Introduction to Soil Health
              </h1>
              <p class="mt-2 text-base text-text-light/80 dark:text-text-dark/80">
                A brief summary of the lesson's content and what you will learn
                about creating a vibrant foundation for your garden.
              </p>
            </div>
            {/* ListItem (Instructor)  */}
            <div class="mt-6 flex items-center justify-between border-y border-border-light dark:border-border-dark py-4">
              <div class="flex items-center gap-4">
                <div
                  class="h-12 w-12 rounded-full bg-cover bg-center"
                  data-alt="Portrait of a smiling woman in a garden"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlREAgn3a5WDw3pwsxCfR1198rCV0RD7Kc2GpaaYmfTWR5LxToVFUL9LVWHOX8xEVCA9_mnBjeh7JMZEUxlnfhbXGwqLLFBtp0x2cKvUN2kk1EA8KF4jMu3rT6NGqZbv-LVikcMdGflHNcy0LkNBkLwY-fgogk-ty9nBeuOh_tsxYcFdWh2qyanUq5dg43Bz6As7JV7FKxa_o_VgmjTpGMOHaDECO0qiQ6Wk0oNCBWkSAsxNG6JXWS47VpjoJMKOxXpi48pKwMhS0");'
                ></div>
                <div>
                  <p class="font-semibold">Taught by Jane Doe</p>
                  <p class="text-sm text-text-light/60 dark:text-text-dark/60">
                    Gardening Expert
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5">
                  <span class="material-symbols-outlined">bookmark_border</span>
                </button>
                <button class="h-10 cursor-pointer rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90">
                  Mark as Watched
                </button>
              </div>
            </div>
            <p class="mt-2 text-center text-xs text-text-light/60 dark:text-text-dark/60 sm:text-right">
              We save your place automatically.
            </p>
            {/* Course Progress Bar  */}
            <div class="mt-6">
              <div class="flex justify-between text-sm font-medium">
                <span class="text-text-light dark:text-text-dark">
                  Course Progress
                </span>
                <span class="text-text-light/60 dark:text-text-dark/60">
                  4 of 16 lessons complete
                </span>
              </div>
              <div class="mt-2 h-2 w-full rounded-full bg-black/10 dark:bg-white/10">
                <div class="h-2 w-1/4 rounded-full bg-primary"></div>
              </div>
            </div>
            <div class="mt-6 text-center">
              <a
                class="text-sm text-text-light/60 dark:text-text-dark/60 underline hover:text-primary"
                href="#"
              >
                Report an issue
              </a>
            </div>
          </div>
        </div>
        {/* Sidebar/Collapsible Panel  */}
        <aside class="w-full border-t border-border-light dark:border-border-dark lg:w-80 lg:border-l lg:border-t-0 xl:w-96">
          <div class="p-4 sm:p-6">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-bold">Course Lessons</h3>
              <button class="flex h-8 w-8 items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 lg:hidden">
                <span class="material-symbols-outlined">expand_less</span>
              </button>
            </div>
            <div class="mt-4 space-y-2">
              {/* Lesson List Item (Active)  */}
              <div class="flex cursor-pointer items-center gap-4 rounded-lg bg-primary/20 p-3">
                <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <span class="material-symbols-outlined text-sm text-white">
                    play_arrow
                  </span>
                </div>
                <div class="flex-1">
                  <p class="font-semibold">1. Introduction to Soil Health</p>
                  <p class="text-xs text-text-light/80 dark:text-text-dark/80">
                    2:23
                  </p>
                </div>
              </div>
              {/* Lesson List Item (Completed)  */}
              <div class="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-black/5 dark:hover:bg-white/5">
                <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <span class="material-symbols-outlined text-sm text-white">
                    check
                  </span>
                </div>
                <div class="flex-1 opacity-60">
                  <p class="font-medium">2. Choosing the Right Pots</p>
                  <p class="text-xs">3:15</p>
                </div>
              </div>
              {/* Lesson List Item (Not Started)  */}
              <div class="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-black/5 dark:hover:bg-white/5">
                <div class="h-6 w-6 shrink-0 rounded-full border-2 border-text-light/30 dark:border-text-dark/30"></div>
                <div class="flex-1">
                  <p class="font-medium">3. Sunlight and Water Basics</p>
                  <p class="text-xs text-text-light/60 dark:text-text-dark/60">
                    4:02
                  </p>
                </div>
              </div>
              <div class="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-black/5 dark:hover:bg-white/5">
                <div class="h-6 w-6 shrink-0 rounded-full border-2 border-text-light/30 dark:border-text-dark/30"></div>
                <div class="flex-1">
                  <p class="font-medium">4. Understanding Fertilizers</p>
                  <p class="text-xs text-text-light/60 dark:text-text-dark/60">
                    5:50
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between border-t border-border-light dark:border-border-dark pt-4">
              <label class="text-sm font-medium" for="low-data-mode">
                Low data mode
              </label>
              <button
                aria-checked="false"
                class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                id="low-data-mode"
                role="switch"
              >
                <span
                  aria-hidden="true"
                  class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"
                ></span>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default LessonPlayer;
