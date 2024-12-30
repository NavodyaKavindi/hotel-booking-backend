import express from 'express';
import{createRoom, deleteRoom, getRooms, findRoomById, updateRoom} from '../controllers/categoryController.js' 

const roomRouter= express.Router()

roomRouter.post("/", createRoom)
roomRouter.delete("/:roomId", deleteRoom)
roomRouter.get("/", getRooms)
roomRouter.get("/:roomId", findRoomById)
roomRouter.put("/:roomId", updateRoom)


export default roomRouter