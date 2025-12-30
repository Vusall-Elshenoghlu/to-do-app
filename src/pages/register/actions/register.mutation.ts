import type { IRegisterFormValues } from "../register.d";

export const registerMutation = async (values: IRegisterFormValues): Promise<any> => {
    // Simulate API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Registration data:", values);

            // Simulate successful registration
            resolve({
                success: true,
                message: "Registration successful",
                user: {
                    id: "123",
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                },
            });

            // Simulate error (uncomment to test)
            // reject(new Error('Email already exists'));
        }, 1500);
    });
};
