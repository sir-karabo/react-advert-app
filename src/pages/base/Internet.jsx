import React from "react";

const Internet = () => {
  return (
    <>
      <section class="mb-28 text-center">
        <h3 class="mb-10 text-3xl font-semibold text-gray-700 dark:text-white">
          Hosting & Web Packages
        </h3>

        <div class="grid gap-8 lg:grid-cols-3">
          <div class="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 px-7 py-3 dark:border-neutral-600 dark:text-neutral-50">
              <h5 class="mb-4 mt-4 text-lg font-semibold uppercase">Basic</h5>

              <h4 class="mb-4">
                <span class="text-3xl font-bold">$ 129</span>
                <span class="text-gray-500 dark:text-gray-300">/year</span>
              </h4>
              <button
                type="button"
                class="mb-4 inline-block w-full rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-twe-ripple-init
                data-twe-ripple-color="primary"
              >
                Buy
              </button>
            </div>
            <div class="p-7">
              <ul class="text-gray-700 dark:text-white">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Unlimited updates</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Git repository</span>
                </li>

                <li class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>npm installations</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 px-7 py-3 dark:border-neutral-600 dark:text-neutral-50">
              <h5 class="mb-4 mt-4 text-lg font-semibold uppercase">
                Advanced
              </h5>

              <h4 class="mb-4">
                <span class="text-3xl font-bold">$ 299</span>
                <span class="text-gray-500 dark:text-gray-300">/year</span>
              </h4>
              <button
                type="button"
                class="mb-4 inline-block w-full rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Buy
              </button>
            </div>

            <div class="p-7">
              <ul class="text-gray-700 dark:text-white">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Unlimited updates</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Git repository</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>npm installations</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Code examples</span>
                </li>

                <li class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Private snippets</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 px-7 py-3 dark:border-neutral-600 dark:text-neutral-50">
              <h5 class="mb-4 mt-4 text-lg font-semibold uppercase">
                Enterprise
              </h5>

              <h4 class="mb-4">
                <span class="text-3xl font-bold">$ 499</span>
                <span class="text-gray-500 dark:text-gray-300">/year</span>
              </h4>
              <button
                type="button"
                class="mb-4 inline-block w-full rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-twe-ripple-init
                data-twe-ripple-color="primary"
              >
                Buy
              </button>
            </div>

            <div class="p-7">
              <ul class="text-gray-700 dark:text-white">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Unlimited updates</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Git repository</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>npm installations</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Code examples</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Premium snippets</span>
                </li>

                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Premium support</span>
                </li>

                <li class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="me-2 h-6 w-6 text-green-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span>Drag and Drop builder</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internet;
