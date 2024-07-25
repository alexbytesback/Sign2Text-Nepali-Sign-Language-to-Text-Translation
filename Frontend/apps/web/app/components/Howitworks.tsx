// File: app/components/HowItWorksSection.tsx
const HowItWorksSection = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img src="path-to-your-image.jpg" alt="How it works" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-600 mb-4">Explanation of how Sign2Text works.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Step one</li>
                <li>Step two</li>
                <li>Step three</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HowItWorksSection;
  