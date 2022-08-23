import { useLocalStorage } from "@mantine/hooks";

export default function authHeader(token) {
  if (token) {
    return { Authorization: "Bearer " + token }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
