const express = require("express")
const router = express.Router()



router.get('/', (req, res)=>{
    res.send("사용자 전체 목록")
})


router.post('/:id', (req, res)=>{
    const id = req.params.id
    res.send(`사용자 1명 목록 : ${id}`)
})


router.put('/:id', (req, res)=>{
    const id = req.params.id
    res.send(`사용자 1명 수정 : ${id}`)
})



router.delete('/:id', (req, res)=>{
    const id = req.params.id
    res.send(`사용자 1명 목록 : ${id}`)
})



//내보내기를 해야 외부에서 사용할 수 있음
module.exports=router