import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleDetail from "./containers/ArticleDetailView";
import ArticleList from "./containers/ArticlesList";
import ArticleView from "./containers/intermediate";


const BaseRouter = () =>(
     <div>
        <Routes>
            <Route exact path='/' element={<ArticleList />} />
            <Route exact path='/:articleID' element={<ArticleView />} />
        </Routes>
    </div>
    )
export default BaseRouter;