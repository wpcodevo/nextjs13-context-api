import Counter from "../components/counter.component";
import ListUsers from "../components/users.component";

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <Counter />
      <ListUsers />
    </main>
  );
}
