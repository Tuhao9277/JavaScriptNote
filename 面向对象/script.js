function Game() {
   
}
// 初始化棋盘格
Game.prototype.init = function () {

   
    // 文件碎片的形式添加到页面上
    var frag = document.createDocumentFragment();
    // 循环添加棋盘格
    for (let i = 0; i < 20; i++) {
        var tr = document.createElement("tr");
        for (let j = 0; j < 20; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
        }
        frag.appendChild(tr);
    }
    gameMap.appendChild(frag);

}
// 游戏开始
Game.prototype.start = function () {
    // 初始化
    this.init();
    // 新建一条🐍
    this.snake = new Snake(this);
    // 创建食物
    this.createFood();
    // 执行键盘监听事件
    this.addKeyListener();
}
// 添加键盘监听
Game.prototype.addKeyListener = function () {
    var that = this;
    document.addEventListener("keydown", function (e) {
        e = e || event;
        var keyCode = e.keyCode || e.which;
        // 匹配键盘方向键
        switch (keyCode) {
            case 37: that.snake.dir = Snake.LEFT;
                break;
            case 38: that.snake.dir = Snake.UP;
                break;
            case 39: that.snake.dir = Snake.RIGHT;
                break;
            case 40: that.snake.dir = Snake.DOWN;
                break;
        }

    })
}
// 创建食物
Game.prototype.createFood = function () {
    var that = this;
    //随机坐标生成食物
    var food = { 
        row: randomInt(0, 20), 
        col: randomInt(0, 20) 
    };
    //排除🐍的位置，如果在🐍身上，则重新随机生成
    while (isCover(food))
        var food = {
            row: randomInt(0, 20), 
            col: randomInt(0, 20)
         };
    // 将产生的食物所在单元格设置为food
    gameMap.children[food.row].children[food.col].className = "food";
    // 覆盖检测方法，遍历🐍身
    function isCover(food) {
        return that.snake.body.some(function (node) {
            return node.row == food.row && node.col == food.col;

        })
    }
}
// 🐍构造函数，获取game
function Snake(game) {
    this.game = game;
    this.init();
}

Snake.UP = 1;
Snake.RIGHT = 2;
Snake.DOWN = 3;
Snake.LEFT = 4;
// 初始化🐍
Snake.prototype.init = function () {
    this.interval = 300;
    this.dir = randomInt(1, 5);
    this.body = [{ row: randomInt(0,20), col: randomInt(0, 20) }];
    this.print();
    this.move();
    
}

// 🐍的渲染
Snake.prototype.print = function () {
    this.body.forEach(function (item) {
       
        gameMap.children[item.row].children[item.col].className = "snake";
    })
}
// 🐍的移动，上下左右
Snake.prototype.move = function () {
    var that = this;
    setTimeout(function () {
        switch (that.dir) {
            case Snake.UP:{
                that.next = {
                    row: that.body[0].row - 1,
                    col: that.body[0].col
                }
                break;
            }
            case Snake.RIGHT:{
                that.next = {
                    row: that.body[0].row,
                    col: that.body[0].col + 1
                }
                break;
            }
            case Snake.DOWN:{
                that.next = {
                    row: that.body[0].row + 1,
                    col: that.body[0].col
                }
                break;
            }
            case Snake.LEFT:{
                that.next = {
                    row: that.body[0].row,
                    col: that.body[0].col - 1
                }
                break;
        }
    }
        that.onestep(that.next);
        //游戏未结束
        setTimeout(arguments.callee.bind(this), that.interval);
    }, this.interval)
}
// 判断临界条件,撞墙，自尽，吃食物
Snake.prototype.onestep = function (next) {
    var that = this;

    if (isWall(next)) {
        alert("GG");
        throw new Error("撞墙!");
    }
    else if (isSelf(next)) {
        alert("自尽！");
        throw new Error("自尽!");
    } else if (isFood(next)) {
        
        this.game.createFood();
        this.unshift(next);
        this.interval = Math.max(this.interval - 20, 200);
    } else {
        console.log("gogogo")
        // 继续前进
        this.pop();
        this.unshift(next);
    }
    function isWall(next) {
        return next.row < 0 || next.row > 19 || next.col < 0 || next.col > 19;

    }
    function isSelf(next) {
        return that.body.some(function (node) {
            return node.row == next.row && node.col == next.col;
        })
    }
    function isFood(next) {
        return gameMap.children[next.row].children[next.col].className == "food";
    }
}
// 去尾
Snake.prototype.pop = function () {
    var last = this.body.pop();
    
    gameMap.children[last.row].children[last.col].className = "";
   
}
// 填头
Snake.prototype.unshift = function (next) {
    this.body.unshift(next);
    
    gameMap.children[next.row].children[next.col].className = "snake";

}