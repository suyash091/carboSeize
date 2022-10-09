import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p>
                <strong>T</strong> <span>:</span> +91 9149 15 4337
            </p>
            <p className="mt-2">
                <strong>F</strong> <span>:</span> +91 9149 22 6865
            </p>
            <p className="mt-2">
                <strong>E</strong> <span>:</span> <a href="0#"> info@carboseize.com</a>
            </p>
        </div>
    );
}

export default ContentFooter;