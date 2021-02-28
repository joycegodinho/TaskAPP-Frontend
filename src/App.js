import React from 'react';
import ReactDOM from 'react-dom';

import Pages from '/pages'
import GlobalStyle from '/components/GlobalStyle'

//<GlobalStyle />
//<Pages /> 

const App = () => {
    return(
        <div>
            <GlobalStyle />
            <Pages />
        </div>
    );
};

//to render our application within the element with an ID of root 
ReactDOM.render(<App />, document.getElementById('root'));