// src/utils/dateUtils.ts
import dayjs from "dayjs"
import "dayjs/locale/zh-cn"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { format, addDays, addMonths, addYears, differenceInDays, differenceInHours, isSameDay, parseISO } from "date-fns"
import { zhCN } from "date-fns/locale"

// 初始化 dayjs 插件
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.locale("zh-cn")
dayjs.tz.setDefault("Asia/Shanghai")

/**
 * 日期处理工具类 - 提供常用日期操作功能
 * 默认时区: Asia/Shanghai
 * 默认语言: 中文
 */
export default class DateUtils {
    // 日期格式化模式常量
    static readonly FORMAT = {
        DATE: "YYYY-MM-DD", // 日期格式
        TIME: "HH:mm:ss", // 时间格式
        DATETIME: "YYYY-MM-DD HH:mm:ss", // 完整日期时间格式
        ISO: "YYYY-MM-DDTHH:mm:ss.SSSZ", // ISO 8601格式
        CHINESE_DATE: "YYYY年MM月DD日", // 中文日期格式
        CHINESE_DATETIME: "YYYY年MM月DD日 HH时mm分ss秒" // 中文完整格式
    }

    /**
     * 获取当前时间 (dayjs 对象)
     * @returns 当前时间的 dayjs 对象
     */
    static now(): dayjs.Dayjs {
        return dayjs().tz()
    }

    /**
     * 获取当前时间 (Date 对象)
     * @returns 当前时间的 Date 对象
     */
    static nowDate(): Date {
        return DateUtils.now().toDate()
    }

    /**
     * 格式化日期 (使用 dayjs)
     * @param date - 日期值 (Date 对象、字符串或时间戳)
     * @param pattern - 格式化模式 (默认为 YYYY-MM-DD HH:mm:ss)
     * @returns 格式化后的日期字符串
     */
    static format(date: Date | string | number = new Date(), pattern: string = DateUtils.FORMAT.DATETIME): string {
        return dayjs(date).tz().format(pattern)
    }

    /**
     * 格式化日期 (使用 date-fns)
     * @param date - 日期值
     * @param pattern - 格式化模式 (默认为 yyyy-MM-dd HH:mm:ss)
     * @returns 格式化后的日期字符串
     */
    static formatDateFns(date: Date | string | number = new Date(), pattern: string = "yyyy-MM-dd HH:mm:ss"): string {
        const dateObj = date instanceof Date ? date : parseISO(new Date(date).toISOString())
        return format(dateObj, pattern, { locale: zhCN })
    }

    /**
     * 添加天数
     * @param date - 原始日期
     * @param days - 要添加的天数
     * @returns 新日期对象
     */
    static addDays(date: Date | string | number, days: number): Date {
        return addDays(DateUtils.toDate(date),  days)
    }

    /**
     * 添加月份
     * @param date - 原始日期
     * @param months - 要添加的月数
     * @returns 新日期对象
     */
    static addMonths(date: Date | string | number, months: number): Date {
        return addMonths(DateUtils.toDate(date),  months)
    }

    /**
     * 添加年份
     * @param date - 原始日期
     * @param years - 要添加的年数
     * @returns 新日期对象
     */
    static addYears(date: Date | string | number, years: number): Date {
        return addYears(DateUtils.toDate(date),  years)
    }

    /**
     * 计算两个日期之间的天数差
     * @param start - 开始日期
     * @param end - 结束日期
     * @returns 天数差 (正数表示结束日期在开始日期之后)
     */
    static diffInDays(start: Date | string | number, end: Date | string | number): number {
        return differenceInDays(DateUtils.toDate(end),  DateUtils.toDate(start))
    }

    /**
     * 计算两个日期之间的小时差
     * @param start - 开始日期
     * @param end - 结束日期
     * @returns 小时差 (正数表示结束日期在开始日期之后)
     */
    static diffInHours(start: Date | string | number, end: Date | string | number): number {
        return differenceInHours(DateUtils.toDate(end),  DateUtils.toDate(start))
    }

