export default function PostListSkeleton() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6">Loading posts...</h2>
            <div className="space-y-6 animate-pulse">
                {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-5">
                    <div className="h-5 bg-gray-300 rounded w-2/3 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
                ))}
            </div>
        </div>
    );
}