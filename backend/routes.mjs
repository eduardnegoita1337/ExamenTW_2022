import express from 'express';
import {Video, FavouriteList} from './repository.mjs';
import {getRecords, postRecord, deleteRecords, getRecord,
headRecord, putRecord, patchRecord, deleteRecord} from './service.mjs';


const router = express.Router();

router.route('/video')
    .get((request, response) => getRecords(Video, request, response))
    .post((request, response) => postRecord(Video, request, response))
    .delete((request, response) => deleteRecords(Video, request, response))

router.route('/video/:id')
.get((request, response) => getRecord(Video, request, response))
.head((request, response) => headRecord(Video, request, response))
.put((request, response) => putRecord(Video, request, response))
.patch((request, response) => patchRecord(Video, request, response))
.delete((request, response) => deleteRecord(Video, request, response))

router.route('/favouriteList')
    .get((request, response) => getRecords(FavouriteList, request, response))
    .post((request, response) => postRecord(FavouriteList, request, response))
    .delete((request, response) => deleteRecords(FavouriteList, request, response))

router.route('/favouriteList/:id')
.get((request, response) => getRecord(FavouriteList, request, response))
.head((request, response) => headRecord(FavouriteList, request, response))
.put((request, response) => putRecord(FavouriteList, request, response))
.patch((request, response) => patchRecord(FavouriteList, request, response))
.delete((request, response) => deleteRecord(FavouriteList, request, response))

export default router;