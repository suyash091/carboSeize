import React from 'react';
import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <div className={dsnCN('copyright', className)} {...restProps}>
            <div className="text-center">
                <p>© {new Date().getFullYear()} CarboSeize</p>
                <div className="copyright-text over-hidden">
                    Designed by
                    <a href="0#" target="_blank">
                        Suyash Dixit
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Copyright;