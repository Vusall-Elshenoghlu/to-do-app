export interface IRegisterFormValues {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    gender?: "Male" | "Female" | "Other"
    dob?: string
    address: string
    imgUrl?: string
}
