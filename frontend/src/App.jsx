import "./styles/globalStyles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
