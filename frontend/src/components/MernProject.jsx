import React from "react";

const MernProject = () => {
  return (
    <div>
      {/* Projects Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#f83600]">
            💻 My MERN Projects
          </h2>
          <p className="text-gray-600 mt-2">
            These are hands-on projects I’ve built while learning the MERN
            stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {/* Project Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="/images/project1.png"
              alt="Todo App"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                📝 Todo App
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                React + Tailwind project to manage daily tasks with local state.
              </p>
              <a
                href="https://your-todo-app.netlify.app"
                target="_blank"
                className="text-sm text-blue-500 font-medium hover:underline"
                rel="noreferrer"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="/images/project2.png"
              alt="User Management"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                👥 User Management
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                MERN Stack CRUD app with user add/edit/delete features.
              </p>
              <a
                href="https://your-user-crud.netlify.app"
                target="_blank"
                className="text-sm text-blue-500 font-medium hover:underline"
                rel="noreferrer"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="/images/project3.png"
              alt="Auth App"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                🔐 Auth App
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                JWT-based login/signup system with protected routes.
              </p>
              <a
                href="https://your-auth-app.netlify.app"
                target="_blank"
                className="text-sm text-blue-500 font-medium hover:underline"
                rel="noreferrer"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MernProject;
