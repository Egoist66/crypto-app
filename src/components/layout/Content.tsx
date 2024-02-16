import {FC} from "react";
import {Layout} from "antd";
import {contentStyle} from "../../styles/style.ts";

export const Content: FC = () => {
    return (
        <Layout.Content style={contentStyle}>Content</Layout.Content>

    )
}