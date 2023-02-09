import { defineStore } from 'pinia';
import { storage } from '@/utils/Storage'
// 定义接口类型
export interface UserType {
    token: string;
    username: string;
    welcome: string;
    avatar: string;
    permissions: number[];
    info: any;
}

// 创建用户的状态管理
export const useUserStore = defineStore({
    id: 'user',
    state: (): UserType  => ({
        token: '',
        username: storage.get('user') || '',
        welcome: '',
        avatar: '',
        permissions: [],
        info: ''
    }),
    // 获取状态管理
    getters: {
        getUserName():string {
            return this.username;
        },
        getUserPermissions():number[] {
            return this.permissions;
        },
        getUserToken(): string {
            return this.token;
        }
    },
    // 设置状态管理
    actions: {
        setUserName(value: string) {
            storage.set('user',value);
            this.username = value;
        },
        setUserPermissions(value: number[]) {
            this.permissions = value;
        },
        setUserToken(value: string) {
            this.token = value;
        }
    }
})

export default useUserStore;
