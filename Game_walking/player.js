/*
 * объект игрока, здесь будут храниться все методы и свойства, связанные с ним
 * @property {int} x Позиция по оси Х
 * @property {int} у Позиция по оси У
 */
const player = {
    x: 0,
    y: 0,

    /*
     * Двигает игрока по переданному направлению
     * @ param{{x: int, y:int}} nextPoint Следующая точка пользователя
     */
    move(nextPoint){
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};