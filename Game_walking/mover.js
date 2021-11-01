let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} возвращаем направление, введенное пользователем
     */
    getDirection(){
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true){
            let direction = parseInt(prompt('Введите число 1, 2, 3, 4, 6, 7, 8 или 9, куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)){
                return null;
            }
            if (!availableDirections.includes(direction)){
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },
    /**
     * Отдает следующую точку, в которой будет находиться пользователь после движения.
     * @param {int}  direction Направление движения игрока
     * @returns {{x:int, y:int}} следующая позиция игрока 
     */
    getNextPosition(direction){
        
        const nextPosition = {
            x: player.x,
            y: player.y,
            cancel: false
        };

        const lastPosition = {}; // Создаю объект для хранения предыдущей позиции,

        Object.assign(lastPosition, nextPosition);

        switch(direction){
            case 2:{
                nextPosition.y++;
                break;
            }
            case 4:{
                nextPosition.x--;
                break;
            }
            case 6:{
                nextPosition.x++;
                break;
            }
            case 8:{
                nextPosition.y--;
                break;
            }
            case 1:{
                nextPosition.y++;
                nextPosition.x--;
                break;
            }
            case 3:{
                nextPosition.y++;
                nextPosition.x++;
                break;
            }
            case 7:{
                nextPosition.y--;
                nextPosition.x--;
                break;
            }
            case 9:{
                nextPosition.y--;
                nextPosition.x++;
                break;
            }
        }
        if (nextPosition.x >9 | nextPosition.x < 0 | nextPosition.y > 9 |nextPosition.y < 0) {
            Object.assign(nextPosition, lastPosition);
            nextPosition.cancel = true;
            console.log('Вы упёрлись в стену!');
        }
        return nextPosition;
    }
};