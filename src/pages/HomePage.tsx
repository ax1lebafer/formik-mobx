import HelloUser from "../components/HelloUser/HelloUser.tsx";
import LogoutUser from "../components/LogoutUser/LogoutUser.tsx";

function HomePage() {
  return (
    <main>
      <section>
        <HelloUser />
        <LogoutUser />
      </section>
    </main>
  );
}

export default HomePage;
