import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Bem-vindo à Home!</h1>
        <p>Essa é a página principal do seu site.</p>
      </div>
    </>
  );
};

export default Home;