import React from "react";
import Board from "./Board";

function BoardList(props){
    return(
        <div>
            <Board
                title="타이틀1"
                name="이름1"
                content="1111111111111111"
                date={new Date().toLocaleTimeString()}
                imgUrl="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMzFfNjEg/MDAxNDkwOTM2NjE4MDQy.eIMvlKaVriccpz8TPo-Wyagr3J6oEz_pRe3S32gADVIg.jQUkh4ws9TiGn6y2h2iu3z5xmyKvxrRMgS0rjJVTRPQg.PNG.jkirby/%EC%9E%A0%EB%A7%8C%EB%B3%B4.png?type=w800"
            />

            <Board
                title="타이틀2"
                name="이름2"
                content="22222222222222222"
                date={new Date().toLocaleTimeString()}
                imgUrl="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjhfMjQ3%2FMDAxNzE0MzE0MTk4OTE0.H0jnmRzv_RtoRINPYYwfoFjDttbjpBu4i1uh1huaE2og.S9me1RbMMK8MGEvyVFxv_esGORWeuvj5V6R3GDiXZKcg.JPEG%2FIMG_3863.JPG&type=sc960_832"
            />
        </div>
    );
}
export default BoardList;