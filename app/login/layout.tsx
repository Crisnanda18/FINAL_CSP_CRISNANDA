import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        // Jika sudah login, redirect ke dashboard
        if (user) {
            redirect('/dashboard')
        }
    } catch (error) {
        console.error('Auth check error:', error)
    }

    return <>{children}</>
}
