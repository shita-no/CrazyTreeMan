let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth

export default class gameinfo{
	constructor(ctx){
		this.ctx = ctx
	}

	render(score){	
		this.ctx.font = "30px Microsoft YaHei"
		this.ctx.fillStyle = "#ffffff"	
  		this.ctx.fillText("得分："+score,  screenWidth / 2 - 50,  100)
	}

	gameOver(score){
		this.ctx.fillStyle = "#883a3a"
		this.ctx.fillRect(screenWidth / 2 - 150,screenHeight / 2 - 100,300,160)
		this.ctx.font = "24px Microsoft YaHei"
		this.ctx.fillStyle = "#fefefe"	
		   this.ctx.fillText(
		      'Game Over',
		      screenWidth /2-60,
		      screenHeight / 2 - 60
		    )

		    this.ctx.fillText(
		      'Score : ' + score,
		      screenWidth / 2 - 50,
		      screenHeight / 2 - 100 + 80
		    )

		    this.ctx.fillRect(screenWidth / 2 - 100,screenHeight / 2,200,50)

		    this.ctx.fillStyle = "#883a3a"
		    this.ctx.fillText(
		      'Once Again',
		      screenWidth / 2 - 60,
		      screenHeight / 2 +30
		    )

		    this.btnArea = {
		      startX: screenWidth / 2 - 150,
		      startY: screenHeight / 2 - 100,
		      endX  : screenWidth / 2  + 150,
		      endY  : screenHeight / 2 - 100 + 160
		    }
	}
}