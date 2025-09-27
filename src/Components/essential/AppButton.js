import { Button } from 'antd';
import PropTypes from 'prop-types';
import { Children } from 'react';

const AppButton = ({
    btnId,
    btndisabled,
    btnStyle,
    btnClassName,
    // btnOnClick,
    htmlType = 'button',
    btntype = 'default',
    children,
    ...props
}) => {
    return (
        <Button
            id={btnId}
            disabled={btndisabled}
            style={btnStyle}
            className={btnClassName}
            // onClick={btnOnClick}
            htmlType={htmlType}
            type={btntype}
            {...props}
        ><span>{children}</span></Button>
    );
};

AppButton.propTypes = {
    btnId: PropTypes.string.isRequired,
    // btnOnClick: PropTypes.func.object,
    btndisabled: PropTypes.bool,
    btnStyle: PropTypes.object,
    btnClassName: PropTypes.string,
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
    type: PropTypes.oneOf(['default', 'primary', 'dashed', 'text', 'link']),
};

export default AppButton;