import { useEffect, useState } from 'react';
import { Empty, Button, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useHomeStyles } from './home.style';
import LeftMenuComponent from "../../core/layouts/public/components/left-menu/left-menu.component";
import { IProject } from "../../core/layouts/public/components/left-menu/left-menu";
import {useDeleteProject, useProjectsQuery} from "../../core/layouts/public/components/left-menu/actions/project.query";
import CreateProjectModal from "../../core/layouts/public/components/left-menu/components/create-project-modal";
import {useTodosQuery} from "../../core/layouts/public/components/left-menu/actions/todo.query";
import TodoList from "../../core/layouts/public/components/left-menu/components/todo-list.component";

const HomeComponent = () => {
    const classes = useHomeStyles();
    const { data: projects = [], isLoading } = useProjectsQuery();
    const deleteProject = useDeleteProject();

    const [activeProjectId, setActiveProjectId] = useState<string>();
    const [createOpen, setCreateOpen] = useState(false);
    const [editProject, setEditProject] = useState<IProject | null>(null);

    useEffect(() => {
        if (projects.length > 0 && !activeProjectId) {
            setActiveProjectId(projects[0].id);
        }
    }, [projects, activeProjectId]);

    const activeProject = projects.find(p => p.id === activeProjectId);

    const handleEditProject = (project: IProject) => {
        setEditProject(project);
        setCreateOpen(true);
    };

    const handleDeleteProject = (projectId: string) => {
        if (window.confirm("Projketi silmək istədiyinizə əminsiniz?")) {
            deleteProject.mutate(projectId);
        }
    };
    const { data: todos = [], isLoading: todosLoading } = useTodosQuery(activeProjectId);

    if (isLoading) return <Spin spinning />;

    return (
        <div className={classes.page}>
            <LeftMenuComponent
                isOpen
                projects={projects}
                activeProjectId={activeProjectId}
                onProjectSelect={setActiveProjectId}
                onAddProject={() => { setEditProject(null); setCreateOpen(true); }}
                onEditProject={handleEditProject}
                onDeleteProject={handleDeleteProject}
            />

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
                                    onClick={() => { setEditProject(null); setCreateOpen(true); }}
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

                            <div className={classes.todoList}>
                                {activeProject.toDoItemsCount === 0 ? (
                                    <Empty
                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                        description="Bu proyektdə hələ tapşırıq yoxdur"
                                    />
                                ) : (
                                    <div className={classes.todoList}>
                                        <TodoList projectId={activeProject.id} todos={todos} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

            {/* Create / Edit Project Modal */}
            <CreateProjectModal
                open={createOpen}
                onClose={() => setCreateOpen(false)}
                editProject={editProject}
            />
        </div>
    );
};

export default HomeComponent;
