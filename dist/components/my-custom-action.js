import React from 'react';
import { Box, H3 } from '@adminjs/design-system';
const MyCustomAction = (props) => {
    const { record } = props;
    return (React.createElement(Box, { flex: true },
        React.createElement(Box, { variant: "white", width: 1 / 2, boxShadow: "card", mr: "xxl", flexShrink: 0 },
            React.createElement(H3, null, "Example of a simple page"),
            React.createElement("p", null, "Where you can put almost everything"),
            React.createElement("p", null, "like this:"),
            React.createElement("p", null,
                React.createElement("img", { src: "https://i.redd.it/rd39yuiy9ns21.jpg", alt: "stupid cat", width: 300 }))),
        React.createElement(Box, null,
            React.createElement("p", null, "Or (more likely), operate on a returned record:"),
            React.createElement(Box, { overflowX: "auto" }, JSON.stringify(record)))));
};
export default MyCustomAction;
