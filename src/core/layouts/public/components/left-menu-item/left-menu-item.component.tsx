import { useLeftMenuItemStyles } from './left-menu-item.style';
import classNames from 'classnames';
import {ILeftMenuItemProps} from "./left-menu-item";

const LeftMenuItemComponent = ({
                                   name,
                                   icon,
                                   onClick,
                                   active,
                                    extra
                               }: ILeftMenuItemProps) => {
    const classes = useLeftMenuItemStyles();

    const leftMenuItemClasses = classNames({
        [classes.link]: true,
        [classes.active]: active,
    });

    return (
        <li className={classes.item}>
            <div
                className={leftMenuItemClasses}
                onClick={onClick}
                role="button"
                tabIndex={0}
            >
                <div className={classes.itemText}>
                    {icon}
                    <span>{name}</span>
                </div>
                {extra && <div>{extra}</div>}
            </div>
        </li>
    );
};

export default LeftMenuItemComponent;