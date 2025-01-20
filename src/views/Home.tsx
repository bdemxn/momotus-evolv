import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="p-3">
      <p className="font-semibold text-xl dark:text-white">Bienvenido, {user?.user_metadata?.firstname}</p>
    </div>
  );
};

export default Home;
