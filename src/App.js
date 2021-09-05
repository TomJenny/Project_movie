import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading/Loading";
import ModalVideoComponent from "./components/ModalVideo/ModalVideo";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AddNews from "./pages/Admin/Films/AddNew/AddNews";
import Edit from "./pages/Admin/Films/Edit/Edit";
import Films from "./pages/Admin/Films/Films";
import Showtime from "./pages/Admin/Showtimes/Showtime";
import AddUser from "./pages/Admin/Users/Add/AddUser";
import EditUser from "./pages/Admin/Users/Edit/EditUser";
import Users from "./pages/Admin/Users/Users";
import Checkout from "./pages/Checkout/Checkout";
import DetailCinema from "./pages/DetailCinema/DetailCinema";
import DetailFilm from "./pages/DetailFilm/DetailFilm";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/Profile/UserProfile";
import Register from "./pages/Register/Register";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import LoginTemplate from "./templates/LoginTemplate/LoginTemplate";
import UserProfileTemplate from "./templates/UserProfileTemplate/UserProfileTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate exact path="/" component={Home} />
        <HomeTemplate exact path="/home" component={Home} />
        <HomeTemplate exact path="/detailfilm/:id" component={DetailFilm} />
        <HomeTemplate
          exact
          path="/detailcinema/:cinema/:id"
          component={DetailCinema}
        />
        <CheckoutTemplate exact path="/checkout/:id" component={Checkout} />
        <LoginTemplate exact path="/login" component={Login} />
        <LoginTemplate
          exact
          path="/register"
          component={Register}
          isRegister={true}
        />
        <UserProfileTemplate
          exact
          path="/userprofile"
          component={UserProfile}
        />
        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNews} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/users" exact Component={Users} />
        <AdminTemplate path="/admin/users/addnew" exact Component={AddUser} />
        <AdminTemplate
          path="/admin/users/edit/:id"
          exact
          Component={EditUser}
        />
        <AdminTemplate
          path="/admin/films/showtime/:id/:tenphim"
          exact
          Component={Showtime}
        />
        <AdminTemplate path="/admin/showtimes" exact Component={Showtime} />

        <Route component={PageNotFound} />
      </Switch>
      <ModalVideoComponent />
    </Router>
  );
}

export default App;
