import Main from "../Components/Main";
import { useAuth } from "../hooks/useAuth";

const Cart = () => {
  const { user } = useAuth();
  return <Main title={user[0].toUpperCase() + user.slice(1, user.length) + " Cart"}></Main>;
};

export default Cart;
