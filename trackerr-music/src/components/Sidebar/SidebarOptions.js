import React from "react";
import { Option } from "./styles";

const SidebarOption = ({ title, Icon }) => {
    return (
        <Option>
            {Icon && <Icon />}
            {Icon ? <h4>{title}</h4> : <h5>{title}</h5>}
        </Option>
    );
};

export default SidebarOption;
