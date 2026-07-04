import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Smart Online Form Builder
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-6">
              Create Beautiful Forms
              <br />
              Collect Responses
              <span className="text-yellow-300"> Instantly</span>
            </h1>

            <p className="mt-8 text-lg text-blue-100 leading-8">
              Build professional online forms like Google Forms.
              Share them with anyone using a simple link and collect
              responses in real time with an easy-to-use dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">

              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Fast Builder</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                <span>Easy Sharing</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <span>Live Responses</span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
              alt="Form Builder"
              className="rounded-3xl shadow-2xl border-4 border-white w-full max-w-xl"
            />

          </div>

        </div>

      </section>
            {/* Features */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Form Builder?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="text-6xl mb-5">⚡</div>

              <h3 className="text-2xl font-bold mb-4">
                Easy Form Builder
              </h3>

              <p className="text-gray-600 leading-7">
                Create beautiful online forms within minutes using our
                simple and user-friendly interface.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="text-6xl mb-5">🔗</div>

              <h3 className="text-2xl font-bold mb-4">
                Share Anywhere
              </h3>

              <p className="text-gray-600 leading-7">
                Share your forms instantly using a public link and collect
                unlimited responses.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="text-6xl mb-5">📊</div>

              <h3 className="text-2xl font-bold mb-4">
                Response Analytics
              </h3>

              <p className="text-gray-600 leading-7">
                View and manage all submitted responses from your dashboard.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>

            <h2 className="text-5xl font-bold text-blue-600">
              100+
            </h2>

            <p className="mt-3 text-gray-600">
              Forms Created
            </p>

          </div>

          <div>

            <h2 className="text-5xl font-bold text-green-600">
              1000+
            </h2>

            <p className="mt-3 text-gray-600">
              Responses Collected
            </p>

          </div>

          <div>

            <h2 className="text-5xl font-bold text-purple-600">
              24/7
            </h2>

            <p className="mt-3 text-gray-600">
              Available Anytime
            </p>

          </div>

        </div>

      </section>

      {/* How It Works */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

              <div className="text-5xl mb-5">📝</div>

              <h3 className="text-2xl font-bold mb-3">
                Create Form
              </h3>

              <p className="text-gray-600">
                Design your custom form using the visual builder.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

              <div className="text-5xl mb-5">🔗</div>

              <h3 className="text-2xl font-bold mb-3">
                Share Link
              </h3>

              <p className="text-gray-600">
                Copy the public link and share it with anyone.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

              <div className="text-5xl mb-5">📈</div>

              <h3 className="text-2xl font-bold mb-3">
                Collect Responses
              </h3>

              <p className="text-gray-600">
                View all submitted responses from your dashboard.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

<footer className="bg-slate-900 text-white">

  <div className="max-w-7xl mx-auto px-8 py-16">

    <div className="grid md:grid-cols-3 gap-12">

      {/* Logo */}

      <div>

        <h2 className="text-3xl font-bold text-blue-400">
          Form Builder
        </h2>

        <p className="mt-5 text-gray-400 leading-7">
          Create beautiful online forms, share them with anyone,
          and collect responses instantly.
          Built using Next.js, Express.js and MongoDB.
        </p>

      </div>


      {/* Contact */}

      <div>

        <h3 className="text-xl font-semibold mb-5">
          Contact
        </h3>

        <div className="space-y-4 text-gray-400">

          <p>
             <a
      href="mailto:gauravkaushik882@gmail.com"
      className="block hover:text-blue-400 transition"
    >
      📧 contact Us
    </a>
          </p>

          

    <a
      href="www.linkedin.com/in/gaurav-kaushik-178078271"
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:text-blue-400 transition"
    >
      💼 Connect On Linkedin
    </a>
          <p>
            📍 India
          </p>

        </div>

      </div>

    </div>

    {/* Bottom */}

    <div className="border-t border-gray-700 mt-12 pt-8 text-center">

  <p className="text-gray-300 text-base font-medium">
    © 2026 Form Builder. All Rights Reserved.
  </p>

  <p className="mt-3 text-gray-400">
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