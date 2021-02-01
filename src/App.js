import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage/HomePage";

import SkillsView from "./Views/Skills/skillsView";
import Blog from "./Components/Blog/blog";
import BlogPost from "./Components/BlogPost/blogPost";
import ProjectsView from "./Views/Projects/projectsView";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route path="/"  component={HomePage} exact/>
                  <Route path="/skills"  component={SkillsView} exact/>
                  <Route path="/blog" component={Blog} exact />
                  <Route path="/blog/:postId" component={BlogPost} exact />
                  <Route path="/projects" component={ProjectsView} exact />
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
