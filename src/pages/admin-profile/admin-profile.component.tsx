// AdminProfileComponent.tsx
import React, { useEffect, useState } from 'react';
import { useProfileStyles } from "./admin-profile.style";
import { IProfile } from "./admin-profile";
import { useProfile, useUpdateProfile } from "./actions/admin-profile.query";
import useLocalization from "../../assets/lang";

const AdminProfileComponent: React.FC = () => {
    const classes = useProfileStyles();
    const { data: profile, isLoading } = useProfile();
    const translate = useLocalization();
    const updateProfileMutation = useUpdateProfile();

    const [formData, setFormData] = useState<IProfile | null>(null);

    useEffect(() => {
        if (profile) setFormData(profile);
    }, [profile]);

    if (isLoading || !formData) return <div className={classes.loading}>{translate('settings_title_profile_loading')}</div>;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => prev && { ...prev, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData) {
            updateProfileMutation.mutate(formData);
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.profileCard}>
                <div className={classes.avatarWrapper}>
                    <img
                        src={formData.photoUrl || '/default-avatar.png'}
                        alt="Avatar"
                        className={classes.avatar}
                    />
                </div>
                <h2 className={classes.name}>{formData.firstName} {formData.lastName}</h2>
                <p className={classes.email}>{formData.email}</p>
            </div>

            <form className={classes.form} onSubmit={handleSubmit}>
                <h3 className={classes.formTitle}>{translate('settings_title_profile_edit')}</h3>
                <input
                    className={classes.input}
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ad"
                />
                <input
                    className={classes.input}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Soyad"
                />
                <input
                    className={classes.input}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    className={classes.input}
                    name="photoUrl"
                    value={formData.photoUrl || ''}
                    onChange={handleChange}
                    placeholder="Avatar URL"
                />
                <button type="submit" className={classes.button}>
                    {translate('settings_title_profile_save')}
                </button>

                {updateProfileMutation.isLoading && <p className={classes.status}>Yenilənir...</p>}
                {updateProfileMutation.isSuccess && <p className={classes.statusSuccess}>Uğurla yeniləndi!</p>}
                {updateProfileMutation.isError && <p className={classes.statusError}>Xəta baş verdi!</p>}
            </form>
        </div>
    );
};

export default AdminProfileComponent;
