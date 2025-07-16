import { useClerk } from "@clerk/clerk-expo";
import { Alert } from "react-native";
const useSignout = () => {
  const { signOut } = useClerk();
  const handleSignout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => signOut() },
    ]);
  };
  return { handleSignout };
};
export default useSignout;
