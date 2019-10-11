<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function likeIt(Reply $reply)
    {
        $reply->like()->create([
//            auth()->id()
            'user_id' => 1
        ]);

        return response('Created', Response::HTTP_CREATED);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function unLikeIt(Reply $reply)
    {
        $reply
            ->like()
            ->where(['user_id' => 1])
            ->first()
            ->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

}
