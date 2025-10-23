/**
 * 数组工具类
 */
export class ArrayUtil {


    static groupByToMap<T>(
        array: T[],
        keySelector: (item: T) => string | number | symbol
    ): Map<string | number | symbol, T[]> {
        const map = new Map()
        array.forEach(item  => {
            const key = keySelector(item)
            if (!map.has(key))  {
                map.set(key,  [])
            }
            map.get(key)!.push(item)
        })
        return map
    }
    /**
     * 获取指定范围的子数组
     * @param arr 源数组
     * @param start 起始索引，如果为负数则从末尾开始计算
     * @param end 结束索引（不包含），如果为负数则从末尾开始计算，如果省略则截取到末尾
     * @returns 返回指定范围的子数组，如果数组为空则返回空数组
     */
    static subArray<T>(arr: T[], start: number, end?: number): T[] {
        if (ArrayUtil.isEmpty(arr)) {
            return []
        }

        const safeArr = this.safeGet(arr)
        const len = safeArr.length

        // 处理负数索引
        const actualStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len)
        const actualEnd = end === undefined ? len :
            end < 0 ? Math.max(len + end, 0) : Math.min(end, len)

        return safeArr.slice(actualStart, actualEnd)
    }
    /**
     * 安全获取数组
     * @param arr 源数组
     * @returns 如果数组为null或undefined则返回空数组，否则返回原数组
     */
    static safeGet<T>(arr: T[] | null | undefined): T[] {
        return arr || []
    }

    /**
     * 获取数组第一个元素
     * @param arr 源数组
     * @returns 如果数组不为空返回第一个元素，否则返回undefined
     */
    static getFirst<T>(arr: T[]): T | undefined {
        return this.isEmpty(arr) ? undefined : arr![0]
    }

    /**
     * 获取数组最后一个元素
     * @param arr 源数组
     * @returns 如果数组不为空返回最后一个元素，否则返回undefined
     */
    static getLast<T>(arr: T[]): T | undefined {
        return ArrayUtil.isEmpty(arr) ? undefined : arr![arr!.length - 1]
    }
    /**
     * 判断数组是否为空
     * @returns 如果所有数组为null、undefined或长度为0则返回true，否则返回true
     * @param arrays 可变参数
     */
    static allEmpty<T>(...arrays: T[]): boolean {
        return arrays.every(arr => ArrayUtil.isEmpty(arrays))
    }
    /**
     * 检查任意数组是否为空
     * @param arrays 数组集合（支持多个数组参数）
     * @returns 如果有任意数组为空则返回 true
     */
    static anyEmpty<T>(...arrays: T[]): boolean {
        return arrays.some(arr  => ArrayUtil.isEmpty(arrays))
    }
    /**
     * 判断是数组且不为空
     * @param arr 要检查的数组
     * @returns 如果数组为null、undefined或长度为0返回true，否则返回false
     */
    static isArrNotEmpty(arr: any[]): boolean {
        return Array.isArray(arr) && ArrayUtil.isNotEmpty(arr)
    }
    /**
     * 判断数组是否为空
     * @param arr 要检查的数组
     * @returns 如果数组为null、undefined或长度为0返回true，否则返回false
     */
    static isEmpty(arr: any[]): boolean {
        return !arr || arr.length === 0
    }

    /**
     * 判断数组是否不为空
     * @param arr 要检查的数组
     * @returns 如果数组不为null、undefined且长度大于0返回true，否则返回false
     */
    static isNotEmpty(arr: any[]): boolean {
        return !this.isEmpty(arr)
    }

    /**
     * 安全获取数组指定索引的元素
     * @param arr 源数组
     * @param index 索引
     * @returns 如果索引有效则返回对应元素，否则返回undefined
     */
    static get<T>(arr: T[], index: number): T | undefined {
        if (this.isEmpty(arr) || index < 0 || index >= arr.length) {
            return undefined
        }
        return arr[index]
    }

    /**
     * 移除数组中的重复元素
     * @param arr 要处理的数组
     * @param strictTypeCheck
     * @returns 去重后的新数组
     */
    static removeDuplicates<T>(arr: T[],strictTypeCheck: boolean = false): T[] {
        if (this.isEmpty(arr))  {
            return []
        }

        if (strictTypeCheck) {
            // 严格模式：区分数字和字符串
            return Array.from(new  Set(arr))
        } else {
            // 非严格模式：将数字和字符串数字视为相同
            const seen = new Set<string>()
            const result: T[] = []

            for (const item of arr) {
                const normalized = String(item) // 统一转为字符串比较
                if (!seen.has(normalized))  {
                    seen.add(normalized)
                    result.push(item)  // 保留原始类型
                }
            }

            return result
        }
    }

    /**
     * 将数组分成指定大小的块
     * @param arr 要分块的数组
     * @param size 块大小
     * @returns 分块后的二维数组
     */
    static chunk<T>(arr: T[], size: number): T[][] {
        if (this.isEmpty(arr) || size <= 0) {
            return []
        }
        const chunks: T[][] = []
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size))
        }
        return chunks
    }

    /**
     * 获取数组中的最大值
     * @param arr 数字数组
     * @returns 最大值，如果数组为空则返回undefined
     */
    static max(arr: number[]): number | undefined {
        if (this.isEmpty(arr)) {
            return undefined
        }
        return Math.max(...arr)
    }

    /**
     * 获取数组中的最小值
     * @param arr 数字数组
     * @returns 最小值，如果数组为空则返回undefined
     */
    static min(arr: number[]): number | undefined {
        if (this.isEmpty(arr)) {
            return undefined
        }
        return Math.min(...arr)
    }
}
