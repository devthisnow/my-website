export default function MyComponent() {
    return (
        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Web Development Portfolio</h2>
            <p className="text-gray-700 mb-4">Welcome to my single page application showcasing my web development projects.</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Include individual project components here */}
            </div>
        </section>
    );
};