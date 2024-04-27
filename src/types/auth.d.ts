interface DtoSignIn {
    email: string;
    password: string;
}

interface DtoSignUp {
    business_name: string;
    country_id: number;
    email: string;
    full_name: string;
    mobile_phone_number: string;
    password: string;
}

interface DtoRefreshToken {
    refresh_token: string;
}

interface IUser {
    business_id: string;
    email: string;
    id: number;
    user_information_id: number;
    user_information: UserInformation;
}

interface UserInformation {
    full_name: string;
    id: number;
    mobile_phone_number: string;
}

interface DtoChangePassword {
    password: string;
    token: string;
}

interface DtoResetPassword {
    email: string;
}
