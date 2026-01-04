import { useEffect, useState } from 'react';
import { Empty, Button, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

import { useProjectsQuery } from './actions/home.query';
import { useHomeStyles } from './home.style';
import { ISidebarProject } from "../../core/layouts/public/components/left-menu/left-menu";
import LeftMenuComponent from "../../core/layouts/public/components/left-menu/left-menu.component";

const HomeComponent = () => {
    const classes = useHomeStyles();
    const { projects = [], loading, refetch } = useProjectsQuery();
    const [activeProjectId, setActiveProjectId] = useState<string>();

    console.log('Projects:', projects);
    console.log('Active Project ID:', activeProjectId);

    useEffect(() => {
        if (projects.length > 0 && !activeProjectId) {
            setActiveProjectId(projects[0].id);
        }
    }, [projects, activeProjectId]);

    if (loading) return <Spin spinning={loading} />;

    const activeProject = projects?.find(p => p.id === activeProjectId);
    console.log('Active Project:', activeProject);

    return (
        <div className={classes.page}>
            {/* SIDEBAR */}
            <LeftMenuComponent
                isOpen={true}
                projects={projects}
                activeProjectId={activeProjectId}
                onProjectSelect={setActiveProjectId}
            />

            {/* MAIN CONTENT */}
            <div className={classes.content}>
                <AnimatePresence mode="wait">
                    {!projects.length ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={classes.emptyState}
                        >
                            <Empty description="Hələ heç bir proyekt yoxdur">
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    size="large"
                                >
                                    İlk proyekti yarat
                                </Button>
                            </Empty>
                        </motion.div>
                    ) : activeProject ? (
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className={classes.projectView}
                        >
                            <div className={classes.projectHeader}>
                                <div className={classes.projectTitle}>
                                    <span
                                        className={classes.projectColor}
                                        style={{ backgroundColor: activeProject.colorHex }}
                                    />
                                    <h1>{activeProject.name}</h1>
                                </div>
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                >
                                    Tapşırıq əlavə et
                                </Button>
                            </div>

                            <div className={classes.projectStats}>
                                <span className={classes.taskCount}>
                                    {activeProject.toDoItemsCount} tapşırıq
                                </span>
                            </div>

                            {/* BURDA TODO LIST KOMPONENTI GƏLƏCƏK */}
                            <div className={classes.todoList}>
                                {activeProject.toDoItemsCount === 0 ? (
                                    <Empty
                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                        description="Bu proyektdə hələ tapşırıq yoxdur"
                                    />
                                ) : (
                                    <div>
                                        {/* TodoList component buraya */}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HomeComponent;