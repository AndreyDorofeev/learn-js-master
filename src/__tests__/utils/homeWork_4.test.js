import {getMonth} from "../../utils/homeWork_4";
describe ('tests for getMonth function', () => {
    it ('Проверка результата при введении числа отличного от номера месяца', () => {
        expect(getMonth(14)).toBe('неизвестно')
    })
})
describe ('tests for getMonth function', () => {
    it ('Проверка результата при введении названий месяца', () => {
        expect(getMonth('январь')).toBe('неизвестно')
    })
})
describe ('tests for getMonth function', () => {
    it ('Проверка результата при введении правильного числа', () => {
        expect(getMonth(12)).toBe('декабрь')
    })
})