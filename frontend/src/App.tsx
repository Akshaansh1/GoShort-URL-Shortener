import UrlForm from "./components/UrlFrom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">GoShorty</h1>
      <UrlForm />
    </div>
  );
}