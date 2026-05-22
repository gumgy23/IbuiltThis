export type FormState = {
    success: boolean;
    errors?: Record<string, string[] | undefined>;
    message: string;
}