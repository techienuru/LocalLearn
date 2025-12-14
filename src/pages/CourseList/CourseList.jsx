export const CourseList = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-10 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-text-primary-light dark:text-text-primary-dark">
              <span className="material-symbols-outlined text-primary text-3xl">
                school
              </span>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                LocalLearn
              </h2>
            </div>
          </div>
          <div className="hidden md:flex flex-1 justify-center px-8">
            <label className="flex flex-col w-full max-w-lg">
              <div className="relative flex w-full flex-1 items-stretch rounded-lg h-11">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-full placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark pl-10 pr-4 text-base font-normal leading-normal"
                  placeholder="Search courses, instructors, tags..."
                  value=""
                />
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                Mock Data
              </span>
              <button
                aria-checked="true"
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                role="switch"
              >
                <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
              </button>
            </div>
            <button
              aria-label="User profile"
              className="flex items-center justify-center rounded-full h-10 w-10 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
            >
              <span className="material-symbols-outlined text-text-primary-light dark:text-text-primary-dark">
                person
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="grow">
        <div className="container mx-auto px-4 py-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3 items-center mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4">
                <p className="text-sm font-medium">Category</p>
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-primary bg-primary/10 dark:bg-primary/10 border-primary/20 dark:border-primary/20">
                <p className="text-sm font-bold">Newest</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4">
                <p className="text-sm font-medium">Popular</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4">
                <p className="text-sm font-medium">Short (&lt;10m)</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4">
                <p className="text-sm font-medium">Free</p>
              </button>
            </div>
            <div className="grow"></div>
            <button className="h-10 shrink-0 px-4 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
              Clear Filters
            </button>
          </div>
          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Course Card 1 */}
            <div className="flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden transition-shadow hover:shadow-lg">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Close up shot of hands packing vegetables into a box"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDu8LR-UzHvz82dRIvxdISHffy5TV1mAF7zG3j_V8Z0hMeMR4jVPxNVa047ParQn-iHdK335J6Hjnc3HOQXoXaK_C1Vjn7KKB9I9tX_hG-la9BCwI59L8urxrWZodYohERtv7nDFGn4PPqcelozAX4fPAYZM8qVxmVHYqYMoRFXdPrYWvxzw--bpcQvWt_alEKdNomKfOqtjEt4OGDbjAVIpm1znj13bsXnc0SNsSm5K1c2blK1qhsKyjes4XoGZ82zDwhfv9y4FuM")`,
                }}
              ></div>
              <div className="p-4 flex flex-col grow gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-normal">
                    Packing Goods for Safe Delivery
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal mt-1">
                    Learn the best techniques for packing. by Ms. Amina • 12 min
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium">
                    PROGRESS
                  </p>
                  <div className="rounded-full bg-border-light dark:bg-border-dark">
                    <div
                      className="h-1.5 rounded-full bg-primary"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="grow"></div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2.5 rounded-full">
                    #market
                  </span>
                  <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2.5 rounded-full">
                    #packing
                  </span>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-border-light dark:border-border-dark">
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-700">
                    Preview
                  </button>
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold bg-primary text-white hover:bg-primary/90">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            {/* Course Card 2 */}
            <div className="flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden transition-shadow hover:shadow-lg">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="A person wearing yellow gloves and using a spray bottle to clean a market stall."
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2BdSVS-i8FA-mImQ9Uuga_AXniIKZdvs1owxXqeJyXpaHpqiDooqvXWkZSGIaGqvgmdabZxPh-oo9JytvNEuhxFoJK-qhhehclUgmS4gqnANSCu9J0iAHyPpVd0iMEpNnxZOWle4zLJrLt7jXsZlgr1cBsC6HJl2PAM2EuLy9gCfHGs9ynJX2jDAAi-AqkzM79Y22-GIXasNrBp7X6rwedxX5GlBFVhV39N2qEOQB1Ajq7_84OzTNzTi390Ak20DEmzR8_1OhTEQ")`,
                }}
              ></div>
              <div className="p-4 flex flex-col grow gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-normal">
                    Quick Stall Cleaning
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal mt-1">
                    Essential tips for maintaining a clean stall. by Mr. Musa •
                    4 min
                  </p>
                </div>
                <div className="grow"></div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2.5 rounded-full">
                    #cleaning
                  </span>
                  <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2.5 rounded-full">
                    #tips
                  </span>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-border-light dark:border-border-dark">
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-700">
                    Preview
                  </button>
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold bg-primary text-white hover:bg-primary/90">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            {/* Course Card 3 */}
            <div className="flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden transition-shadow hover:shadow-lg">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="A friendly person behind a counter smiling at a customer."
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFX_sQOwGXE7Aqqr-ns2dmB9JNQkUkUH09fbw4EOIKKUSKvkQP8vWcvLynIRW75ufj49AUgD4hw6MC-Cw2Wt4oADnLhnds24H8g-iNFVnXyALzTbMSTvB5dR5B2eqiPUC4LI0DwAYGal6MTVE6AtJ9lv_p-7rkB-4Vj6nu_XvJh5quP5Td9vacd0MGa366RFDWUgUba0gfo3F3BZI0NHPcjEAGSatX_nAo4ZeKHV4_PvnEwLw6DJIkG6lkmlJL2VtdeKhUMketDgI")`,
                }}
              ></div>
              <div className="p-4 flex flex-col grow gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-normal">
                    Customer Service 101
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal mt-1">
                    Master the fundamentals of great customer service. by Mrs.
                    Ngozi • 8 min
                  </p>
                </div>
                <div className="grow"></div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2.5 rounded-full">
                    #service
                  </span>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-border-light dark:border-border-dark">
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-700">
                    Preview
                  </button>
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold bg-primary text-white hover:bg-primary/90">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            {/* Course Card 4 */}
            <div className="flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden transition-shadow hover:shadow-lg">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="A person's hands arranging fresh fruit on a market stall."
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuByomkeVk1Chxm-lUTT89ouAcHa_F_BNdxIG4Bjxg7fwxg-ZtGcYb8vqqk4Uo6IFxHak4hgfWOincffpZyS6EHD4QCxg35B9wrKHgLIIJYHhInGpFjkuZrSuC3SBki90ncjXixeZEOBSsCUyZaOs3jCMKJznKvoyDCvuTJVy_UhbqvJgzpzumH1VPPp0XiYYlZb6wu2CvBzP753_YwMOy3GVkZcvhjcvtXRwqipa6HNl8Tnhg2bgpCHvIWBY5IJVp8_tJ83itbyWPg")`,
                }}
              ></div>
              <div className="p-4 flex flex-col grow gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-normal">
                    Displaying Produce Effectively
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal mt-1">
                    Attract more customers with beautiful displays. by Mr. Chidi
                    • 15 min
                  </p>
                </div>
                <div className="grow"></div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2.5 rounded-full">
                    #merchandising
                  </span>
                  <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2.5 rounded-full">
                    #sales
                  </span>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-border-light dark:border-border-dark">
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-700">
                    Preview
                  </button>
                  <button className="flex-1 flex items-center justify-center rounded h-9 text-sm font-bold bg-primary text-white hover:bg-primary/90">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Empty State Example (commented out, uncomment to view) */}
          {/*
                                <div className="flex flex-col items-center justify-center text-center py-20">
                                        <div className="w-48 h-48 mb-6">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full text-gray-300 dark:text-gray-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75 18 18" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6 9 9" />
                                                </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-xs">Try adjusting your search or filters to find what you're looking for.</p>
                                </div>
                                */}
          {/* Pagination */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-6 border-t border-border-light dark:border-border-dark">
            <div className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 md:mb-0">
              <span>Show</span>
              <select className="form-select rounded-md h-9 border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary/50 focus:border-primary/50">
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
              <span>per page</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                aria-label="Previous page"
                className="flex items-center justify-center rounded h-9 w-9 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark"
              >
                <span className="material-symbols-outlined text-lg">
                  chevron_left
                </span>
              </button>
              <button
                aria-current="page"
                className="flex items-center justify-center rounded h-9 w-9 border border-primary/20 bg-primary/10 text-primary font-bold text-sm"
              >
                1
              </button>
              <button className="flex items-center justify-center rounded h-9 w-9 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm">
                2
              </button>
              <button className="flex items-center justify-center rounded h-9 w-9 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm">
                3
              </button>
              <span className="px-2">...</span>
              <button className="flex items-center justify-center rounded h-9 w-9 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm">
                10
              </button>
              <button
                aria-label="Next page"
                className="flex items-center justify-center rounded h-9 w-9 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark"
              >
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
