import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <NextPage to="/contact"  text="Come be a part of transformation & Disruption." {...restProps}>
            We are hiring
        </NextPage>
    );
}

export default NextPageContent;