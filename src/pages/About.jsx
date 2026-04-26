import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Clock, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-[104px]">
      {/* Hero */}
      <section className="relative py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover opacity-20"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 to-gray-950/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs tracking-[0.3em] uppercase font-medium mb-6">Our Story</p>
          <h1 className="font-display text-6xl font-bold text-white mb-6 leading-tight italic">
            Elevating Everyday Essentials
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Founded in 2024, PrimeCommerce was built on the principle that quality design should be accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {[
              { value: '100%', label: 'Sustainable Cotton', icon: Leaf },
              { value: '24/7', label: 'Customer Support', icon: Clock },
              { value: 'Free', label: 'Worldwide Shipping', icon: Globe }
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="py-12 px-8 text-center">
                <Icon className="w-5 h-5 text-gray-400 mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-950 mb-2">{value}</p>
                <p className="text-sm text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-gray-400 tracking-[0.25em] uppercase font-medium mb-4">Our Mission</p>
            <h2 className="text-4xl font-bold text-gray-950 tracking-tight mb-6 leading-tight">
              Quality design,<br />accessible to all.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We source the best materials and work with ethical manufacturers to bring you products that last. Every item in our catalog is chosen with intention — for durability, aesthetics, and everyday utility.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We believe the things you surround yourself with should be worth keeping. That's why we hold every product to a standard we'd apply to our own homes and wardrobes.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gray-950 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Shop the Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
              className="w-full h-full object-cover"
              alt="Our mission"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs text-gray-400 tracking-[0.25em] uppercase font-medium mb-3">What We Stand For</p>
            <h2 className="text-4xl font-bold text-gray-950 tracking-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Ethical Sourcing', desc: 'Every supplier is vetted for fair labor practices and environmental responsibility.' },
              { title: 'Timeless Design', desc: 'We choose pieces that outlast trends — built to be used, not replaced.' },
              { title: 'Radical Transparency', desc: 'We share where our products come from and how they\'re made. No surprises.' }
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-950 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
