import Navbar from "../component/Navbar";
import Card from "../component/Card";
import { createClient } from "@/utils/supabase/server";

interface Announcement {
    id: string;
    title: string;
    content: string;
    created_at: string;
}

export default async function Home() {
    const supabase = await createClient();
    const { data: announcements, error } = await supabase
        .from('announcement')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching announcements:', error);
    }

    return (
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    Pengumuman
                </h2>

                {/* Grid untuk menampilkan cards */}
                <div className="space-y-6">
                    {announcements && announcements.length > 0 ? (
                        announcements.map((announcement: Announcement) => (
                            <Card
                                key={announcement.id}
                                title={announcement.title}
                                content={announcement.content}
                                created_at={announcement.created_at}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400 text-lg">
                                Belum ada pengumuman tersedia.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
