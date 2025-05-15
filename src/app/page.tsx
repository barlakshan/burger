import Landing from "@/Components/Landing";
import Nav from "../Components/Nav/Nav";

export default function Home() {
  return (
    <main
      className="min-h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/restaurant-bg.jpg')" }}
    >
      <Nav />
      <Landing />
    </main>
  );
}
