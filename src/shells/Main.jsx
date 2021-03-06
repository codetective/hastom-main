import React from 'react';
import Layout from '../components/MAIN/Global/Layout';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Blogpage from '../pages/Blogpage';
import AuthPage from '../pages/AuthPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/404Page';
import CashewServicePage from '../pages/CashewServicePage';
import CattleRanchServicePage from '../pages/CattleRanchingServicePage';
import AgricInstituteServicePage from '../pages/AgricInstituteServicePage';
import BeefProcessingServicePage from '../pages/BeefProcessingServicePage';
import FarmLandsServicePage from '../pages/FarmLandsServicePage';
import BlogListingByCategory from '../pages/BlogListingByCategory';
import BlogRead from '../pages/BlogRead';

export default function Main() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="blog" component={Blogpage} />
        <Route
          exact
          path="/blog-category/:category"
          component={BlogListingByCategory}
        />
        <Route exact path="/blog-article/:article" component={BlogRead} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/cashew-farm" component={CashewServicePage} />
        <Route
          exact
          path="/agricultural-institute"
          component={AgricInstituteServicePage}
        />
        <Route
          exact
          path="/beef-processing"
          component={BeefProcessingServicePage}
        />
        <Route exact path="/farmlands" component={FarmLandsServicePage} />
        <Route exact path="/cattle-ranch" component={CattleRanchServicePage} />
        <Route exact path={['/login', '/register']} component={AuthPage} />
        <Route path="/blog/:category" component={Blogpage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}
