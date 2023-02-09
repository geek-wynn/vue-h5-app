import { defineStore } from 'pinia';

// 定义接口类型
export interface locationType {
    type: string;
    latitude: string;
    longitude: string;
    province: string;
    city: string;
    country: string;
    detail: string;
}

// 创建用户的状态管理
export const usLocationStore = defineStore({
    id: 'location',
    state: (): locationType  => ({
        type: '', // 经纬度类型 wgs84/gcj02
        latitude: '', // 纬度
        longitude: '', // 经度
        province: '', // 省
        city: '', // 市
        country: '', // 区
        detail: '', // 详细地址
    }),
    // 获取状态管理
    getters: {
        getLocationType():string {
            return this.type;
        },
    },
    // 设置状态管理
    actions: {
        setLocationType(value: string) {
            this.type = value;
        },
    }
})

export default usLocationStore;
