// app/login/page.tsx
'use client'
import { useState } from 'react'
import { handleLogin } from '../actions/auth'
import Toast from '../component/Toast'

export default function LoginPage() {
    const [notification, setNotification] = useState<{ msg: string, type: 'success' | 'error' } | null>(null)
    const [loading, setLoading] = useState(false)

    async function clientAction(formData: FormData) {
        setLoading(true)
        const result = await handleLogin(formData)

        if (result?.error) {
            setNotification({ msg: result.error, type: 'error' })
            setLoading(false)
        } else {
            setNotification({ msg: "Login Berhasil! Mengalihkan...", type: 'success' })
            // redirect dilakukan otomatis oleh Server Action handleLogin
        }

        setTimeout(() => setNotification(null), 3000)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">
            {notification && (
                <Toast
                    message={notification.msg}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-slate-200">
                <div className="text-left mb-8">
                    <h1 className="text-2xl font-semibold text-slate-800">Selamat Datang</h1>
                    <p className="text-slate-500 text-lg mt-3">Silakan login untuk masuk ke profil Anda</p>
                </div>

                <form action={clientAction} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-slate-700">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="text-black w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="nama@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-slate-700">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="text-black w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className={`w-full text-white font-bold py-3 rounded-lg transition shadow-lg 
              ${loading ? 'bg-slate-400' : 'bg-black hover:bg-gray-800 shadow-blue-100'}`}
                    >
                        {loading ? 'Memproses...' : 'Masuk Sekarang'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                    Belum punya akun?{' '}
                    <a href="/register" className="text-blue-600">
                        Daftar Gratis
                    </a>
                </div>

                
            </div>
        </div>
    )
}