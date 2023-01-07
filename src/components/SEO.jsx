import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';


export default function SEO(){

  return(
    <>‍
      <Helmet>‍
        <title>React Counter App - developed by Ayeni Ayodeji | AltSchool Africa School Of Engineering</title>‍
        <meta name="AltSchool Africa Frontend 2nd Semester Examination Project" content="React Counter App with increment, decrement, reset, setValue functions, including SEO, ErrorBoundary and 404 features." />      
        <meta name="twitter:card" content="summary_large_image" />        
        <meta name="twitter:site" content="@ayeni_ayodeji01" />
        <meta name="twitter:creator" content="@ayeni_ayodeji01" />       
        <meta name="twitter:title" content="React Counter App" />        
        <meta name="twitter:description" content="Best React Counting App" />        
        <meta name="twitter:image" content="https://miro.medium.com/max/720/1*LDroDA_P1eJIfGuuCSi1cw.webp"/>  
        <meta property="og:title" content="React Counter App" />        
        <meta property="og:description" content="Best React Counting App" />        
        <meta property="og:image" content="https://miro.medium.com/max/720/1*LDroDA_P1eJIfGuuCSi1cw.webp" />
        <meta property="og:url" content="https://zingy-praline-751efc.netlify.app/" />
        <meta property="og:site_name" content="React Counter App" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="app" />
        <meta property="fb:app_id" content="ayeni.ayodeji.35" />
      </Helmet>
    </>
  )
}

