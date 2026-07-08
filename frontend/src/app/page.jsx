import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">

        {/* Background Blur */}

        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-400 opacity-20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-pink-500 opacity-20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg text-sm font-semibold">
              🚀 India's Smart Online Form Builder
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              Create Powerful

              <span className="block text-cyan-300">
                Online Forms
              </span>

              In Minutes.

            </h1>

            <p className="mt-8 text-lg lg:text-xl leading-9 text-blue-100 max-w-xl">

              Build professional online forms like Google Forms.
              Share your forms instantly, collect responses in real-time
              and manage everything from one powerful dashboard.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="/register"
                className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition"
              >
                🚀 Get Started
              </a>

              <a
                href="/login"
                className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition"
              >
                Login
              </a>

            </div>

            <div className="grid grid-cols-3 gap-5 mt-14">

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 text-center">

                <div className="text-3xl">
                  ⚡
                </div>

                <p className="mt-2 font-semibold">
                  Fast Builder
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 text-center">

                <div className="text-3xl">
                  🔗
                </div>

                <p className="mt-2 font-semibold">
                  Easy Sharing
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 text-center">

                <div className="text-3xl">
                  📊
                </div>

                <p className="mt-2 font-semibold">
                  Live Analytics
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="absolute w-80 h-80 rounded-full bg-cyan-400 opacity-20 blur-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
              alt="Form Builder"
              className="relative rounded-3xl border-4 border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:scale-105 duration-500 w-full max-w-xl"
            />

          </div>

        </div>

      </section>
      {/* Features */}

<section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="text-blue-600 font-semibold tracking-widest uppercase">
        Features
      </span>

      <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
        Why Choose Form Builder?
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to create beautiful forms,
        collect responses and manage your data in one place.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 border border-gray-100">

        <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center text-5xl group-hover:rotate-12 transition">
          ⚡
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Easy Form Builder
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Build beautiful forms using a clean and beginner-friendly interface
          without any coding knowledge.
        </p>

      </div>

      {/* Card 2 */}

      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 border border-gray-100">

        <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center text-5xl group-hover:rotate-12 transition">
          🔗
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Share Anywhere
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Generate a public link instantly and share your forms with anyone,
          anytime.
        </p>

      </div>

      {/* Card 3 */}

      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 border border-gray-100">

        <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center text-5xl group-hover:rotate-12 transition">
          📊
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Response Analytics
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          View responses in real time and manage submissions
          directly from your dashboard.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Stats */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        Statistics
      </span>

      <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
        Trusted by Growing Users
      </h2>

      <p className="mt-5 text-lg text-gray-600">
        Our platform helps users create forms quickly and collect responses efficiently.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:scale-105 transition duration-300">

        <h2 className="text-5xl font-extrabold">
          100+
        </h2>

        <p className="mt-4 text-lg">
          Forms Created
        </p>

      </div>

      <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:scale-105 transition duration-300">

        <h2 className="text-5xl font-extrabold">
          1000+
        </h2>

        <p className="mt-4 text-lg">
          Responses
        </p>

      </div>

      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:scale-105 transition duration-300">

        <h2 className="text-5xl font-extrabold">
          24/7
        </h2>

        <p className="mt-4 text-lg">
          Availability
        </p>

      </div>

      <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:scale-105 transition duration-300">

        <h2 className="text-5xl font-extrabold">
          99%
        </h2>

        <p className="mt-4 text-lg">
          User Satisfaction
        </p>

      </div>

    </div>

  </div>

</section>
{/* How It Works */}

