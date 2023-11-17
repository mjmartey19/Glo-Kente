import React from "react";

const PlanBilling = ({ active }) => {
  return (
   
  <div>
     {active === 'billing' && (
      <div class=" bg-[#fff] w-full p-5 pt-10 rounded">
        <section >
    
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-1">
            <div class="mb-6 lg:mb-0">
            <div class="block h-full rounded-lg border border-yellow-300 bg-yellow-50 hover:bg-yellow-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p class="mb-4 text-sm uppercase ">
                    <strong>Free</strong>
                  </p>
                  <h3 class="mb-6 text-3xl">
                  <strong>$ 0</strong>
                    <small class="text-sm text-neutral-500 dark:text-neutral-300">
                      /month
                    </small>
                  </h3>

                  <button
                    type="button"
                    class="inline-block w-full rounded bg-black/10 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black/70 transition duration-150 ease-in-out focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 cursor-not-allowed"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Current Plan
                  </button>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                    <li class="mb-4 flex items-start text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      5 editable documents
                    </li>
                    <li class="mb-4 flex items-start text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 w-5 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      50 templates
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="block h-full rounded-lg  border">
                <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p class="mb-4 text-sm uppercase">
                    <strong>Individual</strong>
                  </p>
                  <h3 class="mb-6 text-3xl">
                    <strong>$ 10</strong>
                    <small class="text-sm text-neutral-500 dark:text-neutral-300">
                      /month
                    </small>
                  </h3>

                  <a href="/buyPlan"
                    type="button"
                    class="inline-block w-full rounded bg-yellow-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-yellow-200 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 cursor-pointer"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Buy Now
                  </a>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                  <li class="mb-4 flex text-sm items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited editable documents
                    </li>
                    <li class="mb-4 flex text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium shape libraries
                    </li>
                    <li class="mb-4 flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium templates
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="block h-full rounded-lg border bg-white">
                <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p class="mb-4 text-sm uppercase">
                    <strong>Team</strong>
                  </p>
                  <h3 class="mb-6 text-3xl">
                    <strong>$ 15</strong>
                    <small class="text-sm text-neutral-500 dark:text-neutral-300">
                      /month
                    </small>
                  </h3>

                  <a href="/buyPlan"
                    type="button"
                    class="inline-block w-full rounded bg-yellow-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-yellow-200 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 cursor-pointer"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Buy Now
                  </a>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                  <li class="mb-4 flex text-sm items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited editable documents
                    </li>
                    <li class="mb-4 flex text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium shape libraries
                    </li>
                    <li class="mb-4 flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium templates
                    </li>
                    <li class="mb-4 flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Password protected publishing
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="block h-full rounded-lg bg-white border">
                <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p class="mb-4 text-sm uppercase">
                    <strong>Enterprise</strong>
                  </p>
                  <h3 class="mb-6 text-3xl">
                    <strong>$ 20</strong>
                    <small class="text-sm">
                      /month
                    </small>
                  </h3>

                  <a href="/buyPlan"
                    type="button"
                    class="inline-block w-full rounded bg-yellow-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-yellow-200 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 cursor-pointer"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Buy Now
                  </a>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                  <li class="mb-4 flex text-sm items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited editable documents
                    </li>
                    <li class="mb-4 flex text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium shape libraries
                    </li>
                    <li class="mb-4 flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium templates
                    </li>
                    <li class="mb-4 flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Password protected publishing
                    </li>
                    <li class="mb-4 flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Team Folders
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    )}
  </div>
  )

};

export default PlanBilling;
