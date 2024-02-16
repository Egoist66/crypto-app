import {FC} from "react";
import {Layout} from "antd";
import {headerStyle} from "../../styles/style.ts";

export const Header: FC = () => {
    return (
        <Layout.Header style={headerStyle}>Header</Layout.Header>

    )
}