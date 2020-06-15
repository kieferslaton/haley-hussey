/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper';

import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {client} from './src/context/ApolloContext';

export const wrapRootElement = ({element}) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
)