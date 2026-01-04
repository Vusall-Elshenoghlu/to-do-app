import { ILeftMenuItemProps } from '../../public';
import { useLeftMenuItemStyles } from './left-menu-item.style';
import classNames from 'classnames';

const LeftMenuItemComponent = ({
                                   name,
                                   icon,
                                   onClick,
                                   active
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
            </div>
        </li>
    );
};

export default LeftMenuItemComponent;