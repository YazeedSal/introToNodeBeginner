const { send } = require("express/lib/response")

class Msg{
    constructor(text,senderId,receiverId){
        this.text = text
        this.senderId = senderId
        this.receiverId = receiverId
        this.id = "msg"+Date.now()
        this.date = Date.now()
        this.isSeen = false
        this.isEdited = false
    }

    editMsg(newMsg){
        if (this.isSeen) return {err:true,msg: "already seen"}
        this.isEdited=true
        this.text = newMsg
        return this
    }

}

export default Msg