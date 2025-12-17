interface CardProps {
    title: string;
    content: string;
    created_at: string;
}

export default function Card({ title, content, created_at }: CardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
            {/* Header dengan Title dan Tanggal */}
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex-1">
                    {title}
                </h3>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {formatDate(created_at)}
                </span>
            </div>

            {/* Content */}
            <p className="text-gray-600 leading-relaxed">
                {content}
            </p>
        </div>
    );
}
