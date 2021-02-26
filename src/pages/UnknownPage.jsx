import React from 'react';
import { useParams } from 'react-router-dom';
const UnknownPage= props => {
const { pageName }= useParams();


return(
<main className="container">
<h1 className="text-center">404</h1>
<p className="text-center">The {props.pageType} {pageName} was not found</p>
</main>

);

}
export default UnknownPage;