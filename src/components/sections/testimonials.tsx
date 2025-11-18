import Link from 'next/link';

const WorkflowsSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-[32px] md:text-5xl heading-strong text-black mb-6">
            Streamline Your Work
          </h2>
          <p className="text-lg md:text-xl text-black/70 mb-12 max-w-3xl mx-auto">
            AI-powered workflows designed to collaborate with sales professionals to deliver precise, purpose-built work product. More coming soon.
          </p>
          <div className="flex justify-center">
            <Link
              href="/workflows"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Explore Workflows
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;