import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import { fetchAPI } from "./fetch";
export const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("Error in save your token: ", err);
    }
  },
};

export const googleOAuth = async (startOAuthFlow: any) => {
  try {
    const { createdSessionId, signUp, setActive } = await startOAuthFlow({
      redirectUrl: Linking.createURL("/(root)/(tabs)/home", {
        scheme: "myapp",
      }),
    });

    if (createdSessionId) {
      if (setActive) {
        await setActive!({ session: createdSessionId });

        if (signUp.createUserId)
          await fetchAPI("/(api)/user", {
            method: "POST",
            body: JSON.stringify({
              name: `${signUp.firstName} ${signUp.lastName}`,
              email: signUp.emailAddress,
              clerkId: signUp.createUserId,
            }),
          });

        return {
          success: true,
          code: "session_exists",
          message: "You have successfully authenticated",
        };
      }
    }
    return { success: false, code: "success", message: "An error occurred" };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      code: error.code,
      message: error?.erros[0]?.longMessage,
    };
  }
};
