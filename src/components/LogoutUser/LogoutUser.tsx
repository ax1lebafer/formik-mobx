import Button from "../Button/Button.tsx";
import UserStore from "../../stores/UserStore.ts";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes.ts";
import styles from "./LogoutUser.module.css";

function LogoutUser() {
  const navigate = useNavigate();

  function onLogout() {
    UserStore.logout();
    navigate(appRoutes.LOGIN);
  }

  return (
    <Button className={styles.button} onClick={onLogout}>
      Выйти
    </Button>
  );
}

export default LogoutUser;
