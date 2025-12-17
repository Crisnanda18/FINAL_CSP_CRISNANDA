import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            redirect('/login')
        }
    } catch (error) {
        console.error('Auth check error:', error)
        redirect('/login')
    }

    return <>{children}</>
}
