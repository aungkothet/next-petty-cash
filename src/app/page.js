import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Petty Cash By Andrew</h1>
      <div class="container h-full px-6 py-24">
        <div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={`/login.svg`} class="w-full" alt="Phone image" />
          </div>

          <div class="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form autoComplete="off">
              <div class="relative mb-6">
                <label
                  htmlFor="email"
                  className="text-primary dark:text-primary-400"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="false"
                    className="block min-h-[auto] w-full rounded bg-transparent  px-3 py-[0.32rem] leading-[2.15]   dark:text-white dark:placeholder:text-gray-500 dark:border-2"
                    placeholder="abc@gmail.com"
                  />
                </div>
              </div>

              <div class="relative mb-6">
                <label
                  htmlFor="password"
                  className="text-primary dark:text-primary-400"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="false"
                    className="block min-h-[auto] w-full rounded bg-transparent  px-3 py-[0.32rem] leading-[2.15]   dark:text-white dark:placeholder:text-gray-500 dark:border-2"
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>

              <div class="mb-6 flex items-center justify-between">
                <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                  <input
                    class="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] "
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                  />
                  <label
                    class="inline-block ps-[0.15rem] hover:cursor-pointer"
                    for="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#!"
                  class="text-primary focus:outline-none dark:text-primary-400"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="button"
                class=" w-full rounded bg-primary dark:bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 dark:hover:bg-blue-700 "
              >
                Sign in
              </button>

              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <a
                class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-small uppercase leading-normal text-black shadow-primary-3 bg-slate-200 hover:bg-slate-300"
                href="#!"
                role="button"
              >
                <span class="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.98em"
                    height="1em"
                    viewBox="0 0 256 262"
                  >
                    <path
                      fill="#4285f4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    />
                    <path
                      fill="#34a853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    />
                    <path
                      fill="#fbbc05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                    />
                    <path
                      fill="#eb4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    />
                  </svg>
                </span>
                Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
