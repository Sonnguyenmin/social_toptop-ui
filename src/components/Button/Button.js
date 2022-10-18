//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rouned = false,
    leftIcon ,
    border = false,
    rightIcon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const clsses = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rouned,
        disabled,
        border,
        [className]: className,
    });

    return (
        <Comp className={clsses} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className= {cx('title')}> {children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

// Button.propTypes = {
//     to: PropTypes.string,
//     href: PropTypes.string,
//     primary: PropTypes.bool,
//     outline: PropTypes.bool,
//     text: PropTypes.bool,
//     rouned: PropTypes.bool,
//     disabled: PropTypes.bool,
//     small: PropTypes.bool,
//     large: PropTypes.bool,
//     border: PropTypes.bool,
//     children: PropTypes.node.isRequired,
//     leftIcon: PropTypes.node,
//     rightIcon: PropTypes.node,
//     className: PropTypes.string,
//     onClick: PropTypes.func,
// }

export default Button;
