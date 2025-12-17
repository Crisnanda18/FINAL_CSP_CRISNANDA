export default function Toast({ message, type, onClose }: {
    message: string;
    type: 'success' | 'error';
    onClose: () => void
}) {
    return (
        <div className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg text-white flex items-center gap-3 transition-all animate-bounce
      ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
            <span>{type === 'success' ? '✅' : '❌'}</span>
            <p className="font-medium">{message}</p>
            <button onClick={onClose} className="ml-4 text-white/80 hover:text-white">✕</button>
        </div>
    )
}