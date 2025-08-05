const express = require("express");
const router = express.Router();

// 메모리 데이터
let books = [
  { id: 1, title: "javascript", auther: "김**" },
  { id: 2, title: "html",       auther: "김**" },
  { id: 3, title: "css",        auther: "김**" },
];

const findeIndexId = (idParam) => {
    return books.findIndex(p => p.id == Number(idParam))
}

router.get('/', (req, res)=>{
    try {
        res.status(201).json({message:"조회하기 성공!", books})
    } catch (error) {
        console.log("책 목록 조회 실패!", error)
        res.status(500).json({message:"내부 서버 오류..!"})
    }
})

router.get('/:id', (req, res)=>{
    try {
        const bookId = req.params.id
        const index = findeIndexId(bookId)
        console.log(index)

        if(index === -1){
            res.status(404).json({message:"책이 존재하지 않습니다!"})
        }

        res.status(201).json({message:"책 검색 완료!", book:books[index]})
    } catch (error) {
        console.log("책 목록 조회 실패!", error)
        res.status(500).json({message:"내부 서버 오류..!"})
    }
})

router.post('/', (req, res)=>{
    try {
        const { title, auther} = req.body

        if (typeof title !== 'string' || title.trim() == '' ||
            typeof auther !== 'string' || auther.trim() == '') {
            return res.status(400).json({ message: "제목과, 저자는 공백없이 작성해주세요!" })
        }

        const nextId = books.length ? Math.max(...books.map(b=>b.id+1)) : 1

        const newBook = {
            id : nextId,
            title: title,
            auther: auther,
        }

        books.push(newBook)
        res.status(201).json({message:"책 생성 완료!", books})

    } catch (error) {
        console.log("책 목록 조회 실패!", error)
        res.status(500).json({message:"내부 서버 오류..!"})
    }
})

router.put('/:id', (req, res) => {
    try {
        const bookId = Number(req.params.id)

        const index = findeIndexId(postId)
      

        if (index == -1) return res.status(404).json({ message: "책이 존재하지 않아요..!" })

        const updateData= req.body

        books[index]={
            ...books[index],
            ...updateData
        }
        return res.status(201).json({
            message: "책 개별 수정하기 완료", book: books[index]
        })
    } catch (error) {
        console.error("책 개별 수정하기 중 오류", error)
        res.status(500).json({ message: "서버오류" })
    }
})




module.exports = router