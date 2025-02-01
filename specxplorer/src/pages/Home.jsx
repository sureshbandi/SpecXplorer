// src/pages/Home.jsx
import Header from '../components/Header';
import Button from '../components/Button';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Home Page</h2>
        <Button onClick={handleClick}>Click Me</Button>
      </main>
    </div>
  );
}
