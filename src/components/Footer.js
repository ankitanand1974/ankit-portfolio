export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Ankit Anand. All rights reserved.</p>
        </div>
      </footer>
    )
  }