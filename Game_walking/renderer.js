let renderer = {
    // Сюда зпишем все, что надо отобразить
    map: '',

    /**
     * * Отображает игру в консоли
     */
    render(){
        for (let row = 0; row <config.rowsCount; row++){
            for (let col = 0; col <config.colsCount; col++){
                this.map += 'x ';
            }
            this.map += '\n';
        }
        console.log(this.map);
    }
    
}