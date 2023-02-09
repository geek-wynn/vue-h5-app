import { defineStore } from 'pinia';

// 定义接口类型
export interface themeType {
    color: string,
    font: object[],
    language: string
}

// 创建用户的状态管理
export const themeStore = defineStore({
    id: 'theme',
    state: (): themeType  => ({
        color: '', // 主题色
        font: [{ color: '#FFFF' }, { family: '宋体' }], // 字体颜色
        language: '' // 系统语言
    }),
    // 获取状态管理
    getters: {
        getTheme():object[] {
            return this.font;
        },
    },
    // 设置状态管理
    actions: {
        setTheme(value: object[]) {
            this.font = value;
        },
    }
})

export default themeStore;
