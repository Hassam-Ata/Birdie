import useSignout from "@/hooks/useSignout";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const SignoutButton = () => {
  const { handleSignout } = useSignout();
  return (
    <TouchableOpacity onPress={handleSignout}>
      <Feather name="log-out" size={24} color={"#E0245E"} />
    </TouchableOpacity>
  );
};
export default SignoutButton;
