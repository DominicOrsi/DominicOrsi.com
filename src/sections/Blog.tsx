import React from "react";
import ProjectComp from "./components/ProjectComp";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import BlogComp from "./components/BlogComp";

export default function Blog() {
    return (
        <div id="blog" className="flex flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl ">Blog</h2>
            <Router>
                <Routes>
                    path="/blog"
                    element={<BlogComp />}
                </Routes>
            </Router>
            <ProjectComp
                githubLink="https://github.com/DominicOrsi/F1-Stats-App"
                imagePath="/assets/f1-stats-app.png"
                projectName="Formula One Statistics App"
                description="Built with Kotlin and Supabase for Android"
                imageOnRight={false} // Image on the left
            />
        </div>
    )
}