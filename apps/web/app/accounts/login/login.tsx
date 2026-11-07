'use client';
import {useState} from "react";

export default function Login() {
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="fixed inset-0 grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden lg:grid-cols-2 lg:grid-rows-1">
      <aside aria-label="SWAPY marketplace artwork" className="relative h-36 overflow-hidden bg-[#FF5A00] sm:h-44 md:h-52 lg:h-full">
        <svg
          aria-hidden="true"
          viewBox="0 0 960 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <pattern id="mosaic-dots" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#FFF4E6" opacity="0.4" />
            </pattern>
          </defs>

          <rect width="960" height="900" fill="#FF5A00" />

          <rect width="320" height="255" fill="#FF7A1A" />
          <circle cx="0" cy="0" r="205" fill="#FFB16B" />
          <circle cx="0" cy="0" r="132" fill="#FF5A00" />
          <path d="M0 220c91-95 194-144 320-148v183H0Z" fill="#E94D00" opacity="0.78" />

          <rect x="320" width="320" height="255" fill="#003B36" />
          <rect x="320" width="320" height="255" fill="url(#mosaic-dots)" opacity="0.45" />
          <path d="m380 54 27-27 27 27-27 27Zm49 0 27-27 27 27-27 27Z" fill="#FFB16B" />
          <rect x="405" y="112" width="150" height="40" fill="#00B8A9" />
          <rect x="405" y="112" width="30" height="40" fill="#FFF4E6" />
          <rect x="465" y="112" width="30" height="40" fill="#FFF4E6" />
          <rect x="525" y="112" width="30" height="40" fill="#FFF4E6" />
          <rect x="413" y="152" width="134" height="59" fill="#FFF4E6" />
          <rect x="424" y="163" width="48" height="48" fill="#087F77" />
          <rect x="484" y="163" width="52" height="48" fill="#FFB16B" />
          <circle cx="526" cy="187" r="3" fill="#003B36" />

          <rect x="640" width="320" height="255" fill="#00B8A9" />
          <path d="M640 0h160l160 127-160 128H640l160-128Z" fill="#087F77" />
          <path d="M800 0v255M640 127h320" stroke="#7BE4D6" strokeWidth="3" opacity="0.65" />
          <path d="M665 32c48 22 48 64 0 86m0-63c29 14 29 39 0 52m0-30c12 6 12 15 0 21" fill="none" stroke="#FFF4E6" strokeWidth="5" />
          <text x="480" y="241" textAnchor="middle" fill="#FFF4E6" fontSize="16" fontWeight="700" letterSpacing="2" fontFamily="Arial, Helvetica, sans-serif">MY STORE</text>

          <rect y="255" width="960" height="320" fill="#006C66" />
          <rect y="255" width="960" height="320" fill="url(#mosaic-dots)" opacity="0.34" />
          <path d="M0 255h320v320H0Z" fill="#07564F" />
          <path d="M320 255h320v320H320Z" fill="#087F77" />
          <path d="M640 255h320v320H640Z" fill="#00514C" />

          <path d="m59 390 43-49 43 49Zm0 47 43-49 43 49Z" fill="#FFB16B" />
          <path d="M177 351 201 333h35l24 18 21 37-25 13-16-19v79h-72v-79l-16 19-25-13Z" fill="#FFF4E6" />
          <path d="M211 335v28m16-28v28" stroke="#00B8A9" strokeWidth="7" />
          <text x="212" y="520" textAnchor="middle" fill="#FFF4E6" fontSize="19" fontWeight="700" letterSpacing="2" fontFamily="Arial, Helvetica, sans-serif">ITEMS</text>

          <path d="m412 383 68-57 68 57v83H412Z" fill="#FFF4E6" />
          <path d="m396 386 84-71 84 71" fill="none" stroke="#FFB16B" strokeWidth="19" strokeLinejoin="round" />
          <rect x="463" y="407" width="35" height="59" fill="#00B8A9" />
          <rect x="428" y="393" width="22" height="22" rx="4" fill="#FF5A00" />
          <rect x="510" y="393" width="22" height="22" rx="4" fill="#FF5A00" />
          <text x="480" y="520" textAnchor="middle" fill="#FFF4E6" fontSize="19" fontWeight="700" letterSpacing="2" fontFamily="Arial, Helvetica, sans-serif">HOMES</text>

          <circle cx="770" cy="392" r="70" fill="#00B8A9" opacity="0.55" />
          <path d="M745 425 804 366m-43 0h43v43" fill="none" stroke="#FFF4E6" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M699 467h152" stroke="#FFB16B" strokeWidth="8" strokeLinecap="round" />
          <text x="770" y="520" textAnchor="middle" fill="#FFF4E6" fontSize="17" fontWeight="700" letterSpacing="1.5" fontFamily="Arial, Helvetica, sans-serif">SERVICES</text>

          <rect y="575" width="960" height="190" fill="#FF7A1A" />
          <path d="M0 702h960M0 725h960M0 748h960" stroke="#D94B00" strokeWidth="5" />
          <path d="m145 610 28-32 28 32v87h-56Z" fill="#003B36" />
          <path d="M127 610h92v28h-92Z" fill="#FFF4E6" />
          <path d="M127 610h23l-8 28h-15Zm23 0h23v28h-31Zm23 0h23v28h-31Zm23 0h23v28h-31Z" fill="#00B8A9" />
          <rect x="158" y="652" width="20" height="25" fill="#FFB16B" />
          <text x="296" y="635" textAnchor="end" fill="#003B36" fontSize="17" fontWeight="800" letterSpacing="1.5" fontFamily="Arial, Helvetica, sans-serif">GARAGE</text>
          <text x="296" y="659" textAnchor="end" fill="#003B36" fontSize="17" fontWeight="800" letterSpacing="1.5" fontFamily="Arial, Helvetica, sans-serif">SALES</text>

          <path d="m340 641 17 35 39 5-28 27 7 39-35-19-35 19 7-39-28-27 39-5Z" fill="#FFF4E6" />
          <path d="M508 626v93m-42-47h84m-71-33 58 66m0-66-58 66" stroke="#006C66" strokeWidth="7" strokeLinecap="round" />
          <circle cx="508" cy="626" r="11" fill="#FFF4E6" />
          <circle cx="466" cy="672" r="9" fill="#FFF4E6" />
          <circle cx="550" cy="672" r="9" fill="#FFF4E6" />
          <circle cx="479" cy="639" r="8" fill="#FFF4E6" />
          <circle cx="537" cy="705" r="8" fill="#FFF4E6" />

          <rect y="765" width="960" height="135" fill="#003B36" />
          <path d="M560 801h400M560 824h400" stroke="#087F77" strokeWidth="4" />
          <text x="58" y="815" fill="#FFF4E6" fontSize="42" fontWeight="800" letterSpacing="5" fontFamily="Arial, Helvetica, sans-serif">
            SWAPY
          </text>
          <text x="60" y="851" fill="#7BE4D6" fontSize="17" fontWeight="600" fontFamily="Arial, Helvetica, sans-serif">
            Turn what you have into what you want.
          </text>
          <path d="M590 900c0-115 66-170 183-170h187v170Z" fill="#00B8A9" />
          <path d="M674 900c0-74 39-114 113-114h173" fill="none" stroke="#FFF4E6" strokeWidth="4" opacity="0.78" />
          <path d="M754 812h74l-8 57h-58Z" fill="#FFF4E6" />
          <path d="M772 812v-15a19 19 0 0 1 38 0v15" fill="none" stroke="#FFF4E6" strokeWidth="8" />
          <path d="M776 836h30" stroke="#FF5A00" strokeWidth="7" strokeLinecap="round" />
        </svg>
      </aside>

{/* LOGIN FORM*/}  
      <section className={`min-h-0 overflow-y-auto overscroll-contain bg-white px-5 py-7 sm:px-8 sm:py-9 lg:flex lg:justify-center lg:px-8 lg:py-4 ${mode === 'sign-in' ? 'accounts-login-sign-in-panel' : ''}`}>
        <div className="mx-auto flex w-full max-w-lg flex-col items-center pb-6 lg:my-auto lg:pb-3">
        <h1 className="mt-4 w-full px-2 pt-1 text-center text-2xl font-bold sm:px-6 sm:pt-0 sm:text-3xl lg:mt-0">
          {mode === 'sign-in' ? 'Sign in to your account' : 'Create your account'}
        </h1>
        <p className="flex w-full justify-center px-2 pt-3 text-center text-sm text-gray-400 sm:px-6 sm:text-base">
          {mode === 'sign-in'
            ? 'Pick up where you left off and see what you can swap'
            : 'Join your community and start swapping with Swapy'}
        </p>

        <form onSubmit={(event) => event.preventDefault()} className="flex w-full flex-col justify-center px-1 pt-6 sm:px-6 md:px-10 lg:px-8 lg:pt-4 xl:px-14">

          {mode === 'sign-up' && (
            <div className="mb-6">
              <label htmlFor="display-name" className="mb-2 block font-bold text-black">Name</label>
              <input
                type="text"
                id="display-name"
                name="display-name"
                autoComplete="name"
                required
                className="w-full rounded border border-gray-300 py-2 pl-3 pr-11 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8A9]"
              />
            </div>
          )}

          <div className="mb-6 lg:mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" autoComplete="email" required className="w-full rounded border border-gray-300 py-2 pl-3 pr-11 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8A9]" />
          </div>

          <div className="mb-4 lg:mb-3">
            <label htmlFor="password" className="mb-2 block font-bold text-black"> Password </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'} required className="w-full rounded border border-gray-300 py-2 pl-3 pr-11 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8A9]"/>
                  <button type="button" onClick={() => setShowPassword((current) => !current)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword}
                          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-[#003B36] cursor-pointer">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
                      <path d="M2.25 12s3.5-6 9.75-6 9.75 6 9.75 6-3.5 6-9.75 6-9.75-6-9.75-6Z" />
                        <circle cx="12" cy="12" r="2.5" />
                        {showPassword && <path d="m3 3 18 18" />}
                    </svg>
                  </button>
            </div>
          </div>

          {mode === 'sign-up' ? (
            <div className="mb-6">
              <label htmlFor="confirm-password" className="mb-2 block font-bold text-black">Confirm password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                autoComplete="new-password"
                required
                className="w-full rounded border border-gray-300 py-2 pl-3 pr-11 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8A9]"
              />
            </div>
          ) : (
            <div className="mb-6 flex items-center justify-between gap-2 text-xs lg:mb-4">
              <label htmlFor="remember-me" className="flex items-center gap-2">
                <input type="checkbox" id="remember-me" name="remember-me" className="size-4 accent-[#FF5A00] cursor-pointer"/>
                <span className="text-gray-500 text-sm font-medium cursor-pointer">Remember Me</span>
              </label>

              <button type="button" className="text-sm font-medium text-[#FF5A00] hover:underline cursor-pointer">Forgot your password?</button>
            </div>
          )}

          <div className="mb-4 mt-2 flex justify-center lg:mb-2 lg:mt-1">
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full cursor-pointer">
              {mode === 'sign-in' ? 'Sign In' : 'Create Account'}
            </button>
          </div>

        </form>

        <div className="mx-auto my-4 flex w-full max-w-sm items-center gap-3 text-xs text-gray-400 lg:my-3">
          <span className="h-px flex-1 bg-gray-300" />
          <span className="text-center text-sm font-medium text-gray-500">Or {mode === 'sign-in' ? 'login' : 'sign up'} with</span>
          <span className="h-px flex-1 bg-gray-300" />
        </div>

        <div className="mx-auto mt-3 grid w-full max-w-sm grid-cols-2 gap-2 sm:gap-3 lg:mt-2">
          <button type="button" className="flex items-center justify-center gap-2 rounded border border-gray-300 bg-white py-2.5 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.05 5.05 0 0 1-2.2 3.31v2.77h3.57c2.09-1.92 3.27-4.74 3.27-8.09Z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.99 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.05-3.71 1.05-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84A11 11 0 0 0 12 23Z" />
                <path fill="#FBBC05" d="M5.84 13.09a6.6 6.6 0 0 1 0-4.18V6.07H2.16a11 11 0 0 0 0 9.86l3.68-2.84Z" />
                <path fill="#EA4335" d="M12 4.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.74 0 4.06 2.44 2.16 6.07l3.68 2.84C6.71 6.31 9.14 4.38 12 4.38Z" />
              </svg>
            <span>Google</span>
          </button>

          <button type="button" className="flex items-center justify-center gap-2 rounded border border-gray-300 bg-white py-2.5 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0 text-black">
                <path d="M16.6 13.1c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.1-.9-1.6 0-3.1 1-4 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 2.9 2.4 1.2-.1 1.6-.8 3.1-.8 1.4 0 1.9.8 3.1.8 1.3 0 2.1-1.2 2.8-2.4.9-1.4 1.3-2.8 1.3-2.9-.1 0-2.2-.9-2.2-3.5ZM14.2 6c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-1 2.6 1 .1 2-.5 2.7-1.2Z" />
              </svg>
              <span>Apple</span>
          </button>
        </div>

        <p className="mt-8 px-2 text-center text-gray-500 text-sm font-medium lg:mt-4">
          {mode === 'sign-in' ? 'Don’t have an account?' : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'sign-in' ? 'sign-up' : 'sign-in');
              setShowPassword(false);
            }}
            className="font-medium text-[#FF5A00] hover:underline cursor-pointer"
          >
            {mode === 'sign-in' ? 'Register Now.' : 'Sign in.'}
          </button>
        </p>

        </div>
      </section>
{/* LOGIN FORM END*/}
    </main>
  );
}
