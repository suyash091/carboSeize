import React from 'react';
import {dsnCN} from "../../hooks/helper";

function AddressFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            <p>
                203, Mahaveer Castle<br/>
                JP Nagar 7th Phase, <br/>
                Bangalore
            </p>
        </div>
    );
}

export default AddressFooter;