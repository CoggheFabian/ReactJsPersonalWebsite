import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./Views/HomePage/HomePage";

import SkillsView from "./Views/Skills/skillsView";
import Blog from "./Views/Blog/blog";
import BlogPostView from "./Views/BlogPost/blogPostView";
import ProjectsView from "./Views/Projects/projectsView";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route path="/"  component={HomePage} exact/>
                  <Route path="/skills"  component={SkillsView} exact/>
                  <Route path="/blog" component={Blog} exact />
                  <Route path="/blog/:postId" component={BlogPostView} exact />
                  <Route path="/projects" component={ProjectsView} exact />
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
