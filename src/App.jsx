import "./App.css";
import NewsletterList from "./components/NewsletterList";

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <header className="bg-primary w-full py-6 text-white text-center text-3xl font-bold shadow-lg">
        Newsly Tech
      </header>
      <main className="flex-grow w-full max-w-6xl p-4">
        <NewsletterList />
      </main>
      <footer className="bg-secondary w-full py-3 text-tertiary text-center text-sm">
        <span>&copy; {new Date().getFullYear()} By Rodolfos</span>
      </footer>
    </div>
  );
}

export default App;