<section className="py-24 bg-gradient-to-b from-slate-100 to-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        Simple Process
      </span>

      <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
        Create Forms in 3 Easy Steps
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
        No technical skills required. Create, share and collect responses
        within minutes.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Step 1 */}

      <div className="relative bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-3 transition duration-300">

        <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
          1
        </div>

        <div className="text-6xl mt-6">
          📝
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Create Your Form
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Design beautiful forms using our simple drag-and-drop style interface.
        </p>

      </div>

      {/* Step 2 */}

      <div className="relative bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-3 transition duration-300">

        <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
          2
        </div>

        <div className="text-6xl mt-6">
          🔗
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Share Anywhere
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Copy the public link and share your form with students,
          friends or customers instantly.
        </p>

      </div>

      {/* Step 3 */}

      <div className="relative bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-3 transition duration-300">

        <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
          3
        </div>

        <div className="text-6xl mt-6">
          📈
        </div>

        <h3 className="text-2xl font-bold mt-6">
          View Responses
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Monitor all responses in real-time and manage them from your dashboard.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Testimonials */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        Testimonials
      </span>

      <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
        What Our Users Say
      </h2>

      <p className="mt-5 text-lg text-gray-600">
        Trusted by students, developers and professionals.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

        <div className="text-5xl">⭐⭐⭐⭐⭐</div>

        <p className="mt-6 text-gray-600 leading-8 italic">
          "This Form Builder made creating forms incredibly easy.
          The interface is clean and very user-friendly."
        </p>

        <div className="mt-8">

          <h3 className="font-bold text-lg">
            Rahul Sharma
          </h3>

          <p className="text-gray-500">
            B.Tech Student
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

        <div className="text-5xl">⭐⭐⭐⭐⭐</div>

        <p className="mt-6 text-gray-600 leading-8 italic">
          "Sharing forms and viewing responses is extremely simple.
          Highly recommended."
        </p>

        <div className="mt-8">

          <h3 className="font-bold text-lg">
            Priya Verma
          </h3>

          <p className="text-gray-500">
            Teacher
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

        <div className="text-5xl">⭐⭐⭐⭐⭐</div>

        <p className="mt-6 text-gray-600 leading-8 italic">
          "Professional design, smooth performance and easy dashboard.
          Great experience!"
        </p>

        <div className="mt-8">

          <h3 className="font-bold text-lg">
            Aman Gupta
          </h3>

          <p className="text-gray-500">
            Software Developer
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Call To Action */}

<section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-5 py-2 rounded-full mb-8">

      🚀 Start Building Today

    </div>

    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">

      Create Your First Form
      <br />

      <span className="text-yellow-300">
        In Less Than 2 Minutes
      </span>

    </h2>

    <p className="mt-8 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">

      Design beautiful forms, collect unlimited responses,
      analyze submissions and manage everything from one
      powerful dashboard.

    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <a
        href="/register"
        className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition"
      >
        🚀 Get Started Free
      </a>

      <a
        href="/login"
        className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition"
      >
        Login
      </a>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

      <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-lg">

        <h3 className="text-4xl font-bold">
          100+
        </h3>

        <p className="mt-2">
          Forms
        </p>

      </div>

      <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-lg">

        <h3 className="text-4xl font-bold">
          1K+
        </h3>

        <p className="mt-2">
          Responses
        </p>

      </div>

      <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-lg">

        <h3 className="text-4xl font-bold">
          24/7
        </h3>

        <p className="mt-2">
          Support
        </p>

      </div>

      <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-lg">

        <h3 className="text-4xl font-bold">
          99%
        </h3>

        <p className="mt-2">
          Satisfaction
        </p>

      </div>

    </div>

  </div>

</section>
{/* Footer */}

<footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Brand */}

      <div>

        <h2 className="text-3xl font-extrabold text-cyan-400">
          Form Builder
        </h2>

        <p className="mt-5 text-gray-400 leading-8">
          Create beautiful online forms, share them instantly
          and manage responses with a modern dashboard.
        </p>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="text-xl font-semibold mb-5">
          Quick Links
        </h3>

        <div className="space-y-3">

          <a href="/" className="block hover:text-cyan-400 transition">
            🏠 Home
          </a>

          <a href="/login" className="block hover:text-cyan-400 transition">
            🔐 Login
          </a>

          <a href="/register" className="block hover:text-cyan-400 transition">
            📝 Register
          </a>

        </div>

      </div>

      {/* Contact */}

      <div>

        <h3 className="text-xl font-semibold mb-5">
          Contact
        </h3>

        <div className="space-y-3 text-gray-300">

          <a
            href="mailto:gauravkaushik882@gmail.com"
            className="block hover:text-cyan-400 transition"
          >
            📧 gauravkaushik882@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/gaurav-kaushik-178078271"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-cyan-400 transition"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/gaurav908408"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-cyan-400 transition"
          >
            💻 GitHub
          </a>

          <p>
            📍 India
          </p>

        </div>

      </div>

      {/* About */}

      <div>

        <h3 className="text-xl font-semibold mb-5">
          About
        </h3>

        <p className="text-gray-400 leading-8">
          Built using Next.js, Express.js and MongoDB.
          Fast, secure and responsive Form Builder
          for students and professionals.
        </p>

      </div>

    </div>

    <div className="border-t border-gray-700 mt-12 pt-8 text-center">

      <h3 className="text-2xl font-bold">
        🚀 Thank You For Visiting
      </h3>

      <p className="mt-4 text-gray-400">
        © 2026 Form Builder. All Rights Reserved.
      </p>

      <p className="mt-2 text-gray-400">
        Built with ❤️ by
        <span className="text-cyan-400 font-bold ml-2">
          Gaurav Kaushik
        </span>
      </p>

    </div>

  </div>

    </footer>

    </>
  );
}