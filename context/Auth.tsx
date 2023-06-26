import { useRouter, useSegments } from "expo-router";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  user: object | null;
}>({
  signIn() {
    return;
  },
  signOut() {
    return;
  },
  user: {},
});

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(user: object | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments.at(0) === "(auth)";

    if (!user && !inAuthGroup) {
      console.log(segments);

      router.replace("/SignIn");
    } else if (user && inAuthGroup) {
      router.replace("/Home");
    }
  }, [user, segments]);
}

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: () => setUser({}),
        signOut: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
