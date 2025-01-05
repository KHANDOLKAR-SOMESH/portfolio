import React from "react";
import Navbar from "./Component/Navbar";
import MainCom from "./Component/MainCom";
import Card from "./Component/card";
import Internship from './Component/internship'
import Skills from './Component/Skills'
import Footer from './Component/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <MainCom />
      <h1 className='text-center mt-9 font-mono font-bold text-zinc-900  text-4xl bg-transparent'>PROJECTS</h1>
  
      <div className=" grid grid-cols-1 sm:grid-cols-3 ">
        <Card
          name="Sticky notes application  "
          discription="React.js Sticky Notes Application revolutionizes the way users organize their tasks and 
thoughts with its intuitive interface and powerful features. " s1="React" s2="tailwind" s3="Vite"
        />
        <Card
          name="Ecommerce website "
          discription="Online Clothing Store, where fashion meets convenience in a digital shopping 
experience like no other. As a premier destination for fashion-forward individuals, we 
curate a diverse selection of trendy apparel.  " s1="PHP" s2="sql" s3="bootstrap"
        />
        <Card
          name="Dashboard using power bi  "
          discription="Power BI Dashboard for Store Sales Analysis revolutionizes the way businesses track, 
analyze, and optimize their retail performance. With powerful data visualization 
capabilities and intuitive insights  " s1="powerBI" s2="kaggle" s3="Excel"
        />
        <Card
          name="Online Job portal  "
          discription="online job prtal for any job aspering individual where he can apply for job by creating the his profile. it also provide the platform the employers to post job and hore skillfull workers   " s1="php" s2="asp.net" s3="jquerry"
        />
      </div>

      <Skills/>
      <Internship/>
      <Footer/>
    </>
  );
};

export default App;
