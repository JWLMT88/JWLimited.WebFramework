class SmartHTMLGenerator {
    constructor() {
      this.templates = {
        '404': this.generate404Page,
        'user-admin': this.generateUserAdminPage,
        'login': this.generateLoginPage,
        'dashboard': this.generateDashboardPage,
        'profile': this.generateProfilePage,
        'settings': this.generateSettingsPage,
        'about': this.generateAboutPage,
        'contact': this.generateContactPage,
      };
    }
  
    generate(keyword) {
      const generator = this.templates[keyword.toLowerCase()];
      if (generator) {
        return generator.call(this);
      } else {
        return this.generateGenericPage(keyword);
      }
    }
  
    wrapWithLayout(content, title) {
      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100 min-h-screen">
          <nav class="bg-blue-600 text-white p-4">
            <div class="container mx-auto">
              <a href="#" class="text-xl font-bold">YourSite</a>
            </div>
          </nav>
          <main class="container mx-auto mt-8 p-4">
            ${content}
          </main>
          <footer class="bg-gray-200 text-center p-4 mt-8">
            <p>&copy; 2024 YourSite. All rights reserved.</p>
          </footer>
        </body>
        </html>
      `;
    }
  
    generate404Page() {
      const content = `
        <div class="text-center">
          <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p class="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Go Home
          </a>
        </div>
      `;
      return this.wrapWithLayout(content, '404 Not Found');
    }
  
    generateUserAdminPage() {
      const content = `
        <h1 class="text-3xl font-bold mb-6">User Administration</h1>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <table class="w-full">
            <thead>
              <tr>
                <th class="text-left py-2">Username</th>
                <th class="text-left py-2">Email</th>
                <th class="text-left py-2">Role</th>
                <th class="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2">john_doe</td>
                <td class="py-2">john@example.com</td>
                <td class="py-2">Admin</td>
                <td class="py-2">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                  <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
              <!-- More user rows would go here -->
            </tbody>
          </table>
        </div>
      `;
      return this.wrapWithLayout(content, 'User Administration');
    }
  
    generateLoginPage() {
      const content = `
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Login</h2>
            <form>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      `;
      return this.wrapWithLayout(content, 'Login');
    }
  
    generateDashboardPage() {
      const content = `
        <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h2 class="text-xl font-semibold mb-4">User Statistics</h2>
            <p class="text-3xl font-bold text-blue-600">1,234</p>
            <p class="text-gray-600">Total Users</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h2 class="text-xl font-semibold mb-4">Revenue</h2>
            <p class="text-3xl font-bold text-green-600">$45,678</p>
            <p class="text-gray-600">This Month</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h2 class="text-xl font-semibold mb-4">Active Projects</h2>
            <p class="text-3xl font-bold text-purple-600">42</p>
            <p class="text-gray-600">Ongoing</p>
          </div>
        </div>
      `;
      return this.wrapWithLayout(content, 'Dashboard');
    }
  
    generateProfilePage() {
      const content = `
        <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div class="p-8">
            <h1 class="text-3xl font-bold mb-6">User Profile</h1>
            <div class="flex items-center mb-6">
              <img class="w-20 h-20 rounded-full mr-4" src="https://via.placeholder.com/80" alt="Profile picture">
              <div>
                <h2 class="text-2xl font-semibold">John Doe</h2>
                <p class="text-gray-600">john@example.com</p>
              </div>
            </div>
            <form>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                  Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value="John Doe">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value="john@example.com">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="bio">
                  Bio
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bio" rows="4">Web developer and coffee enthusiast.</textarea>
              </div>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      `;
      return this.wrapWithLayout(content, 'User Profile');
    }
  
    generateSettingsPage() {
      const content = `
        <h1 class="text-3xl font-bold mb-6">Settings</h1>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 class="text-2xl font-semibold mb-4">Account Settings</h2>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email-notifications">
                Email Notifications
              </label>
              <select class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email-notifications">
                <option>All</option>
                <option>Important Only</option>
                <option>None</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="language">
                Language
              </label>
              <select class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="language">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" checked>
                <span class="ml-2 text-gray-700">Enable Two-Factor Authentication</span>
              </label>
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Save Settings
            </button>
          </form>
        </div>
      `;
      return this.wrapWithLayout(content, 'Settings');
    }
  
    generateAboutPage() {
      const content = `
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6">About Us</h1>
          <p class="mb-4 text-gray-700">
            Welcome to YourSite, where innovation meets excellence. We are a team of passionate individuals dedicated to delivering high-quality solutions to our clients.
          </p>
          <p class="mb-4 text-gray-700">
            Founded in 2010, our company has grown from a small startup to a leading player in the industry. We pride ourselves on our commitment to customer satisfaction and our ability to stay ahead of the curve in a rapidly evolving technological landscape.
          </p>
          <h2 class="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p class="mb-4 text-gray-700">
            To empower businesses and individuals with innovative technology solutions that drive growth and success.
          </p>
          <h2 class="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-xl shadow-md">
              <img class="w-32 h-32 rounded-full mx-auto mb-4" src="https://via.placeholder.com/128" alt="Team member">
              <h3 class="text-xl font-semibold text-center">Jane Doe</h3>
              <p class="text-gray-600 text-center">CEO & Founder</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-md">
              <img class="w-32 h-32 rounded-full mx-auto mb-4" src="https://via.placeholder.com/128" alt="Team member">
              <h3 class="text-xl font-semibold text-center">John Smith</h3>
              <p class="text-gray-600 text-center">CTO</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-md">
              <img class="w-32 h-32 rounded-full mx-auto mb-4" src="https://via.placeholder.com/128" alt="Team member">
              <h3 class="text-xl font-semibold text-center">Emily Brown</h3>
              <p class="text-gray-600 text-center">Lead Developer</p>
            </div>
          </div>
        </div>
      `;
      return this.wrapWithLayout(content, 'About Us');
    }
}