export enum HttpCode {
    OK = 200,
    CREATED = 202,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDIN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}
export enum Message {
    SOMETHING_WENT_WRONG = "Something /went wrong!",
    NO_DATA_FOUND = "No data id found!",
    CREATE_FAILED = "Create is failed!",
    UPDATE_FAILED = "Updated is failed!",
    
    USED_NICK_PHONE = "You are inserting already used nick or phone!",
    NO_MEMBER_NICK = "No member with that member nick!",
    WRONG_PASSWORD = "Wrong paasword,  please try again!",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}

export default Errors;