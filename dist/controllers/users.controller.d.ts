type User = {
    id: string;
    name: string;
    email?: string;
    createdAt: string;
};
declare class CreateUserDto {
    name: string;
    email?: string;
}
declare class UpdateUserDto {
    name?: string;
    email?: string;
}
export declare class UsersController {
    create(body: CreateUserDto): User;
    findAll(): User[];
    findOne(id: string): User;
    update(id: string, body: UpdateUserDto): User;
    remove(id: string): void;
}
export {};