    /**
     * 检查两个日期是否为同一天
     * @param date1 - 第一个日期
     * @param date2 - 第二个日期
     * @returns 是否同一天
     */
    static isSameDay(date1: Date | string | number, date2: Date | string | number): boolean {
        return isSameDay(DateUtils.toDate(date1),  DateUtils.toDate(date2))
    }

    /**
     * 转换为 Date 对象
     * @param date - 日期值
     * @returns Date 对象
     */
    static toDate(date: Date | string | number): Date {
        if (date instanceof Date) return date
        if (typeof date === "number") return new Date(date)
        return new Date(date)
    }

    /**
     * 获取日期部分 (去除时间)
     * @param date - 原始日期
     * @returns 仅包含日期的 Date 对象 (时间部分设为 00:00:00)
     */
    static getDateOnly(date: Date | string | number = new Date()): Date {
        const d = DateUtils.toDate(date)
        return new Date(d.getFullYear(),  d.getMonth(),  d.getDate())
    }

    /**
     * 获取当月的第一天
     * @param date - 参考日期
     * @returns 当月第一天的 Date 对象
     */
    static startOfMonth(date: Date | string | number = new Date()): Date {
        const d = DateUtils.toDate(date)
        return new Date(d.getFullYear(),  d.getMonth(),  1)
    }

    /**
     * 获取当月的最后一天
     * @param date - 参考日期
     * @returns 当月最后一天的 Date 对象
     */
    static endOfMonth(date: Date | string | number = new Date()): Date {
        const d = DateUtils.toDate(date)
        return new Date(d.getFullYear(),  d.getMonth()  + 1, 0)
    }

    /**
     * 获取本周的第一天 (周一)
     * @param date - 参考日期
     * @returns 本周第一天的 Date 对象
     */
    static startOfWeek(date: Date | string | number = new Date()): Date {
        const d = DateUtils.toDate(date)
        const day = d.getDay()
        const diff = d.getDate()  - day + (day === 0 ? -6 : 1) // 调整为周一为第一天
        return new Date(d.setDate(diff))
    }

    /**
     * 获取本周的最后一天 (周日)
     * @param date - 参考日期
     * @returns 本周最后一天的 Date 对象
     */
    static endOfWeek(date: Date | string | number = new Date()): Date {
        const start = DateUtils.startOfWeek(date)
        return new Date(start.getFullYear(),  start.getMonth(),  start.getDate()  + 6)
    }

    /**
     * 转换为时间戳 (毫秒)
     * @param date - 日期值
     * @returns 时间戳 (毫秒)
     */
    static toTimestamp(date: Date | string | number = new Date()): number {
        return DateUtils.toDate(date).getTime()
    }

    /**
     * 获取中文星期几
     * @param date - 日期值
     * @returns 星期几的中文表示
     */
    static getChineseDay(date: Date | string | number = new Date()): string {
        const days = ["日", "一", "二", "三", "四", "五", "六"]
        const d = DateUtils.toDate(date)
        return `星期${days[d.getDay()]}`
    }

    /**
     * 获取日期范围
     * @param start - 开始日期
     * @param end - 结束日期
     * @returns 包含范围内所有日期的数组
     */
    static getDateRange(start: Date | string | number, end: Date | string | number): Date[] {
        const startDate = DateUtils.getDateOnly(start)
        const endDate = DateUtils.getDateOnly(end)
        const days = DateUtils.diffInDays(startDate,  endDate)

        return Array.from({  length: days + 1 }, (_, i) =>
            DateUtils.addDays(startDate,  i)
        )
    }

    /**
     * 验证日期是否有效
     * @param date - 日期值
     * @returns 是否有效日期
     */
    static isValid(date: Date | string | number): boolean {
        try {
            const d = DateUtils.toDate(date)
            return !isNaN(d.getTime())
        } catch (e) {
            return false
        }
    }

    /**
     * 解析日期字符串
     * @param dateString - 日期字符串
     * @param format - 格式 (默认为 YYYY-MM-DD)
     * @returns Date 对象
     */
    static parse(dateString: string, format: string = DateUtils.FORMAT.DATE): Date {
        return dayjs(dateString, format).tz().toDate()
    }
}
