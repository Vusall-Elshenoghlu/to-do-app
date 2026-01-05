import { memo } from 'react';
import LeftMenuItemComponent from '../left-menu-item/left-menu-item.component';
import { useLeftMenuStyles } from './left-menu.style';
import classNames from 'classnames';
import { IProject } from "./left-menu";
import { useDispatch } from 'react-redux';
import { closeLeftMenu } from 'store/store.reducer';
import ColorDot from "./components/color-dot.component";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Button } from 'antd';

interface ILeftMenuProps {
    isOpen?: boolean;
    projects?: IProject[];
    activeProjectId?: string;
    onProjectSelect?: (id: string) => void;
    onAddProject?: () => void;
    onEditProject?: (project: IProject) => void;
    onDeleteProject?: (projectId: string) => void;
}

const LeftMenuComponent = memo(({
                                    isOpen,
                                    projects = [],
                                    activeProjectId,
                                    onProjectSelect,
                                    onAddProject,
                                    onEditProject,
                                    onDeleteProject,
                                }: ILeftMenuProps) => {
    const classes = useLeftMenuStyles();
    const dispatch = useDispatch();

    const leftMenuClasses = classNames({
        [classes.leftMenu]: true,
        [classes.hide]: !isOpen,
    });

    return (
        <div className={leftMenuClasses}>
            <ul>
                {projects.map(project => {
                    const menu = (
                        <Menu>
                            <Menu.Item onClick={() => onEditProject?.(project)}>Edit</Menu.Item>
                            <Menu.Item onClick={() => onDeleteProject?.(project.id)}>Delete</Menu.Item>
                        </Menu>
                    );

                    return (
                        <LeftMenuItemComponent
                            key={project.id}
                            name={project.name}
                            icon={<ColorDot color={project.colorHex} />}
                            active={project.id === activeProjectId}
                            onClick={() => {
                                onProjectSelect?.(project.id);
                                dispatch(closeLeftMenu());
                            }}
                            extra={
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Button type="text" icon={<EllipsisOutlined />} />
                                </Dropdown>
                            }
                        />
                    );
                })}
            </ul>

            <div className={classes.addProject}>
                <button onClick={onAddProject}>
                    <PlusOutlined />
                    <span>Yeni proyekti yarat</span>
                </button>
            </div>
        </div>
    );
});

LeftMenuComponent.displayName = 'LeftMenuComponent';

export default LeftMenuComponent;
