export interface ValidationResult {
    valid: boolean;
    errors: string[];
}
export interface PasswordStrength {
    score: number;
    label: 'very-weak' | 'weak' | 'fair' | 'strong' | 'very-strong';
    feedback: string[];
}
export declare function validateEmail(email: string): ValidationResult;
export declare function validatePassword(password: string): ValidationResult;
export declare function validateUsername(username: string): ValidationResult;
export declare function scorePasswordStrength(password: string): PasswordStrength;
export declare function sanitizeInput(input: string): string;
export declare function validateRequired(value: unknown, fieldName: string): ValidationResult;
export declare function validateMinLength(value: string, min: number, fieldName: string): ValidationResult;
export declare function validateMaxLength(value: string, max: number, fieldName: string): ValidationResult;
//# sourceMappingURL=validators.d.ts.map