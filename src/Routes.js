/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import { Container } from "@material-ui/core";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo/IndividualCourse";
import MyCourses from "./pages/CoursePageViewWithVideo/index";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage/index";
import CourseDetail from "./pages/CourseDetail";
import Privacy from "./pages/Info/Privacy";
import Terms from "./pages/Info/Terms";
import Faqs from "./pages/Info/Faqs";
import About from "./pages/Info/About";

const renderRoutes = () => (
  <Container maxWidth="xs" style={{ margin: "auto", padding: 0 }}>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/course/:id" exact component={CourseDetail} />
      <Route path="/mycourses/:coursename" exact component={CoursePage} />
      <Route path="/privacy" exact component={Privacy} />
      <Route path="/about" exact component={About} />
      <Route path="/faq" exact component={Faqs} />
      <Route path="/terms-and-conditions" exact component={Terms} />

      <MainLayout>
        <SwipeableRoutes replace>
          <Route path="/home" exact component={HomePage} />
          <Route path="/mycourses" exact component={MyCourses} />
          <Route path="/wishlist" exact component={WishlistPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </SwipeableRoutes>
      </MainLayout>
    </Switch>
  </Container>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
