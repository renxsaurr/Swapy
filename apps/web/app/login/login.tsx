'use client';

import { useState } from 'react';

type AuthMode = 'sign-in' | 'sign-up';

export default function Home() {
  const [mode, setMode] = useState<AuthMode>('sign-in');
  const [isDemoSignedIn, setIsDemoSignedIn] = useState(false);

  if (isDemoSignedIn) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f5f0] p-6">
        <section className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl text-emerald-800">
            ✓
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Demo session
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">
            You’re signed in
          </h1>
          <p className="mt-3 text-slate-600">
            Welcome, Demo Member. This is only a screen preview; the API has not
            authenticated you yet.
          </p>
          <button
            type="button"
            onClick={() => setIsDemoSignedIn(false)}
            className="mt-8 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Sign out of demo
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f5f0] p-4 sm:p-8">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-4xl bg-white shadow-2xl lg:grid-cols-2">
        <aside className="flex min-h-75 flex-col justify-between bg-[#123f38] p-8 text-white sm:p-12 lg:min-h-170">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#d6f36a] text-xl font-black text-[#123f38]">
              s
            </span>
            <span className="text-2xl font-semibold">swapy</span>
          </div>

          <div className="mt-12 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d6f36a]">
              A marketplace built around exchange
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Turn what you have into what you want.
            </h1>
            <p className="mt-5 max-w-sm leading-7 text-emerald-50/75">
              Find useful things, offer what you have, and make a deal that
              works for both sides.
            </p>
          </div>

          <p className="mt-12 text-sm text-emerald-50/60 lg:mt-0">
            Better finds start with a good swap.
          </p>
        </aside>

        <section className="flex items-center justify-center p-6 sm:p-12 lg:p-14">
          <div className="w-full max-w-md">
            <p className="text-sm font-semibold text-emerald-800">
              Welcome to SWAPY
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              {mode === 'sign-in'
                ? 'Sign in to your account'
                : 'Create your account'}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {mode === 'sign-in'
                ? 'Pick up where you left off and see what you can swap.'
                : 'Join the community and start turning your listings into possibilities.'}
            </p>

            <div className="mt-8 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                aria-pressed={mode === 'sign-in'}
                onClick={() => setMode('sign-in')}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  mode === 'sign-in'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign in
              </button>
              <button
                type="button"
                aria-pressed={mode === 'sign-up'}
                onClick={() => setMode('sign-up')}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  mode === 'sign-up'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign up
              </button>
            </div>

            {mode === 'sign-in' ? (
              <div className="mt-6">
                <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  <strong>Demo mode:</strong> These fields are only a preview.
                  They are disabled and won’t be sent anywhere.
                </p>

                <div className="mt-6 space-y-4 opacity-60">
                  <label className="block text-sm font-medium text-slate-700">
                    Email address
                    <input
                      type="email"
                      disabled
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                    <input
                      type="password"
                      disabled
                      placeholder="Available when authentication is connected"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  onClick={() => setIsDemoSignedIn(true)}
                  className="mt-6 w-full rounded-xl bg-[#123f38] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#19564c]"
                >
                  Continue as demo member
                </button>
              </div>
            ) : (
              <div className="mt-6">
                <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  Sign-up is a preview for now. We’ll connect account creation
                  after the sign-in flow is ready.
                </p>

                <div className="mt-6 space-y-4 opacity-50">
                  <label className="block text-sm font-medium text-slate-700">
                    Display name
                    <input
                      type="text"
                      disabled
                      placeholder="How should members see you?"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700">
                    Email address
                    <input
                      type="email"
                      disabled
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                    <input
                      type="password"
                      disabled
                      placeholder="Available when authentication is connected"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  disabled
                  className="mt-6 w-full cursor-not-allowed rounded-xl bg-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-500"
                >
                  Sign up is not connected yet
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}