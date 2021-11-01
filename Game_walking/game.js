let game = {
    /**
     * Запускает игру
     */
    run(){
        while (true){
            // Получаем направление от игрока
            const direction = mover.getDirection();
            if ( direction === null ){
                console.log('Игра окончена');
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            render.clear();
            player.move(nextPoint);
            player.render();
        }

    },

    // этот метод выполняется при открытии страницы
    init(){
        console.log('Ваше положение на поле в виде О.');
        renderer.render();
        console.log('Чтобы начать игру, наберите game.run() и нажмите Enter.');
    }
};

game.init();
