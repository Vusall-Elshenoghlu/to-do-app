import { memo } from 'react';
import LeftMenuItemComponent from '../left-menu-item/left-menu-item.component';
import { useLeftMenuStyles } from './left-menu.style';
import classNames from 'classnames';
import { ISidebarProject } from "./left-menu";
import { useDispatch } from 'react-redux';
import { closeLeftMenu } from 'store/store.reducer';
interface ILeftMenuProps {
    isOpen?: boolean;
    projects?: ISidebarProject[];
    onProjectSelect?: (id: string) => void;
    activeProjectId?: string;
}


const LeftMenuComponent = memo(({
                                    isOpen,
                                    projects = [],
                                    onProjectSelect,
                                    activeProjectId
                                }: ILeftMenuProps) => {
    const classes = useLeftMenuStyles();
    const dispatch = useDispatch();

    const leftMenuClasses = classNames({
        [classes.leftMenu]: true,
        [classes.hide]: !isOpen,
    });

    console.log("Projects in left menu: ", projects);
    return (
        <div className={leftMenuClasses}>
            <ul>
                {projects.map((project) => (
                    <LeftMenuItemComponent
                        key={project.id}
                        name={project.name}
                        icon={
                            <span
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor: project.colorHex,
                                    display: 'inline-block',
                                    marginRight: 8,
                                }}
                            />
                        }
                        active={project.id === activeProjectId}
                        onClick={() => {
                            onProjectSelect(project.id);
                            dispatch(closeLeftMenu()); // 🔥 ƏSAS OLAN BUDUR
                        }}
                    />
                ))}
            </ul>
        </div>
    );
});

LeftMenuComponent.displayName = 'LeftMenuComponent';

export default LeftMenuComponent;