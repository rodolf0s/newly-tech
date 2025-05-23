import "./App.css";
import NewsletterList from "./components/NewsletterList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="bg-primary w-full py-4 text-white text-center text-2xl font-bold">
        Newsly Tech
      </header>
      <main className="flex-grow w-full max-w-6xl p-4">
        <NewsletterList />
      </main>
      <footer className="bg-secondary-800 w-full py-2 text-white text-center text-sm">
        <span>&copy; {new Date().getFullYear()} By Rodolfos</span>
      </footer>
    </div>
  );
}

export default App;
