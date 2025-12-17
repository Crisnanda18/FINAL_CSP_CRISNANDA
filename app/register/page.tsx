'use client'
import { useState } from 'react'
import { handleSignUp } from '../actions/auth'
import Toast from '../component/Toast'

export default function RegisterPage() {
    const [notification, setNotification] = useState<{ msg: string, type: 'success' | 'error' } | null>(null)

    async function clientAction(formData: FormData) {
        const result = await handleSignUp(formData)
        if (result?.error) {
            setNotification({ msg: result.error, type: 'error' })
            setTimeout(() => setNotification(null), 3000)
        } else if (result?.success) {
            setNotification({ msg: "Registrasi Berhasil! Silakan cek email Anda untuk verifikasi.", type: 'success' })
            setTimeout(() => {
                setNotification(null)
                window.location.href = '/login'
            }, 2000)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">
            {notification && (
                <Toast message={notification.msg} type={notification.type} onClose={() => setNotification(null)} />
            )}

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-slate-200">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Daftar Akun</h1>
                <p className="text-slate-500 mb-6">Mulai buat profil diri Anda sekarang.</p>

                <form action={clientAction} className="space-y-4">
                    <div>
                        <label className="block text-black text-sm font-semibold mb-1">Email</label>
                        <input name="email" type="email" required className="w-full p-3 border border-gray-400 rounded-lg focus:outline-blue-500 text-black" placeholder="nama@email.com" />
                    </div>
                    <div>
                        <label className="block text-black text-sm font-semibold mb-1">Password</label>
                        <input name="password" type="password" required className="w-full p-3 border border-gray-400 rounded-lg focus:outline-blue-500 text-black" placeholder="••••••••" />
                    </div>
                    <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition">
                        Daftar
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-black">Sudah punya akun? <a href="/login" className="text-blue-600 ">Login</a></p>
            </div>
        </div>
    )
}