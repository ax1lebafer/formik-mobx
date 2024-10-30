import { observer } from "mobx-react-lite";
import UserStore from "../../stores/UserStore.ts";

function HelloUser() {
  const { user } = UserStore;

  const name = user ? user.email : "Гость";

  return <h1>Добро пожаловать, {name}</h1>;
}

export default observer(HelloUser);
