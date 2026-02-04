export const BASE_URL = "VITE_API_URL=https://expensetrackerbackend-production-fe05.up.railway.app";

export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        REGISTER: "/api/v1/auth/register",
        GET_USER_INFO: "/api/v1/auth/getUser",
    },
    DASHBOARD: {
        GET_DATA: "/api/v1/dashboard",
    },
    INCOME: {
        ADD_INCOME: "/api/v1/income/add",
        UPDATE_INCOME: (incomeId) => `/api/v1/income/update/${incomeId}`,
        GET_ALL_INCOME: "/api/v1/income/get",
        GET_INCOME_BY_ID: (incomeId) => `/api/v1/income/get/${incomeId}`,
        DELETE_INCOME: (incomeId) => `/api/v1/income/${incomeId}`,
        DOWNLOAD_INCOME: "/api/v1/income/downloadexcel",
    },
    EXPENSE: {
        ADD_EXPENSE: "/api/v1/expense/add",
        UPDATE_EXPENSE: (expenseId) => `/api/v1/expense/update/${expenseId}`,
        GET_ALL_EXPENSE: "/api/v1/expense/get",
        GET_EXPENSE_BY_ID: (expenseId) => `/api/v1/expense/get/${expenseId}`,
        DELETE_EXPENSE: (expenseId) => `/api/v1/expense/${expenseId}`,
        DOWNLOAD_EXPENSE: "/api/v1/expense/downloadexcel",
    },
    IMAGE : {
        UPLOAD_IMAGE: "/api/v1/auth/upload-image",
    },
};